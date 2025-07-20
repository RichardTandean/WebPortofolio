import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function PUT(request: Request) {
  try {
    const sessionCookie = (await cookies()).get('admin_session');
    if (!sessionCookie) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { identifier } = body;

    if (!identifier || identifier.length !== 6) {
      return NextResponse.json(
        { error: 'Invalid identifier' },
        { status: 400 }
      );
    }

    const admin = await prisma.admin.findFirst();
    if (!admin) {
      await prisma.admin.create({
        data: {
          identifier,
        },
      });
    } else {
      await prisma.admin.update({
        where: { id: admin.id },
        data: { identifier },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating identifier:', error);
    return NextResponse.json(
      { error: 'Failed to update identifier' },
      { status: 500 }
    );
  }
} 