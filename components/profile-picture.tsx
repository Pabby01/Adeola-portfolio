'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '@/components/glass-card';

export function ProfilePicture() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <GlassCard className="w-48 h-48 rounded-full overflow-hidden border-4 border-web3-primary/20 shadow-lg">
        <Image
          src="/images/pab.jpg"
          alt="Profile Picture"
          width={192}
          height={192}
          className="w-full h-full object-cover"
          priority
          quality={100}
        />
      </GlassCard>

      <motion.div
        className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-web3-primary/20 backdrop-blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
}