import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Taskify",
    template: `%s | Taskify`,
  },
  description: "Collaborate, manage projects, and reach new productivity peaks",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "w-screen h-screen",
        inter.className
      )}>
        {children}
      </body>
    </html>
  );
}
