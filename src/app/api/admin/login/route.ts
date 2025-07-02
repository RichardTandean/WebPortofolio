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

    const admin = await prisma.admin.findFirst({
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

    const sessionToken = generateSessionToken();
    (await cookies()).set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7200,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in admin login:', error);
    return NextResponse.json(
      { error: 'Failed to login' },
      { status: 500 }
    );
  }
} 