// For demonstration – in a real app, store settings in your DB.
let settings = { hotelName: "Our Hotel", contactEmail: "contact@hotel.com" };

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.json(settings);
  } else if (req.method === "PUT") {
    settings = { ...settings, ...req.body };
    res.json(settings);
  } else {
    res.status(405).end();
  }
}
