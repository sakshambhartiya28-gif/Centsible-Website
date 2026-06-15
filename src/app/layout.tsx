import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { ProgressProvider } from '@/context/ProgressContext';

export const metadata: Metadata = {
  title: 'Centsible — Financial Literacy for the Next Generation',
  description: 'Learn money management, investing, and financial security through interactive courses and games designed for young learners.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <ProgressProvider>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </ProgressProvider>
      </body>
    </html>
  );
}
