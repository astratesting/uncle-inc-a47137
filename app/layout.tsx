import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uncle Inc. — AI-Assisted MVP Development",
  description:
    "From idea to validated MVP faster than ever. AI-assisted prototyping, user testing panels, and analytics for early-stage startup founders.",
  keywords: ["MVP", "startup", "AI", "prototyping", "no-code", "user testing"],
  openGraph: {
    title: "Uncle Inc. — AI-Assisted MVP Development",
    description: "From idea to validated MVP faster than ever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ink-black text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}