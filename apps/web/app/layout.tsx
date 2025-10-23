import type { Metadata } from "next";
import { ThemeProvider } from "@repo/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "DuckConnect - Stay Online, Even When Offline",
  description: "Turn on the Duck to keep watching, working, and syncing data seamlessly across all your devices.",
  keywords: "offline, sync, browser extension, productivity, data management",
  authors: [{ name: "DuckConnect Team" }],
  openGraph: {
    title: "DuckConnect - Stay Online, Even When Offline",
    description: "Turn on the Duck to keep watching, working, and syncing data seamlessly across all your devices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" storageKey="duckconnect-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}