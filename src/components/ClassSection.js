import Link from "next/link";

export default function ClassSection() {
  return (
    <section className="py-14">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create or Join a Class</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">👨‍🏫 Create a Class</h3>
          <p className="text-gray-300">Start a new class and invite others to share notes.</p>
          <Link href="/create-class">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Create Class
            </button>
          </Link>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">👥 Join a Class</h3>
          <p className="text-gray-300">Enter a class code to access shared notes.</p>
          <Link href="/join-class">
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Join Class
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
