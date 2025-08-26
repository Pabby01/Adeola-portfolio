"use client";

import { SpaceBackground } from '@/components/space-background';
import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Achievements } from '@/components/sections/achievements';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}