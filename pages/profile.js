// pages/profile.js
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    // For demo purposes, fetch by guest email (this should be replaced with auth-based logic)
    fetch("/api/profile?email=guest@example.com")
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);
  
  if (!profile) return <Layout><p>Loading...</p></Layout>;
  
  return (
    <Layout>
      <h1>Your Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <h2>Your Bookings</h2>
      <ul>
        {profile.bookings.map(booking => (
          <li key={booking.id}>
            Booking ID: {booking.id} - Room: {booking.roomId} - Status: {booking.status}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
