import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const invoices = await prisma.invoice.findMany();
    res.json(invoices);
  } else {
    res.status(405).end();
  }
}
