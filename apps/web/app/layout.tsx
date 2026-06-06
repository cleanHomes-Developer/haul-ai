import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haul.AI — The AI Dispatch Network for Trucking",
  description: "AI-powered dispatch negotiation for trucking carriers. Real-time market intelligence. Community insights. Fully autonomous.",
  authors: [{ name: "Haul Intelligence LLC" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-navy font-sans">{children}</body>
    </html>
  );
}
