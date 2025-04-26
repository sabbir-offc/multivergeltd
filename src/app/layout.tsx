'use client';

import CustomCursor from '@/components/CustomCursor';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QK3XN9X9GH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QK3XN9X9GH', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          <Toaster position="top-center" />
          {children}
          <Footer />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
