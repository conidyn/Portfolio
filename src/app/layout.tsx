import type { Metadata } from "next";
import "./globals.css";
import { site } from "../data/site";
import { ThemeProvider } from "../components/ThemeProvider";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: "Minimal, clean portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}