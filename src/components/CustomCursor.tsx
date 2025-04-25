"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power3.out",
        });
        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(followerRef.current, {
        scale: 1.5,
        borderColor: "#3b82f6", // Sky Blue
        backgroundColor: "rgba(59,130,246,0.1)", // Light transparent blue
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        borderColor: "#94a3b8", // Slate color (default border)
        backgroundColor: "transparent",
        duration: 0.3,
      });
    };

    const handleClick = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          scale: 0.8,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);

    const clickableElements = document.querySelectorAll("a, button");
    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-sky-500 rounded-full z-[9999] pointer-events-none"
        style={{ mixBlendMode: "difference" }}
      />

      {/* Follower Outline */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-slate-400 rounded-full z-[9998] pointer-events-none"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
};

export default CustomCursor;
