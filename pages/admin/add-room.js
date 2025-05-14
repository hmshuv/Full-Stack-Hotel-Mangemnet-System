// pages/admin/add-room.js
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function AddRoom() {
  const [form, setForm] = useState({
    number: '',
    type: '',
    price: '',
    description: '',
    status: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        number: form.number,
        type: form.type,
        price: parseFloat(form.price),
        description: form.description,
        status: form.status,
      }),
    });
    if (res.ok) {
      alert('Room added successfully!');
      setForm({ number: '', type: '', price: '', description: '', status: '' });
    } else {
      alert('Failed to add room.');
    }
  };

  return (
    <Layout>
      <h1>Add a New Room</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Room Number</label>
          <input name="number" value={form.number} onChange={handleChange} required />
        </div>
        <div>
          <label>Type</label>
          <input name="type" value={form.type} onChange={handleChange} required />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Status</label>
          <input name="status" value={form.status} onChange={handleChange} required />
        </div>
        <button type="submit">Add Room</button>
      </form>
      <style jsx>{`
        form {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          max-width: 500px;
          margin: 2rem auto;
        }
        div {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input, textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          background: #0070f3;
          color: #fff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
}
