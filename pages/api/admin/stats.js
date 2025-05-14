import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const totalBookings = await prisma.booking.count();
  const totalRooms = await prisma.room.count();
  const occupiedRooms = await prisma.booking.count({
    where: { status: "Confirmed" },
  });
  
  res.json({ totalBookings, totalRooms, occupiedRooms });
}
