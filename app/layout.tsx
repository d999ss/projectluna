import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { archivo, inter } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tiger BioSciences™ - Medical Technology Innovation",
  description: "Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-background text-foreground antialiased"
      >
        {/* Fixed radial gradient background - neutral tones */}
        <div className="fixed inset-0 -z-50">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.08),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(0,0,0,0.05),_transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.03),_transparent_50%)]"
          />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
