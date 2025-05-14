// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/rooms">Rooms</Link>
      <Link href="/booking">Booking</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          background-color: #0070f3; /* Blue background */
          padding: 1rem;
        }
        nav :global(a) {
          color: black;          /* Force anchor text color to black */
          font-weight: bold;
          text-decoration: none; /* Remove underline */
        }
        nav :global(a:hover) {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
