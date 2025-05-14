// pages/api/rooms/[id].js
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const roomId = parseInt(req.query.id);
  
  if (req.method === "GET") {
    const room = await prisma.room.findUnique({
      where: { id: roomId },
    });
    if (room) res.json(room);
    else res.status(404).json({ error: "Room not found" });
  } else if (req.method === "PUT") {
    const { number, type, price, description, status } = req.body;
    const room = await prisma.room.update({
      where: { id: roomId },
      data: { number, type, price, description, status },
    });
    res.json(room);
  } else if (req.method === "DELETE") {
    await prisma.room.delete({ where: { id: roomId } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
