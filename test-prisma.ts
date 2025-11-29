// test-prisma.ts (place in project root)

// Your client.ts is located at: packages/database/src/client.ts
import { prisma } from './packages/database/src/client';

async function main() {
  // Additional examples (you can delete them if you want)
  const users = await prisma.users.findMany();
  console.log('Users from DB:', users);

  // Additional examples (you can delete them if you want):
  const courses = await prisma.course.findMany();
  console.log('Courses from DB:', courses);
}

main()
  .catch((err) => {
    console.error('Error running Prisma test:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
