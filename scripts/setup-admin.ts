import { PrismaClient } from '../src/generated/prisma';

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
        identifier: '123456',
      },
    });

  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 