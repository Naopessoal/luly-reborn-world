
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BabyCarousel from "@/components/BabyCarousel";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <BabyCarousel />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
