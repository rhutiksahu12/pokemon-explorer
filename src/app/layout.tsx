import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokémon Explorer',
  description: 'A web app to explore Pokémon using the PokeAPI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-red-600 shadow-md">
          <div className="container mx-auto px-4 py-6">
            <Link href="/" className="text-white text-3xl font-bold flex items-center">
              <span className="mr-2">Pokémon Explorer</span>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>Pokémon Explorer - Built with Next.js and PokeAPI</p>
          </div>
        </footer>
      </body>
    </html>
  );
}