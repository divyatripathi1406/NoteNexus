'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UploadNote() {
  const [formData, setFormData] = useState({
    title: '',
    stream: '',
    subject: '',
    description: '',
    file: null,
  });

  const streams = ['Engineering', 'Computer Science', 'Commerce', 'Arts', 'Medical'];
  const subjects = {
    Engineering: ['Mechanical', 'Electrical', 'Civil', 'Electronics'],
    'Computer Science': ['DSA', 'Web Dev', 'AI', 'DBMS'],
    Commerce: ['Accounts', 'Economics', 'Business Studies'],
    Arts: ['History', 'Psychology', 'Political Science'],
    Medical: ['Anatomy', 'Physiology', 'Pharmacology'],
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Later: send to backend
    alert('Note submitted successfully!');
  };

  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-10 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Upload Your Notes</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>

          {/* Stream */}
          <div>
            <label className="block mb-1">Stream</label>
            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            >
              <option value="">Select Stream</option>
              {streams.map((stream, idx) => (
                <option key={idx} value={stream}>
                  {stream}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          {formData.stream && (
            <div>
              <label className="block mb-1">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                required
              >
                <option value="">Select Subject</option>
                {subjects[formData.stream].map((subj, idx) => (
                  <option key={idx} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              rows="4"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block mb-1">Upload File (PDF/Image)</label>
            <input
              type="file"
              name="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Upload Note
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
