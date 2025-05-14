// pages/api/bookings/[id].js
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const bookingId = parseInt(req.query.id, 10);
  if (req.method === "GET") {
    try {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: { guest: true },  // Include guest details if needed
      });
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      console.error("Error fetching booking:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}
