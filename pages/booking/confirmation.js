// pages/booking/confirmation.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function BookingConfirmation() {
  const router = useRouter();
  const { id } = router.query;       // read ?id= from the URL
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/bookings/${id}`)
        .then((res) => res.json())
        .then((data) => setBooking(data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!booking) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Booking Confirmation</h1>
      <p>Booking ID: {booking.id}</p>
      <p>Guest: {booking.guest?.name}</p>
      <p>Room: {booking.roomId}</p>
      <p>Check-In: {new Date(booking.checkIn).toLocaleDateString()}</p>
      <p>Check-Out: {new Date(booking.checkOut).toLocaleDateString()}</p>
      <p>Status: {booking.status}</p>
    </Layout>
  );
}
