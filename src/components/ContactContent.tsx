'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 1.2, ease: 'power4.out' }
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
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await res.json();

      if (result.ok || res.status === 200) {
        toast.success('Message sent successfully!');
        formRef.current?.reset();
      } else {
        toast.error('Failed to send message!');
      }
    } catch {
        toast.error('An unexpected error occurred.');
      } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen px-6 md:px-20 py-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* Blurred animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl top-10 left-[-100px] animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-400/20 dark:bg-pink-600/20 rounded-full blur-3xl bottom-20 right-[-80px] animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          {Array.from('Let’s Connect').map((letter, index) => (
            <span key={index} className="inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
      </div>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl flex flex-col gap-6"
        >
          {/* Input Fields */}
          {['Full Name', 'Email Address', 'Subject'].map((label, i) => (
            <div className="flex flex-col" key={i}>
              <label className="text-sm font-semibold mb-2">{label}</label>
              <input
                name={label.toLowerCase().replace(/ /g, '')}
                type={label.includes('Email') ? 'email' : 'text'}
                required
                className="p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            disabled={loading}
            className={`mt-6 px-8 py-4 text-white font-bold rounded-full transition-all ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center gap-8 text-lg text-gray-700 dark:text-gray-300"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Email</h2>
            <p>info@multivergeltd.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Phone</h2>
            <p>+880 1234-567890</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Address</h2>
            <p>Dhaka, Bangladesh</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
