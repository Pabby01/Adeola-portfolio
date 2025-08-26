"use client";

import { motion } from 'framer-motion';
import { MapPin, Download, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/glass-card';

export function About() {
  const values = [
    { icon: Star, label: 'Fast Learner', description: 'Quickly adapt to new technologies and frameworks' },
    { icon: Users, label: 'Team Collaboration', description: 'Excel in async teams and remote environments' },
    { icon: Award, label: 'Problem Solver', description: 'Focus on practical solutions and clean architecture' },
  ];

  return (
    <section id="about" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future of web development, one project at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-web3-primary to-web3-accent flex items-center justify-center text-2xl font-bold text-white">
                    AL
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">Adeola Lasisi</h3>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      Lagos, Nigeria
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m a senior software developer with strong <strong>Web2</strong> (React, Next.js, Node, MongoDB) and <strong>Web3</strong> (Solana, Anchor, Drift Protocol, Wallet Adapter) experience. I ship performant, production-grade apps and dApps, blending clean architecture with polished UX.
                  </p>
                  
                  <p>
                    As a <strong>SuperteamNG verified contributor</strong>, I&apos;ve participated in <strong>two global Solana hackathons</strong> plus <strong>Sonic</strong>, <strong>Radar</strong>, and <strong>Boutine</strong> hackathons. I thrive in async teams, learn fast, and collaborate well under pressure.
                  </p>
                  
                  <p>
                    I&apos;m passionate about solving real problems— from DeFi and marketplaces to DePIN/IoT—while keeping DX, security, and performance top of mind.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Badge variant="outline" className="glass">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Available for work
                  </Badge>
                  <Button
                    variant="outline"
                    className="glass-card group"
                    asChild
                  >
                    <a href="/documents/cv.pdf" download>
                      <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-web3-primary/20 to-web3-accent/20 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-web3-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold mb-2">{value.label}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 border-web3-primary/20">
                <h4 className="font-heading text-lg font-semibold mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-web3-primary font-semibold">Languages:</div>
                    <div className="text-muted-foreground">5+ Programming</div>
                  </div>
                  <div>
                    <div className="text-web3-primary font-semibold">Experience:</div>
                    <div className="text-muted-foreground">3+ Years</div>
                  </div>
                  <div>
                    <div className="text-web3-primary font-semibold">Education:</div>
                    <div className="text-muted-foreground">CGPA 3.7/5.0</div>
                  </div>
                  <div>
                    <div className="text-web3-primary font-semibold">Location:</div>
                    <div className="text-muted-foreground">Lagos, NG</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}