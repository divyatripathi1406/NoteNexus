export default function RelevantNotesSection() {
  const data = [
    {
      stream: "Engineering",
      subjects: ["Mechanical", "Electrical", "Civil", "Electronics"],
    },
    {
      stream: "Computer Science",
      subjects: ["DSA", "Web Dev", "AI & ML", "DBMS"],
    },
    {
      stream: "Commerce",
      subjects: ["Accounts", "Economics", "Business Studies"],
    },
  ];

  return (
    <section className="py-14">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Find Relevant Notes</h2>
      {data.map((item, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">{item.stream}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {item.subjects.map((subject, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <h4 className="text-lg font-medium text-white mb-2">{subject}</h4>
                <button className="text-base bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
