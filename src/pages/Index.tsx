import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <DifferentiationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
