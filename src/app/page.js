import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      title: "Upload Notes",
      description: "Easily upload class notes and access them anywhere.",
    },
    {
      title: "Search & Discover",
      description: "Search notes by subject, topic, or uploader.",
    },
    {
      title: "Save Favorites",
      description: "Bookmark important notes for quick access later.",
    },
    {
      title: "Collaborate",
      description: "Share your notes and learn together with peers.",
    },
  ];

  const testimonials = [
    {
      name: "Anjali M.",
      message:
        "NoteNexus made sharing semester notes super easy. Clean design and quick access!",
    },
    {
      name: "Rohan D.",
      message:
        "As a topper, I always shared my notes. This is the perfect platform for it!",
    },
    {
      name: "Priya K.",
      message:
        "Finding relevant notes has never been this smooth. Loved the dark theme too!",
    },
  ];

  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to NoteNexus</h1>
        <p className="text-lg text-gray-300 mb-6">
          Your trusted hub for uploading, sharing, and accessing notes — anytime, anywhere.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/login"><Button>Login</Button></a>
          <a href="/register"><Button variant="outline">Register</Button></a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="container mx-auto px-4 py-14 bg-gray-950 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">What Students Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-300 italic mb-4">"{t.message}"</p>
              <p className="text-blue-400 font-semibold text-right">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-14">
  <h2 className="text-2xl font-semibold mb-6 text-center">Create or Join a Class</h2>

  <div className="grid gap-6 md:grid-cols-2">
    <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">👨‍🏫 Create a Class</h3>
      <p className="text-gray-300">
        Are you a teacher or group leader? Create a class to manage and share notes with your students directly.
      </p>
      <a href="/create-class">
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Create Class
        </button>
      </a>
    </div>

    <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">👥 Join a Class</h3>
      <p className="text-gray-300">
        Enter your class code to join and access all shared notes instantly.
      </p>
      <a href="/join-class">
        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Join Class
        </button>
      </a>
    </div>
  </div>
</section>
<section className="container mx-auto px-4 py-14">
  <h2 className="text-2xl font-semibold mb-6 text-center">Find Relevant Notes</h2>

  {[
    {
      stream: "Engineering",
      subjects: ["Mechanical", "Electrical", "Civil", "Electronics"],
    },
    {
      stream: "Computer Science",
      subjects: ["DSA", "Web Development", "AI & ML", "DBMS"],
    },
    {
      stream: "Commerce",
      subjects: ["Accounts", "Business Studies", "Economics"],
    },
    {
      stream: "Arts",
      subjects: ["History", "Political Science", "Psychology"],
    },
    {
      stream: "Medical",
      subjects: ["Anatomy", "Physiology", "Pharmacology"],
    },
  ].map((streamItem, idx) => (
    <div key={idx} className="mb-10">
      <h3 className="text-xl font-bold mb-4 text-blue-400">{streamItem.stream}</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {streamItem.subjects.map((subject, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg text-center shadow hover:shadow-lg transition"
          >
            <h4 className="text-lg font-semibold mb-2">{subject}</h4>
            <p className="text-gray-300 mb-4">Access curated notes for {subject}.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>





      <Footer />
    </div>
  );
}
