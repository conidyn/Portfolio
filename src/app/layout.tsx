import type { Metadata } from "next";
import "./globals.css";
import { site } from "../data/site";
import { ThemeProvider } from "../components/ThemeProvider";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: "Nicolas Doyen — Full-Stack Developer | React, TypeScript & AI Integration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}