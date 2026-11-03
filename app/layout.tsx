import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FarmConnect — Good food starts with good connections",
  description:
    "Discover fresh, locally grown produce and connect directly with the farmers who grow it.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
