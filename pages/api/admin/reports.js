import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  // Dummy report data – replace with your own calculations
  const occupancyRate = 75;
  const totalRevenue = 50000;
  res.json({ occupancyRate, totalRevenue });
}
