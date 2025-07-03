import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to NoteNexus</h1>
      <p className="text-gray-300 text-lg mb-6">
        Your hub for sharing and accessing notes — anytime, anywhere.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/login"><Button>Login</Button></Link>
        <Link href="/register"><Button variant="outline">Register</Button></Link>
      </div>
    </section>
  );
}
