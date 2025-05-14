// pages/contact.js
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <p>Email: contact@hotel.com</p>
      <p>Phone: +1-234-567-890</p>
      <form>
        <div>
          <label>Your Message:</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}
