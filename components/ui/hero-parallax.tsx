"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";



export const Spotlight = ({ className, fill }: { className?: string; fill?: string }) => {
  return (
    <svg
      className={`animate-spotlight pointer-events-none absolute z-[1] h-[220%] w-[180%] lg:w-[120%] opacity-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter-spotlight)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter-spotlight"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="240"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 120, damping: 25, mass: 1 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.65], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.65], [0.1, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.65], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.65], [-250, 150]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] pt-0 pb-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] hero-radial-bg"
    >
      {/* Vertical Grid Line Aesthetics */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10">
        <div className="w-[1px] h-full grid-line-glow left-[15%] absolute"></div>
        <div className="w-[1px] h-full grid-line-glow left-[50%] absolute"></div>
        <div className="w-[1px] h-full grid-line-glow left-[85%] absolute"></div>
      </div>

      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 mb-12">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-12 space-x-12 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col justify-center min-h-[90vh] md:min-h-screen z-10 text-left">
      {/* Spotlight overlay */}
      <Spotlight className="-top-40 left-0 md:left-10 lg:left-20 md:-top-20" fill="#00E5FF" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pt-20">

        {/* Left: Heading & Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Your numbers have a story.<br />
            We make sure investors <span className="text-[#38BDF8] italic font-extrabold inline-block mr-2">BELIEVE</span>{"\u00A0"} it.
          </h1>

          <p className="mt-6 text-slate-400 text-sm sm:text-base max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 leading-relaxed">
            We partner with ambitious founders to establish equity preservation strategies, simulate future capital rounds, and build institutional financial models.
          </p>

          {/* Left-aligned buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-450 z-20 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-black shadow-lg transition-all hover:bg-neutral-100 hover:scale-102 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] cursor-pointer text-center"
            >
              Schedule Consultation
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white/10 hover:border-[#00E5FF]/40 hover:scale-102 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              Who Are We <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom right: Scroll indicator */}
      <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest animate-pulse z-20">
        <span>Scroll to Explore</span>
        <svg className="w-3 h-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[20rem] w-[26rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
