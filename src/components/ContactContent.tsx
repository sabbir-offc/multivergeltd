'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import toast from 'react-hot-toast';

export default function ContactContent() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 1.2, ease: 'power4.out' }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current!);

    try {
      const res = await fetch('https://formspree.io/f/xkgrgjyk', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await res.json();
      if (result.ok || res.status === 200) {
        toast.success('Message sent successfully!');
        formRef.current?.reset();
      } else {
        toast.error('Failed to send message.');
      }
    } catch {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full px-6 md:px-20 py-24 overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-80px] left-[-100px] w-[400px] h-[400px] bg-blue-400/30 dark:bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] bg-pink-400/30 dark:bg-pink-600/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {Array.from('Get in Touch').map((letter, i) => (
            <span key={i} className="inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          We&apos;d love to hear from you. Let’s build something extraordinary together!
        </p>
      </div>

      {/* 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-7xl mx-auto">

        {/* Left Side - Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 justify-center"
        >
          {/* Info Cards */}
          <div className="flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-white/10">
            <Mail size={32} className="text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-500 dark:text-gray-400">info@multivergeltd.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-white/10">
            <Phone size={32} className="text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-500 dark:text-gray-400">+880 1234-567890</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-white/10">
            <MapPin size={32} className="text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-500 dark:text-gray-400">Dhaka, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 rounded-3xl backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/10 shadow-xl space-y-6"
        >
          {/* Fields */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="fullname"
              required
              className="p-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="p-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="p-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="p-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className={`mt-4 w-full py-4 text-white font-bold rounded-full transition-all ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>

    </section>
  );
}
