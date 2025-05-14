import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const staff = await prisma.staff.findMany();
    res.json(staff);
  } else if (req.method === "POST") {
    const { name, email, role, password } = req.body;
    // Note: Hash the password in production using bcryptjs
    const newStaff = await prisma.staff.create({
      data: { name, email, role, password },
    });
    res.status(201).json(newStaff);
  } else {
    res.status(405).end();
  }
}
