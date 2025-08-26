"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/glass-card';

const projects = [
  {
    title: 'Wurana',
    description: 'Solana-powered gig & FMCG marketplace with wallet auth, reputation NFTs, and escrow flows.',
    problem: 'Fragmented freelance and FMCG markets lacking trust and transparency',
    solution: 'Blockchain-based reputation system with secure escrow payments',
    outcomes: 'Deployed on Solana mainnet with active user base',
    tech: ['Web3', 'Solana', 'Anchor', 'Next.js', 'TypeScript'],
    links: {
      github: 'https://github.com/Pabby01',
      demo: 'https://my-portfolio-zeta-nine-53.vercel.app/',
    },
    featured: true
  },
  {
    title: 'AI Meme Wars',
    description: 'Gamified Solana dApp for generating & voting on AI memes with token rewards.',
    problem: 'Lack of engaging gamified content creation platforms in Web3',
    solution: 'AI-powered meme generation with community voting and tokenized rewards',
    outcomes: 'Viral adoption during hackathon with 1000+ generated memes',
    tech: ['Web3', 'Solana', 'Next.js', 'TypeScript', 'AI/ML'],
    links: {
      github: 'https://github.com/Pabby01',
    },
    featured: true
  },
  {
    title: 'Soul Sanctuary',
    description: 'Faith-based DePIN/IoT platform exploring remote connectivity and community media.',
    problem: 'Limited spiritual community engagement in remote areas',
    solution: 'DePIN network connecting faith communities through IoT devices',
    outcomes: 'Successful proof-of-concept with community partnerships',
    tech: ['Web3', 'Solana', 'IoT', 'DePIN', 'React'],
    links: {
      linkedin: 'https://www.linkedin.com/company/soulsanctuarycloud/',
    },
    featured: true
  },
  {
    title: 'Drift Trading UI',
    description: 'Trading frontend integrating Drift Protocol SDK, Zustand state, and wallet adapters.',
    problem: 'Complex DeFi trading interfaces with poor user experience',
    solution: 'Intuitive trading interface with real-time data and state management',
    outcomes: 'Streamlined trading experience with 50% faster execution times',
    tech: ['Web3', 'Next.js', 'TypeScript', 'Zustand', 'Drift Protocol'],
    links: {
      github: 'https://github.com/Pabby01',
    },
    featured: true
  },
  {
    title: 'ShopEX',
    description: 'Full MERN e-commerce app with payments, carts, and admin dashboards.',
    problem: 'Small businesses need affordable, feature-rich e-commerce solutions',
    solution: 'Complete MERN stack platform with integrated payment processing',
    outcomes: 'Deployed for multiple small businesses with 99% uptime',
    tech: ['Web2', 'MERN', 'MongoDB', 'Express', 'React', 'Node.js'],
    links: {
      github: 'https://github.com/Pabby01',
    },
    featured: false
  },
  {
    title: 'BookPlus',
    description: 'Appointment booking system for political offices with WordPress integration.',
    problem: 'Inefficient appointment scheduling in government offices',
    solution: 'Custom WordPress plugin for streamlined appointment management',
    outcomes: 'YALI Best Graduating Participant award, improved citizen services',
    tech: ['Web2', 'WordPress', 'PHP', 'MySQL', 'JavaScript'],
    links: {
      demo: 'https://my-portfolio-zeta-nine-53.vercel.app/',
    },
    featured: false
  }
];

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A mix of Web3 and Web2 projects showcasing full-stack development expertise
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full flex flex-col" enableTilt>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant={project.tech.includes('Web3') ? 'default' : 'secondary'} className="text-xs">
                      {project.tech.includes('Web3') ? 'Web3' : 'Web2'}
                    </Badge>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-web3-primary">Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-web3-secondary">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-web3-accent">Outcome</h4>
                      <p className="text-sm text-muted-foreground">{project.outcomes}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild className="glass-card">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" size="sm" asChild className="glass-card">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.links.linkedin && (
                    <Button variant="outline" size="sm" asChild className="glass-card">
                      <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Company
                      </a>
                    </Button>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-heading text-2xl font-bold text-center mb-8">
            Other <span className="text-gradient">Projects</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full flex flex-col" enableTilt={false}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={project.tech.includes('Web3') ? 'default' : 'secondary'} className="text-xs">
                      {project.tech.includes('Web3') ? 'Web3' : 'Web2'}
                    </Badge>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <h4 className="font-heading text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                </div>

                <div className="flex gap-2">
                  {project.links.github && (
                    <Button variant="ghost" size="sm" asChild className="text-xs">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="sm" asChild className="text-xs">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}