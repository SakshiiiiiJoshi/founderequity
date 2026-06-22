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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 200]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] py-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] hero-radial-bg"
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
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
    <div className="max-w-7xl relative mx-auto pt-20 pb-14 md:pt-28 md:pb-16 px-4 w-full left-0 top-0 flex flex-col items-center text-center z-10">
      {/* Spotlight overlay */}
      <Spotlight className="-top-40 left-0 md:left-10 lg:left-20 md:-top-20" fill="white" />
      
      {/* Subtle gradient shape glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[130px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[120px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <h1 className="font-serif-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
        Your numbers have a story,<br />
        we make sure investors believe it.
      </h1>

      {/* Pill-shaped buttons */}
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-450 z-20">
        <a
          href="#contact"
          className="rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition-all hover:bg-neutral-100 hover:scale-105 hover:shadow-xl"
        >
          Schedule Consultation
        </a>
        <a
          href="#about"
          className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white/10 hover:scale-105 flex items-center gap-1.5"
        >
          Who Are WE <span className="text-[14px]">↗</span>
        </a>
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
      className="group/product h-96 w-[30rem] relative shrink-0"
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
