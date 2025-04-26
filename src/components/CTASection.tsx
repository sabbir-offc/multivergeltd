'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/src/vanta.globe'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeProvider'
import { ChevronUp } from 'lucide-react'
type VantaEffectInstance = {
    destroy: () => void;
  };
  
export default function CTASection() {
  const ctaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState<VantaEffectInstance | null>(null);
  const { theme } = useTheme()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (vantaEffect) vantaEffect.destroy()

    if (ctaRef.current) {
      setVantaEffect(
        GLOBE({
          el: ctaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: theme === 'dark' ? 0x3b82f6 : 0x64748b,
          backgroundColor: theme === 'dark' ? 0x0f172a : 0xf9fafb,
        })
      )
    }
    const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        if (vantaEffect) vantaEffect.destroy()
        window.removeEventListener('scroll', handleScroll)
      }

  }, [theme])

  return (
    <section
      ref={ctaRef}
      className="relative w-full h-[550px] flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-white/80 dark:bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-2xl text-center max-w-3xl z-10 text-gray-800 dark:text-white"
      >
        <p className="text-blue-600 dark:text-blue-300 font-semibold mb-2">Start Your Journey</p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative inline-block text-3xl md:text-4xl font-bold mb-4 leading-snug"
        >
          Elevate Your Digital <br /> Presence Today
          <motion.span
            layoutId="underline"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We help you unlock success with cutting-edge IT solutions tailored for growth, speed, and impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-100 transition shadow"
          >
            Thank You for Visiting Us!
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:brightness-110 transition shadow-lg"
          >
            Join Our Team
          </motion.button>
        </div>

        <p className="text-xs mt-6 text-gray-500 dark:text-gray-400 italic tracking-wide">
          Crafted with futuristic precision ✦ Multiverge Ltd.
        </p>
      </motion.div>

      <p className="text-xs mt-8 text-gray-500 dark:text-gray-400 italic tracking-wide z-10">
  ✦ Thank you for reaching the end of innovation ✦
</p>
  {/* Smart Back to Top Button */}
  {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 dark:bg-gray-300 text-white dark:text-black shadow-lg hover:brightness-110 transition-all"
          aria-label="Back to Top"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </section>
  )
}
