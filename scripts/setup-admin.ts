import { PrismaClient } from '../src/generated/prisma';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  try {
    const existingAdmin = await prisma.admin.findFirst();
    
    if (existingAdmin) {
      console.log('Admin already exists');
      return;
    }

    const admin = await prisma.admin.create({
      data: {
        identifier: '696939',
        sessionToken: randomUUID(),
      },
    });

    console.log('Admin created successfully:', admin);
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 