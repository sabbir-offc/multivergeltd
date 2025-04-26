import CustomCursor from '@/components/CustomCursor';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'Multiverge Ltd',
  description: 'A digital company shaping the future.',
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
          <CustomCursor/>
          <Navbar/>
            {children}
            <Footer/>
            </ThemeProvider>
      </body>
    </html>
  );
}
