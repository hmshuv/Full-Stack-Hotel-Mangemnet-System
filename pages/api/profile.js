import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  // This demo uses a query param for email. In production, use session data.
  const { email } = req.query;
  const guest = await prisma.guest.findUnique({
    where: { email },
    include: { bookings: true },
  });
  if (guest) res.json(guest);
  else res.status(404).json({ error: "Guest not found" });
}
