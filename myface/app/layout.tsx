import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "MyLove",
  description: "Next.js + shadcn/ui Sidebar",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
          {children}
      </body>
    </html>
  );
}
