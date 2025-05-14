// pages/api/bookings/index.js
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { roomId, guestName, guestEmail, checkIn, checkOut } = req.body;

      // Find an existing guest by email, or create one if not found.
      let guest = await prisma.guest.findUnique({
        where: { email: guestEmail },
      });
      if (!guest) {
        guest = await prisma.guest.create({
          data: { name: guestName, email: guestEmail },
        });
      }

      // Create the booking
      const booking = await prisma.booking.create({
        data: {
          roomId: parseInt(roomId, 10),
          guestId: guest.id,
          checkIn: new Date(checkIn),
          checkOut: new Date(checkOut),
          status: "Confirmed",
        },
      });

      // Return the newly created booking (including its generated id)
      return res.status(201).json(booking);
    } catch (error) {
      console.error("Error creating booking:", error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
