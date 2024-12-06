import Nav from '@/components/ui/nav';
import c from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="size-full bg-white text-black dark:bg-black dark:text-white"
    >
      <body className={c(inter.className, 'size-full antialiased')}>
        {/* @ts-expect-error Server Component */}
        <Nav />
        <main className="mx-auto flex h-auto min-h-full w-full max-w-5xl items-center justify-center pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
