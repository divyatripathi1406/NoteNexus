export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  const resources = [
    { name: "Create Class", href: "/create-class" },
    { name: "Join Class", href: "/join-class" },
    { name: "Explore Notes", href: "#" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 px-4 py-8">
      {/* Flex Layout with gap and wrap */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between flex-wrap gap-8">
        {/* Branding */}
        <div className="md:w-1/3">
          <h2 className="text-white text-lg font-semibold mb-2">NoteNexus</h2>
          <p className="text-sm">
            Empowering students to learn, share, and succeed. 
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/4">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="md:w-1/4">
          <h3 className="text-white font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            {resources.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        © {new Date().getFullYear()} NoteNexus. All rights reserved.
      </div>
    </footer>
  );
}
