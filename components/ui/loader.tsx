"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Split title ("FE") and subtitle ("FOUNDER'S EQUITY") for staggered entrance
  const titleWords = "FE".split(" ");
  const subtitleWords = "FOUNDER'S EQUITY".split(" ");

  // Lock scrolling during page load
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isVisible]);

  // Track window load event
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        setIsWindowLoaded(true);
      } else {
        const handleLoad = () => setIsWindowLoaded(true);
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }
  }, []);

  // Progress counter simulation (cinematic duration ~4.5 seconds total visibility)
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Easing curve: slower progress rate
      if (currentProgress < 85) {
        currentProgress += Math.random() > 0.6 ? 2 : 1;
      } else if (currentProgress < 99) {
        currentProgress += isWindowLoaded ? 1 : Math.random() > 0.85 ? 1 : 0;
      } else if (isWindowLoaded) {
        currentProgress = 100;
      }

      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        // Wait briefly at 100% for impact, then trigger exit
        const timeout = setTimeout(() => {
          setIsAnimationComplete(true);
        }, 900);
        return () => clearTimeout(timeout);
      }
    }, 35); // slower tick rate (35ms) for increased visible presence

    return () => clearInterval(interval);
  }, [isWindowLoaded]);

  // Handle final unmount after vault slide-up exit completes
  useEffect(() => {
    if (isAnimationComplete) {
      document.documentElement.classList.add("loaded");
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 1200); // matches the slide-up animation duration
      return () => clearTimeout(timeout);
    }
  }, [isAnimationComplete]);

  // Motion variants for text entrances
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
      scale: 0.92,
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const subtitleContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.9,
      },
    },
  };

  const subtitleVariants = {
    initial: {
      opacity: 0,
      y: 15,
      filter: "blur(5px)",
    },
    animate: {
      opacity: 0.5,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          animate={{ y: isAnimationComplete ? "-100%" : 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.85, 0, 0.15, 1] as const // Vault slide-up ease
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050B14] select-none pointer-events-auto"
        >
          {/* Champagne Gold Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(56,189,248,0.06)_0%,transparent_70%)] blur-[60px] pointer-events-none" />
          </div>

          {/* Central Animation Grid Container */}
          <motion.div 
            animate={
              isAnimationComplete 
                ? { opacity: 0, y: -30, scale: 0.96 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            {/* Elegant Circular SVG Loader & Central Logo */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-10">
              {/* Outer Subtle Glass Frame */}
              <div className="absolute inset-0 rounded-full border border-white/[0.02] bg-white/[0.01] backdrop-blur-[2px]" />

              {/* Glowing Halo around the logo */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.97, 1.03, 0.97],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10)_0%,transparent_70%)] filter blur-md"
              />

              {/* Central Logo Image */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative"
              >
                <Image
                  src="/logo-icon-v2.png"
                  alt="Founder's Equity Icon"
                  width={52}
                  height={52}
                  className="w-[3.25rem] h-[3.25rem] object-contain"
                  priority
                />
              </motion.div>

              {/* Circular SVG Progress Ring (Champagne Gold) */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Loader Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  className="stroke-white/[0.03]"
                  strokeWidth="1.2"
                  fill="transparent"
                />
                {/* Loader Active Arc */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  className="stroke-[#38BDF8]"
                  strokeWidth="1.2"
                  fill="transparent"
                  strokeDasharray="289" // 2 * Math.PI * 46
                  animate={{
                    strokeDashoffset: 289 - (289 * progress) / 100,
                  }}
                  transition={{
                    type: "tween",
                    ease: "easeOut",
                  }}
                />
              </svg>
            </div>

            {/* Typography Section */}
            <div className="text-center [perspective:1000px]">
              {/* Short Form Name (FE) Staggered */}
              <motion.h1
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="font-serif-heading font-normal text-white text-3xl sm:text-4xl tracking-[0.15em] pl-[0.15em] uppercase flex justify-center flex-wrap select-none"
              >
                {titleWords.map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.45em] last:mr-0">
                    {Array.from(word).map((char, charIdx) => (
                      <motion.span
                        key={charIdx}
                        variants={itemVariants}
                        className="inline-block origin-bottom"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              {/* Full Brand Subtitle Staggered */}
              <motion.div
                variants={subtitleContainerVariants}
                initial="initial"
                animate="animate"
                className="font-sans text-xs sm:text-[13px] uppercase tracking-[0.35em] text-white mt-5 font-bold flex justify-center flex-wrap select-none"
              >
                {subtitleWords.map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.4em] last:mr-0">
                    {Array.from(word).map((char, charIdx) => (
                      <motion.span
                        key={charIdx}
                        variants={subtitleVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Digital Percentage Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              className="mt-8 flex justify-center items-baseline gap-0.5"
            >
              <span className="font-mono text-xs font-light text-[#38BDF8] tracking-wider">
                {progress.toString().padStart(3, "0")}
              </span>
              <span className="text-[9px] text-[#38BDF8]/40 font-light font-mono">%</span>
            </motion.div>
          </motion.div>

          {/* Phase 4: Idle Motion (Subtle champagne gold breathing bar) */}
          {!isAnimationComplete && (
            <motion.div
              animate={{
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent z-10"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
