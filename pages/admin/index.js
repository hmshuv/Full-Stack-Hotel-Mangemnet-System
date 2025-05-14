// pages/admin/index.js
import { useSession, signIn } from "next-auth/react";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    if (session) {
      fetch("/api/admin/stats")
        .then(res => res.json())
        .then(data => setStats(data));
    }
  }, [session]);
  
  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <div>Please <button onClick={() => signIn()}>Sign In</button> to access the admin panel.</div>;
  
  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      {stats ? (
        <div>
          <p>Total Bookings: {stats.totalBookings}</p>
          <p>Total Rooms: {stats.totalRooms}</p>
          <p>Occupied Rooms: {stats.occupiedRooms}</p>
        </div>
      ) : <p>Loading stats...</p>}
    </Layout>
  );
}
