import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Login() {
  const fields = [
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];

  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-10 max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
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
            Sign In
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account? <a href="/register" className="text-blue-400 underline">Register</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
