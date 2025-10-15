import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { inter } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tiger BioSciences - Medical Technology Innovation",
  description: "Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        {/* Fixed radial gradient background */}
        <div className="fixed inset-0 -z-50">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1), transparent 50%)",
            }}
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
