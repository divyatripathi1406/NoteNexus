export default function FeaturesSection() {
  const features = [
    "Upload and manage notes",
    "Search by subject or topic",
    "Collaborate with classmates",
    "Access notes from anywhere",
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{f}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
