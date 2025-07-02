import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Register() {
  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];

  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-10 max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form className="space-y-6">
          {fields.map((field, idx) => (
            <div key={idx}>
              <Label htmlFor={field.id} className="block mb-1">
                {field.label}
              </Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                className="w-full"
              />
            </div>
          ))}
          <Button type="submit" className="w-full mt-4">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account? <a href="/login" className="text-blue-400 underline">Login</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
