"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { ProfilePicture } from '@/components/profile-picture';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/glass-card';
import { AnimatedCounter } from '@/components/animated-counter';

export function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Pabby01', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lasisi-adeola/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:adeolalasisi6@gmail.com', label: 'Email' },
  ];

  const stats = [
    { value: 10, suffix: '+', label: 'Hackathons' },
    { value: 20, suffix: '+', label: 'Projects' },
    { value: 100, suffix: '%', label: 'SuperteamNG Verified' },
    { value: 10, suffix: '%', label: 'OCFA Top' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding py-20">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-8 glass text-sm px-4 py-2 mt-8">
              <span className="animate-pulse mr-2">●</span>
              Available for new opportunities
            </Badge>
          </motion.div>

          <ProfilePicture />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl md:text-7xl lg:text-3xl font-bold mb-6 leading-tight"
          >
            Software Developer —{' '}
            <span className="text-gradient">
              <span className="text-6xl md:text-2xl lg:text-2xl">Web2</span> & 
              <span className="text-5xl md:text-2xl lg:text-2xl">Web3</span>
            </span>{' '}
            <span className="text-web3-secondary">(Solana)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I build scalable web apps and decentralized systems that bridge Web2 reliability with Web3 innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button 
              onClick={() => handleNavClick('projects')}
              size="lg" 
              className="glass-card group"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => handleNavClick('contact')}
              variant="outline" 
              size="lg" 
              className="glass-card"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card p-3 rounded-full transition-colors hover:bg-web3-primary/20"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={2 + index * 0.2}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}