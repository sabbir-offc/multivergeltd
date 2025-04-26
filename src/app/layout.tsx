import CustomCursor from '@/components/CustomCursor';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

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
  {/* Basic SEO */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="title" content="Multiverge Ltd - Empowering Digital Innovation" />
  <meta name="description" content="Discover Multiverge Ltd — Your partner in futuristic digital solutions, web development, cloud services, and cybersecurity." />
  <meta name="keywords" content="Multiverge Ltd, Web Development, Cloud Services, Cybersecurity, Digital Innovation, IT Company, Future Tech" />
  <meta name="author" content="Multiverge Ltd" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://multivergeltd.com/" />
  <meta property="og:title" content="Multiverge Ltd - Empowering Digital Innovation" />
  <meta property="og:description" content="We deliver futuristic digital products and solutions for businesses ready to scale." />
  <meta property="og:image" content="https://multivergeltd.com/og-image.png" />

  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://multivergeltd.com/" />
  <meta property="twitter:title" content="Multiverge Ltd - Empowering Digital Innovation" />
  <meta property="twitter:description" content="Discover Multiverge Ltd — Your digital innovation partner." />
  <meta property="twitter:image" content="https://multivergeltd.com/og-image.png" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" sizes="any" />
</head>

      <body>
        <ThemeProvider>
          <Navbar/>
          <Toaster position="top-center" />

            {children}
            <Footer/>
          <CustomCursor/>
            </ThemeProvider>
      </body>
    </html>
  );
}
