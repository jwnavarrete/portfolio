"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const HomePage = () => {
  useSmoothScroll();

  return (
    <main className="mt-24">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;
