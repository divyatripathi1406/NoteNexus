'use client';
import { useState } from 'react';

export default function NotesSearchSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const notes = [
    { title: "Thermodynamics - Unit 1", subject: "Mechanical" },
    { title: "DSA Introduction", subject: "Computer Science" },
    { title: "Macroeconomics", subject: "Commerce" },
  ];

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-14">
      <h2 className="text-2xl font-semibold mb-6 text-center">Search Notes</h2>
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by title or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.length > 0 ? (
          filtered.map((n, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded shadow">
              <h4 className="font-semibold">{n.title}</h4>
              <p className="text-gray-400 text-sm">{n.subject}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-2">No notes found.</p>
        )}
      </div>
    </section>
  );
}
