// pages/rooms/index.js
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import RoomCard from '../../components/RoomCard';

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch('/api/rooms');
        if (res.ok) {
          const data = await res.json();
          setRooms(data);
        } else {
          console.error('Failed to fetch rooms');
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    }
    fetchRooms();
  }, []);

  return (
    <Layout>
      <h1>Available Rooms</h1>
      <div className="rooms-list">
        {rooms.length > 0 ? (
          rooms.map((room) => <RoomCard key={room.id} room={room} />)
        ) : (
          <p>No rooms available at the moment.</p>
        )}
      </div>
      <style jsx>{`
        .rooms-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
}
