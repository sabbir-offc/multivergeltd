import AboutContent from '@/components/AboutContent';

export const metadata = {
  title: "About Multiverge Ltd | Innovators in Digital Growth",
  description: "Discover Multiverge Ltd's journey — pioneering affiliate marketing, digital solutions, and tech-driven innovations to empower businesses globally.",
  keywords: "About Multiverge Ltd, Company Profile, Digital Growth, Innovation, Affiliate Marketing Experts",
  openGraph: {
    title: "About Multiverge Ltd | Innovators in Digital Growth",
    description: "Learn more about Multiverge Ltd, our mission, vision, and dedication to digital transformation and growth.",
    url: "https://www.multivergeltd.com/about",
    siteName: "Multiverge Ltd",
    images: [
      {
        url: "https://www.multivergeltd.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Multiverge Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function AboutPage() {
  return <AboutContent />;
}
