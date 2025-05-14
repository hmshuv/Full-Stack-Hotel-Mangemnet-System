import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const guests = await prisma.guest.findMany();
    res.json(guests);
  } else {
    res.status(405).end();
  }
}
