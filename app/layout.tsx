import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Taskify",
    template: `%s | Taskify`,
  },
  description: "Collaborate, manage projects, and reach new productivity peaks",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body className={cn(
        "w-screen h-screen",
        inter.className
      )}>
        {children}
      </body>
    </html>
  );
}
