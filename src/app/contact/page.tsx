import ContactContent from '@/components/ContactContent';

export const metadata = {
  title: "Contact Multiverge Ltd | Start Growing Your Business",
  description: "Get in touch with Multiverge Ltd. Let's discuss how we can accelerate your business with expert affiliate marketing, digital innovation, and consulting.",
  keywords: "Contact Multiverge Ltd, Business Inquiry, Affiliate Marketing Support, Digital Growth Consultation",
  openGraph: {
    title: "Contact Multiverge Ltd | Let's Build the Future",
    description: "Connect with Multiverge Ltd for world-class affiliate marketing, tech consulting, and digital solutions. Your success journey starts here.",
    url: "https://www.multivergeltd.com/contact",
    siteName: "Multiverge Ltd",
    images: [
      {
        url: "https://www.multivergeltd.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Multiverge Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function ContactPage() {
  return <ContactContent />;
}
