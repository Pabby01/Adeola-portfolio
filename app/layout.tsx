import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Adeola Lasisi - Senior Software Developer | Web2 & Web3 (Solana)',
  description: 'I build scalable web apps and decentralized systems that bridge Web2 reliability with Web3 innovation. SuperteamNG verified contributor specializing in Solana, React, and Node.js.',
  keywords: 'Adeola Lasisi, Software Developer, Web3, Solana, React, Next.js, TypeScript, SuperteamNG, Blockchain Developer',
  authors: [{ name: 'Adeola Lasisi' }],
  creator: 'Adeola Lasisi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://my-portfolio-zeta-nine-53.vercel.app/',
    title: 'Adeola Lasisi - Senior Software Developer | Web2 & Web3',
    description: 'I build scalable web apps and decentralized systems that bridge Web2 reliability with Web3 innovation.',
    siteName: 'Adeola Lasisi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adeola Lasisi - Senior Software Developer | Web2 & Web3',
    description: 'I build scalable web apps and decentralized systems that bridge Web2 reliability with Web3 innovation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}