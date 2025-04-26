'use client';

import { ThemeProvider } from '@/context/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import CustomCursor from '@/components/CustomCursor';
import Script from 'next/script';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <ThemeProvider>
        <Navbar />
        <Toaster position="top-center" />
        {children}
        <Footer />
        <CustomCursor />
      </ThemeProvider>
    </>
  );
}
