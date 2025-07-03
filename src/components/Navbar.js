'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';



const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
  
   
  

];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="bg-gray-950 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          NoteNexus
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className="hover:text-blue-300">
              {link.name}
            </Link>
          ))}

         
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className="block text-gray-200 hover:text-blue-400"
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Mobile Theme Toggle */}
            {mounted && (
              <li>
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="text-gray-400 hover:text-white"
                >
                  {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
