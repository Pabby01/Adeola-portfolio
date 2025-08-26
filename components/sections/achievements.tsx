"use client";

import { motion } from 'framer-motion';
import { Trophy, Users, Award, Target, Star, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/glass-card';

const achievements = [
  {
    category: 'Community & Verification',
    icon: Users,
    items: [
      {
        title: 'SuperteamNG Verified Contributor',
        description: 'Recognized and verified by top community leaders in the Solana ecosystem',
        highlight: 'Known by key ecosystem leaders',
        color: 'web3-primary'
      }
    ]
  },
  {
    category: 'Hackathons & Competitions',
    icon: Trophy,
    items: [
      {
        title: 'Global Solana Hackathons',
        description: 'Participated in 2 international Solana hackathons with innovative dApp submissions',
        highlight: '2 Global Competitions',
        color: 'web3-secondary'
      },
      {
        title: 'Web3 Hackathon Circuit',
        description: 'Active participant in Sonic, Radar, and Boutine hackathons',
        highlight: 'Multi-platform participation',
        color: 'web3-accent'
      }
    ]
  },
  {
    category: 'Awards & Recognition',
    icon: Award,
    items: [
      {
        title: 'YALI Best Graduating Participant',
        description: 'Awarded for BookPlus project - appointment booking system for political offices',
        highlight: 'Top Graduate',
        color: 'yellow-500'
      },
      {
        title: 'OCFA Top 10%',
        description: 'Ranked in top 10% of participants in competitive program',
        highlight: 'Elite Performance',
        color: 'green-500'
      },
      {
        title: 'FUNAAB Senator Outstanding Performance',
        description: 'Recognized for exceptional leadership and academic performance',
        highlight: 'Leadership Excellence',
        color: 'purple-500'
      }
    ]
  },
  {
    category: 'Leadership & Community',
    icon: Star,
    items: [
      {
        title: 'Cowrywise Campus Lead',
        description: 'Led campus initiatives for financial technology education and adoption',
        highlight: 'Campus Leadership',
        color: 'blue-500'
      },
      {
        title: 'SDA Fellowship President',
        description: 'Provided leadership and direction for fellowship activities and community engagement',
        highlight: 'Fellowship Leadership',
        color: 'indigo-500'
      },
      {
        title: 'LinkedIn Local Abeokuta Coordinator',
        description: 'Managed volunteer coordination for 400+ community members',
        highlight: '400+ Volunteers',
        color: 'teal-500'
      }
    ]
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Community & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition from the community and excellence in various domains
          </p>
        </motion.div>

        <div className="space-y-16">
          {achievements.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-web3-primary/20 to-web3-accent/20 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-web3-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + itemIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="p-6 h-full flex flex-col" enableTilt>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge 
                            variant="outline" 
                            className={`glass text-${item.color} border-${item.color}/20`}
                          >
                            {item.highlight}
                          </Badge>
                        </div>

                        <h4 className="font-heading text-lg font-semibold mb-3 leading-tight">
                          {item.title}
                        </h4>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Target className="w-3 h-3" />
                          <span>Achievement Unlocked</span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                These achievements represent my commitment to excellence, community building, 
                and continuous learning in the rapidly evolving Web3 space.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="glass">
                  <Trophy className="w-3 h-3 mr-1" />
                  Community Verified
                </Badge>
                <Badge variant="outline" className="glass">
                  <Star className="w-3 h-3 mr-1" />
                  Award Winner
                </Badge>
                <Badge variant="outline" className="glass">
                  <Users className="w-3 h-3 mr-1" />
                  Leader & Coordinator
                </Badge>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}