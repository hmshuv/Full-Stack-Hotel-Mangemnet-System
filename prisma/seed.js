// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Insert multiple rooms at once using createMany
  await prisma.room.createMany({
    data: [
      {
        number: '101',
        type: 'Deluxe',
        price: 150.00,
        description: 'A spacious deluxe room with modern amenities.',
        status: 'Available',
      },
      {
        number: '102',
        type: 'Standard',
        price: 100.00,
        description: 'A comfortable standard room perfect for short stays.',
        status: 'Available',
      },
      {
        number: '103',
        type: 'Suite',
        price: 250.00,
        description: 'An exquisite suite offering luxury and comfort.',
        status: 'Available',
      },
      // Add more room records as needed
    ],
    skipDuplicates: true, // Optional: skip duplicates if they already exist
  });
  console.log('Rooms seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
