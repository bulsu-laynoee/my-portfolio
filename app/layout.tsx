import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider"; // INIMPORT NATIN ITO

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edward Layno | Portfolio",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Importante ang suppressHydrationWarning para sa next-themes
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col relative transition-colors duration-300`}>
        
        <ThemeProvider>
          {/* --- LIVE ANIMATED BACKGROUND (Nag-aadjust sa Dark Mode) --- */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob transition-colors duration-500"></div>
            <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-300 dark:bg-cyan-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000 transition-colors duration-500"></div>
            <div className="absolute -bottom-8 left-40 w-96 h-96 bg-indigo-300 dark:bg-indigo-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-4000 transition-colors duration-500"></div>
          </div>

          <Navbar />

          <main className="flex-grow w-full relative z-10">
            {children}
          </main>

          <footer className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50 py-8 mt-auto relative z-10 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Edward Layno. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>

      </body>
    </html>
  );
}