import ServicesContent from '@/components/ServicesContent';

export const metadata = {
  title: "Services | Affiliate Marketing, Tech Consulting | Multiverge Ltd",
  description: "Explore our services: Affiliate Marketing Growth, SEO Optimization, Web Development, Tech Consulting. Empower your digital success with Multiverge Ltd.",
  keywords: "Multiverge Ltd Services, Affiliate Marketing Growth, SEO, Tech Consulting, Digital Solutions, Web Development",
  openGraph: {
    title: "Services | Multiverge Ltd",
    description: "Discover Multiverge Ltd's powerful service offerings: Affiliate Marketing, SEO Optimization, Web Development, and Technology Consulting.",
    url: "https://www.multivergeltd.com/services",
    siteName: "Multiverge Ltd",
    images: [
      {
        url: "https://www.multivergeltd.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Multiverge Ltd Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function ServicesPage() {
  return <ServicesContent />;
}
