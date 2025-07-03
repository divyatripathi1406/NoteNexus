export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Anjali M.",
      message: "NoteNexus made sharing semester notes super easy. Clean design and quick access!",
    },
    {
      name: "Rohan D.",
      message: "As a topper, I always shared my notes. This is the perfect platform for it!",
    },
    {
      name: "Priya K.",
      message: "Finding relevant notes has never been this smooth. Loved the dark theme too!",
    },
  ];

  return (
    <section className="py-10 bg-gray-950 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">What Students Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-gray-300 italic mb-4">"{t.message}"</p>
            <p className="text-blue-400 text-right font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
