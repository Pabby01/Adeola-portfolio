"use client";

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/glass-card';

const blogPosts = [
  {
    title: 'How I Built a Gamified Meme dApp on Solana',
    excerpt: 'Deep dive into building AI Meme Wars - from smart contract architecture to frontend integration with Solana.',
    date: '2024-12-01',
    readTime: '8 min read',
    tags: ['Solana', 'dApp', 'GameFi', 'AI'],
    featured: true,
    link: 'https://medium.com/@adeolalasisi6'
  },
  {
    title: 'Bridging Web2 & Web3: Lessons from Wurana',
    excerpt: 'Key insights from building a marketplace that combines traditional e-commerce with blockchain technology.',
    date: '2024-11-15',
    readTime: '6 min read',
    tags: ['Web3', 'Marketplace', 'Solana', 'UX'],
    featured: true,
    link: 'https://dexmega.thsite.top/blog'
  },
  {
    title: 'DePIN in Practice: Soul Sanctuary Case Study',
    excerpt: 'Exploring the intersection of faith, community, and decentralized physical infrastructure networks.',
    date: '2024-10-28',
    readTime: '5 min read',
    tags: ['DePIN', 'IoT', 'Community', 'Web3'],
    featured: true,
    link: 'https://medium.com/@adeolalasisi6'
  },
  {
    title: 'State Management in Modern React Apps',
    excerpt: 'Comparing Zustand, Redux, and Context API for different use cases in production applications.',
    date: '2024-10-10',
    readTime: '7 min read',
    tags: ['React', 'State Management', 'Performance'],
    featured: false,
    link: 'https://dexmega.thsite.top/blog'
  },
  {
    title: 'Building Responsive Trading UIs',
    excerpt: 'Best practices for creating smooth, real-time trading interfaces with complex data visualizations.',
    date: '2024-09-22',
    readTime: '9 min read',
    tags: ['UI/UX', 'Trading', 'Performance', 'React'],
    featured: false,
    link: 'https://medium.com/@adeolalasisi6'
  }
];

export function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Blog & <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights from building in Web3, technical deep-dives, and lessons learned
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold mb-8"
          >
            Featured Articles
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full flex flex-col group" enableTilt>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <time>{formatDate(post.date)}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-heading text-xl font-bold mb-3 leading-tight group-hover:text-web3-primary transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs glass">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild 
                    className="group/button justify-start p-0 h-auto hover:bg-transparent"
                  >
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-web3-primary hover:text-web3-secondary transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                    </a>
                  </Button>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Regular Posts */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold mb-8"
          >
            More Articles
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 group hover:border-web3-primary/20 transition-colors" enableTilt={false}>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <time>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="font-heading text-lg font-semibold mb-2 leading-tight group-hover:text-web3-primary transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" asChild className="h-auto p-0">
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-web3-primary hover:text-web3-secondary transition-colors"
                      >
                        Read
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GlassCard className="p-8">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Want to Read More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Check out my full blog for more technical articles, project breakdowns, and insights from the Web3 ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="glass-card">
                <a href="https://dexmega.thsite.top/blog" target="_blank" rel="noopener noreferrer">
                  Visit Blog
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="glass-card">
                <a href="https://medium.com/@adeolalasisi6" target="_blank" rel="noopener noreferrer">
                  Medium Articles
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}