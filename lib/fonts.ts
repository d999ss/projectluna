import { Archivo, Inter } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300"],              // Light for all headings
  variable: "--font-display",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],              // Regular for body
  variable: "--font-body",
  display: "swap",
});
