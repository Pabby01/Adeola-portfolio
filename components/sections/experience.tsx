"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/glass-card';

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Solarinstech',
    period: 'Oct 2024 – Present',
    location: 'Remote',
    type: 'Internship',
    description: 'Building scalable MERN applications with focus on performance optimization and modern development practices.',
    achievements: [
      'Developed full-stack applications using React, Node.js, and MongoDB',
      'Implemented Git workflows for collaborative development',
      'Fixed critical performance bugs improving load times by 30%',
      'Collaborated with senior developers on production releases'
    ],
    tech: ['MERN Stack', 'Git', 'React', 'Node.js', 'MongoDB']
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Zidio, CodSoft, Oasis Infobyte, Bahrat',
    period: 'Aug 2024 – Nov 2024',
    location: 'Remote',
    type: 'Multiple Internships',
    description: 'Gained comprehensive experience across multiple companies focusing on full-stack development and secure API design.',
    achievements: [
      'Built responsive React applications with modern UI/UX patterns',
      'Developed secure Node.js APIs with authentication middleware',
      'Implemented database schemas and optimized queries',
      'Delivered projects on time across multiple client requirements'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Auth', 'APIs']
  },
  {
    role: 'Social Media Manager',
    company: 'Samtech',
    period: 'May 2024 – Sep 2024',
    location: 'Remote',
    type: 'Contract',
    description: 'Led content strategy and digital marketing efforts, driving significant engagement and lead generation.',
    achievements: [
      'Increased qualified leads by 30% through strategic content planning',
      'Developed comprehensive social media strategies across platforms',
      'Created engaging content that improved brand awareness',
      'Analyzed metrics to optimize campaign performance'
    ],
    tech: ['Content Strategy', 'Analytics', 'Social Media', 'Marketing']
  },
  {
    role: 'Sales Manager',
    company: 'Jumades',
    period: '2019 – 2024',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Drove business growth through strategic sales initiatives and team leadership over 5 years.',
    achievements: [
      'Achieved ~40% revenue growth through strategic sales initiatives',
      'Built and led high-performing sales teams',
      'Developed customer relationship management processes',
      'Implemented data-driven sales strategies and reporting'
    ],
    tech: ['Sales Strategy', 'Team Leadership', 'CRM', 'Business Growth']
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through diverse roles in tech and business development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-web3-primary via-web3-secondary to-web3-accent transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-web3-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg">
                  <div className="absolute inset-1 bg-background rounded-full"></div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <GlassCard className="p-6 relative" enableTilt={false}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-bold mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-web3-primary font-medium mb-2">
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                      <Badge variant="outline" className="glass text-xs">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-web3-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}