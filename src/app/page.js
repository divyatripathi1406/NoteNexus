import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import ClassSection from "@/components/ClassSection";
import RelevantNotesSection from "@/components/RelevantNotesSection";
import NotesSearchSection from "@/components/NotesSearchSection"
export default function Home() {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <ClassSection />
        <RelevantNotesSection />
        <NotesSearchSection />
      </main>
      <Footer />
    </div>
  );
}
