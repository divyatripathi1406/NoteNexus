import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const points = [
    "Built for students",
    "Modern UI with React & Tailwind",
    "Built-in security and ease of use",
  ];

  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">About NoteNexus</h1>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
