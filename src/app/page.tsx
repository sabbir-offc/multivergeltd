import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: 'Home | Multiverge Ltd - Empowering Digital Innovation',
  description: 'Discover Multiverge Ltd — a visionary digital company specializing in web development, cloud solutions, cybersecurity, and future-driven technologies. Let’s shape tomorrow together.',
};

export default function Home() {
  return (
    <div>
      
      <Hero />
      <AboutPreview/>
      <ServicesPreview/>
      <CTASection/>
      
    </div>
  );
}
