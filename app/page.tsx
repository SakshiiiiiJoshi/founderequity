"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Services from "@/components/ui/services";
import Contact from "@/components/ui/contact";
import Faq from "@/components/ui/faq";
import Footer from "@/components/ui/footer";
import ChatBubble from "@/components/ui/chat-bubble";

export default function Home() {
  // Dynamic scroll state to track which section is currently in viewport
  const [activeSection, setActiveSection] = useState("home");
  const isLightSection = activeSection === "about" || activeSection === "faq";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "service", "faq", "contact", "footer"];

      // Force footer active when scrolled to the absolute bottom of the page
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
      if (isAtBottom) {
        setActiveSection("footer");
        return;
      }

      const scrollPosition = window.scrollY + 100; // Trigger line offset closer to header
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-accent-light selection:text-primary">
      <Navbar activeSection={activeSection} isLightSection={isLightSection} />

      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <ChatBubble />
    </div>
  );
}
