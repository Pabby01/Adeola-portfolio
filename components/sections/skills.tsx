"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/glass-card';

const skillCategories = [
  {
    title: 'Web3 & Blockchain',
    icon: '⛓️',
    skills: [
      { name: 'Solana', level: 90 },
      { name: 'Anchor', level: 85 },
      { name: 'Drift Protocol', level: 80 },
      { name: 'Wallet Adapter', level: 90 },
      { name: 'Web3.js', level: 85 },
      { name: 'Token Design', level: 75 },
      { name: 'Rust Basics', level: 70 },
    ],
    gradient: 'from-web3-primary to-web3-accent'
  },
  {
    title: 'Web2 & Frontend',
    icon: '⚛️',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Zustand', level: 80 },
      { name: 'SEO Basics', level: 75 },
    ],
    gradient: 'from-web3-secondary to-blue-500'
  },
  {
    title: 'Backend & Database',
    icon: '🛠️',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Languages & Tools',
    icon: '🔧',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Postman', level: 85 },
      { name: 'Cybersecurity', level: 70 },
    ],
    gradient: 'from-purple-500 to-pink-500'
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning Web2 and Web3 technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full" enableTilt={false}>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="font-heading text-xl font-bold">{category.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 4).map((skill) => (
                      <Badge 
                        key={skill.name} 
                        variant="secondary" 
                        className="text-xs glass"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                    {category.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}