// pages/admin/bookings.js
import { useSession, signIn } from "next-auth/react";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

export default function AdminBookings() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    if (session) {
      fetch("/api/bookings")
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  }, [session]);
  
  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <div>Please <button onClick={() => signIn()}>Sign In</button> to access the admin panel.</div>;
  
  return (
    <Layout>
      <h1>Manage Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Guest</th>
            <th>Room</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.guest.name}</td>
              <td>{booking.roomId}</td>
              <td>{new Date(booking.checkIn).toLocaleDateString()}</td>
              <td>{new Date(booking.checkOut).toLocaleDateString()}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
