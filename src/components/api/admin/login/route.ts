import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

function generateSessionToken() {
  return crypto.randomBytes(32).toString('hex');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { identifier } = body;

    const admin = await prisma.admin.findUnique({
      where: {
        identifier: identifier,
      },
    });

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid identifier' },
        { status: 401 }
      );
    }

    // Generate a session token and set it in a cookie
    const sessionToken = generateSessionToken();
    
    // Create response with the cookie
    const response = NextResponse.json({ 
      success: true,
      admin: {
        id: admin.id,
        identifier: admin.identifier
      }
    });

    // Set the cookie in the response
    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7200, // 2 hours
    });

    return response;
  } catch (error) {
    console.error('Error in admin login:', error);
    return NextResponse.json(
      { error: 'Failed to login' },
      { status: 500 }
    );
  }
} 