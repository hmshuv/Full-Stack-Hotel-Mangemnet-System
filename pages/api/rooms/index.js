// pages/api/rooms/index.js
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const rooms = await prisma.room.findMany();
    res.json(rooms);
  } else if (req.method === "POST") {
    const { number, type, price, description, status } = req.body;
    const room = await prisma.room.create({
      data: { number, type, price, description, status },
    });
    res.status(201).json(room);
  } else {
    res.status(405).end();
  }
}
