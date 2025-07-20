import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { writeFile, unlink } from 'fs/promises';
import { prisma } from '@/lib/prisma';
import path from 'path';

// Helper function to validate admin session
async function validateAdminSession() {
  const sessionCookie = (await cookies()).get('admin_session');
  if (!sessionCookie) {
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  try {
    // Validate admin session
    const isValid = await validateAdminSession();
    if (!isValid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Create filename with timestamp to avoid conflicts
    const timestamp = Date.now();
    const filename = `CV_${timestamp}.pdf`;
    const filepath = path.join(process.cwd(), 'public', 'file', filename);
    
    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save file to disk
    await writeFile(filepath, buffer);

    // Deactivate all existing CVs
    await prisma.cv.updateMany({
      where: { active: true },
      data: { active: false }
    });

    // Create new CV record
    const cv = await prisma.cv.create({
      data: {
        filename,
        path: `/file/${filename}`,
        active: true
      }
    });

    // Delete old CV file if it exists
    try {
      const oldFilePath = path.join(process.cwd(), 'public', 'file', 'CV_Richard Tandean.pdf');
      await unlink(oldFilePath);
    } catch (error) {
      // Ignore error if file doesn't exist
    }

    return NextResponse.json({ success: true, cv });
  } catch (error) {
    console.error('Error uploading CV:', error);
    return NextResponse.json(
      { error: 'Failed to upload CV' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const isValid = await validateAdminSession();
    if (!isValid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const activeCV = await prisma.cv.findFirst({
      where: { active: true },
      orderBy: { uploadedAt: 'desc' }
    });

    return NextResponse.json({ cv: activeCV });
  } catch (error) {
    console.error('Error fetching CV:', error);
    return NextResponse.json(
      { error: 'Failed to fetch CV' },
      { status: 500 }
    );
  }
} 