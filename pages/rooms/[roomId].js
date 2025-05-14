// pages/rooms/[roomId].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function RoomDetails() {
  const router = useRouter();
  const { roomId } = router.query;
  const [room, setRoom] = useState(null);
  
  useEffect(() => {
    if (roomId) {
      fetch(`/api/rooms/${roomId}`)
        .then(res => res.json())
        .then(data => setRoom(data));
    }
  }, [roomId]);
  
  if (!room) return <Layout><p>Loading...</p></Layout>;
  
  return (
    <Layout>
      <h1>{room.type} - Room {room.number}</h1>
      <p>{room.description}</p>
      <p>Price: ${room.price}</p>
      <button onClick={() => router.push(`/booking?roomId=${room.id}`)}>
        Book Now
      </button>
    </Layout>
  );
}
