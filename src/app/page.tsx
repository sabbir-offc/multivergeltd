import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutPreview/>
      <ServicesPreview/>
      <CTASection/>
      <Footer />
    </div>
  );
}
