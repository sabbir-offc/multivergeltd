"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [subtitleRef.current, titleRef.current, buttonRef.current, imageRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
<section
  className="w-full px-6 md:px-20 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
  style={{
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  }}
>      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <p ref={subtitleRef} className="uppercase text-sm tracking-widest mb-3 text-gray-500">
          Latest Products
        </p>
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#7f00ff] to-[#3b82f6] bg-clip-text text-transparent"
        >
          The New Era of App Design & Tech
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sollicitudin elit, quis mattis sem.
        </p>
        <div className="mt-8">
          <button
            ref={buttonRef}
            className="px-6 py-3 border border-purple-400 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all"
          >
            View More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div ref={imageRef} className="w-full md:w-[45%]">
        <img
          src="https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-10-rev-img.png" // Replace this with your actual image
          alt="Mockup"
          className="w-full object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
