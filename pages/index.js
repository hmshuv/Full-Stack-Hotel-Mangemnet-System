// pages/index.js
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* --- Hero Section (First BG Image) --- */}
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Our Hotel</h1>
          <p>Experience luxury and comfort in every stay.</p>
          <div className="quotes">
            <blockquote>
              “A room should never allow the eye to settle in one place. It should smile at you and create fantasy.”
            </blockquote>
            <blockquote>
              “Where hospitality meets the heart.”
            </blockquote>
          </div>
        </div>
      </div>

      {/* --- History Section (Second BG Image) --- */}
      <section className="history">
        <div className="overlay"></div>
        <div className="history-content">
          <h2>Our History</h2>
          <p>
            Founded in 1925, our hotel has been a beacon of elegance and luxury for travelers worldwide.
            From hosting grand events to serving as a tranquil getaway, our legacy is built on impeccable
            service, timeless architecture, and warm hospitality.
          </p>
        </div>
      </section>

      {/* --- Cards Section --- */}
      <section className="cards">
        <div className="card">
          <img src="/card1.jpg" alt="Classic Rooms" />
          <h3>Classic Rooms</h3>
          <p>Cozy, comfortable, and perfect for a short stay.</p>
        </div>
        <div className="card">
          <img src="/card2.jpg" alt="Deluxe Suites" />
          <h3>Deluxe Suites</h3>
          <p>Experience the epitome of luxury in our deluxe suites.</p>
        </div>
        <div className="card">
          <img src="/card3.jpg" alt="Exclusive Amenities" />
          <h3>Exclusive Amenities</h3>
          <p>Enjoy our spa, gourmet dining, and rooftop lounge.</p>
        </div>
      </section>

      <style jsx>{`
        /* --- Hero Section Styles --- */
        .hero {
          position: relative;
          background: url('/hero-bg.jpg') center center / cover no-repeat;
          padding: 6rem 1rem;
          margin-bottom: 2rem;
          text-align: center;
          color: #fff;
        }
        .overlay {
          position: absolute;
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        .quotes {
          font-style: italic;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .quotes blockquote {
          background: rgba(255, 255, 255, 0.2);
          padding: 1rem;
          border-radius: 8px;
        }

        /* --- History Section Styles --- */
        .history {
          position: relative;
          background: url('/history-bg.jpg') center center / cover no-repeat;
          padding: 4rem 1rem;
          margin: 2rem 0;
          color: #fff;
          text-align: center;
        }
        .history-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        .history-content h2 {
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        .history-content p {
          font-size: 1.2rem;
          line-height: 1.6;
        }

        /* --- Cards Section Styles --- */
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }
        .card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          text-align: center;
          width: 300px;
        }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card h3 {
          color: #0070f3;
          margin: 1rem 0 0.5rem;
        }
        .card p {
          padding: 0 1rem 1rem;
        }
      `}</style>
    </Layout>
  );
}
