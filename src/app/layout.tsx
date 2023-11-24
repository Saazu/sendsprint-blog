import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sendsprint | Blog',
  description: 'Learn all about the fastest, simplest and most secure way to send money and gift cards internationally to Africa. Get money and gifts delivered in seconds with Sendsprint in informative and engaging blog posts from the send sprint team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
