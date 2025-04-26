import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Multiverge Ltd | Affiliate Marketing Experts | Grow More",
  description: "Boost your business growth with Multiverge Ltd. Specialized in affiliate marketing, tech consulting, and innovative digital solutions.",
  keywords: "Affiliate Marketing, Digital Solutions, Tech Consulting, Business Growth, Multiverge Ltd",
  openGraph: {
    title: "Multiverge Ltd | Grow More",
    description: "Empowering your digital growth journey with affiliate marketing, IT consulting, and web innovation.",
    url: "https://www.multivergeltd.com",
    siteName: "Multiverge Ltd",
    images: [
      {
        url: "https://www.multivergeltd.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Multiverge Ltd - Grow More",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
