// components/RoomCard.js
import Link from 'next/link';

export default function RoomCard({ room }) {
  return (
    <div className="room-card">
      <h2>{room.type} - Room {room.number}</h2>
      <p>{room.description}</p>
      <p><strong>Price:</strong> ${room.price}</p>
      <Link href={`/rooms/${room.id}`}>View Details</Link>
      <style jsx>{`
        .room-card {
          background: #fff;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          transition: transform 0.2s ease;
        }
        .room-card:hover {
          transform: scale(1.02);
        }
        h2 {
          margin-bottom: 0.5rem;
          color: #0070f3;
        }
        p {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
