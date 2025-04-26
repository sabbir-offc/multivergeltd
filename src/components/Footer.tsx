import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
  } from "lucide-react";
  import Link from "next/link";
  
  const Footer = () => {
    return (
      <footer
        className="pt-16 pb-6 px-6 md:px-20 text-sm"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold tracking-wide mb-3">Multiverge Ltd.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs">
              Empowering digital products and modern tech for future businesses.
            </p>
          </div>
  
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
  
        <div className="text-center mt-12 text-xs text-gray-500 dark:text-gray-400">
          © 2025 Multiverge Ltd. All rights reserved.
        </div>
        
      </footer>
    );
  };
  
  export default Footer;
  