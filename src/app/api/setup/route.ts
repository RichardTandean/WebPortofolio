import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

export async function POST() {
  try {
    const existingAdmin = await prisma.admin.findFirst();
    
    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      );
    }

    const admin = await prisma.admin.create({
      data: {
        identifier: '123456',
        sessionToken: randomUUID(),
      },
    });

    return NextResponse.json({ success: true, message: 'Admin setup complete' });
  } catch (error) {
    console.error('Error in admin setup:', error);
    return NextResponse.json(
      { error: 'Failed to setup admin' },
      { status: 500 }
    );
  }
} 