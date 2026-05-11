import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Veliora 1815 OÜ",
  description:
    "A boutique advisory firm providing management consulting, go-to-market strategy, public policy advisory, leadership coaching, and executive education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
