import './globals.css';
import { Poppins } from 'next/font/google';
import ClientLayout from './ClientLayout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: "Multiverge Ltd | Grow More",
  description: "Multiverge Ltd helps businesses grow with innovative affiliate marketing, tech consulting, and digital solutions. Let's grow more!",
  keywords: "Multiverge Ltd, Affiliate Marketing, Tech Consulting, Web Development, Digital Solutions, SEO",
  authors: [{ name: "Multiverge Ltd" }],
  creator: "Multiverge Ltd",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}









