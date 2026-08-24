import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0A09] text-white">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Services />
      <About />
      <Process />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  );
}