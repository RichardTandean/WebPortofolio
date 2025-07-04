'use client';

import { useState, useEffect, useRef } from 'react';
import { Toast } from '@/components/ui/toast';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { Eye, EyeOff, Settings, LogOut, Upload } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
}

interface CV {
  filename: string;
  uploadedAt: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [newIdentifier, setNewIdentifier] = useState('');
  const [currentCV, setCurrentCV] = useState<CV | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setToastType('success');
        setToastMessage('Login successful!');
        setShowToast(true);
        fetchMessages();
      } else {
        setToastType('error');
        setToastMessage('Invalid identifier');
        setShowToast(true);
      }
    } catch (error) {
      setToastType('error');
      setToastMessage('An error occurred');
      setShowToast(true);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      setToastType('error');
      setToastMessage('Failed to fetch messages');
      setShowToast(true);
    }
  };

  const toggleMessageRead = async (id: number, currentRead: boolean) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ read: !currentRead }),
      });

      if (!response.ok) throw new Error('Failed to update message');
      
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: !currentRead } : msg
      ));
    } catch (error) {
      setToastType('error');
      setToastMessage('Failed to update message');
      setShowToast(true);
    }
  };

  const updateIdentifier = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newIdentifier.length !== 6) {
      setToastType('error');
      setToastMessage('Identifier must be 6 characters');
      setShowToast(true);
      return;
    }

    try {
      const response = await fetch('/api/admin/identifier', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: newIdentifier }),
      });

      if (!response.ok) throw new Error('Failed to update identifier');
      
      setToastType('success');
      setToastMessage('Identifier updated successfully');
      setShowToast(true);
      setShowSettings(false);
      setNewIdentifier('');
    } catch (error) {
      setToastType('error');
      setToastMessage('Failed to update identifier');
      setShowToast(true);
    }
  };

  const handleCVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    if (file.type !== 'application/pdf') {
      setToastType('error');
      setToastMessage('Please upload a PDF file');
      setShowToast(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/admin/cv', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload CV');

      const data = await response.json();
      setCurrentCV({
        filename: data.cv.filename,
        uploadedAt: new Date(data.cv.uploadedAt).toLocaleDateString(),
      });

      setToastType('success');
      setToastMessage('CV uploaded successfully');
      setShowToast(true);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setToastType('error');
      setToastMessage('Failed to upload CV');
      setShowToast(true);
    }
  };

  const fetchCurrentCV = async () => {
    try {
      const response = await fetch('/api/admin/cv');
      if (!response.ok) throw new Error('Failed to fetch CV');
      
      const data = await response.json();
      if (data.cv) {
        setCurrentCV({
          filename: data.cv.filename,
          uploadedAt: new Date(data.cv.uploadedAt).toLocaleDateString(),
        });
      }
    } catch (error) {
      console.error('Error fetching CV:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
      fetchCurrentCV();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen">
        <BackgroundBeamsWithCollision>
          <div className="flex min-h-screen flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Admin Access</h1>
                <p className="text-lg text-white/60">Enter your identifier to continue</p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="identifier" className="block text-sm font-medium text-white">
                      6-Character Identifier
                    </label>
                    <input
                      id="identifier"
                      name="identifier"
                      type="password"
                      required
                      maxLength={6}
                      className="w-full px-4 py-3 text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Enter identifier"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-base font-medium text-white transition-all bg-accent hover:bg-accent/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Access Dashboard
                  </button>
                </form>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
        
        {showToast && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundBeamsWithCollision>
        <div className="min-h-screen px-4 md:px-8 pt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  title="Settings"
                >
                  <Settings className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  title="Log out"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* CV Upload Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">CV Management</h2>
              <div className="space-y-4">
                {currentCV && (
                  <div className="text-white/80">
                    <p>Current CV: {currentCV.filename}</p>
                    <p>Uploaded on: {currentCV.uploadedAt}</p>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleCVUpload}
                    ref={fileInputRef}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all bg-accent hover:bg-accent/90 rounded-lg cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    Upload New CV
                  </label>
                </div>
              </div>
            </div>

            {/* Settings Section */}
            {showSettings && (
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">Update Identifier</h2>
                <form onSubmit={updateIdentifier} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="newIdentifier" className="block text-sm font-medium text-white">
                      New 6-Character Identifier
                    </label>
                    <input
                      id="newIdentifier"
                      type="password"
                      maxLength={6}
                      value={newIdentifier}
                      onChange={(e) => setNewIdentifier(e.target.value)}
                      placeholder="Enter new identifier"
                      className="w-full px-4 py-3 text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 text-base font-medium text-white transition-all bg-accent hover:bg-accent/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Update Identifier
                  </button>
                </form>
              </div>
            )}

            {/* Messages Section */}
            <div className="grid gap-4">
              <h2 className="text-xl font-semibold text-white">Messages</h2>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10 transition-all ${
                    message.read ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{message.name}</h3>
                      <p className="text-white/60">{message.email}</p>
                    </div>
                    <button
                      onClick={() => toggleMessageRead(message.id, message.read)}
                      className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                      title={message.read ? "Mark as unread" : "Mark as read"}
                    >
                      {message.read ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-white/80">{message.message}</p>
                  <p className="text-sm text-white/40 mt-2">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}

              {messages.length === 0 && (
                <div className="text-center text-white/60 py-12 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <p className="text-lg">No messages yet</p>
                  <p className="text-sm mt-2">Messages from your contact form will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
} 