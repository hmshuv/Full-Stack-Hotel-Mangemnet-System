// pages/booking.js
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Booking() {
  const router = useRouter();
  const { roomId } = router.query;
  const [form, setForm] = useState({
    roomId: roomId || "",
    guestName: "",
    guestEmail: "",
    checkIn: "",
    checkOut: "",
  });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      const booking = await res.json();
      router.push(`/booking/confirmation?id=${booking.id}`);
    } else {
      alert("Booking failed");
    }
  };
  
  return (
    <Layout>
      <h1>Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Room ID</label>
          <input name="roomId" value={form.roomId} onChange={handleChange} readOnly={roomId ? true : false} />
        </div>
        <div>
          <label>Name</label>
          <input name="guestName" value={form.guestName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input name="guestEmail" type="email" value={form.guestEmail} onChange={handleChange} required />
        </div>
        <div>
          <label>Check-In Date</label>
          <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} required />
        </div>
        <div>
          <label>Check-Out Date</label>
          <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </Layout>
  );
}
