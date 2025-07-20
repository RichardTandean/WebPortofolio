import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const admin = await prisma.admin.upsert({
    where: { identifier: '123456' },
    update: {},
    create: {
      identifier: '123456', // You can change this to any 6-digit number you prefer
    },
  })
  console.log({ admin })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 