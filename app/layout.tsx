import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Icon from "@/components/Icon";
import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserNav } from "@/components/user-nav";
import { LucideBell } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CX4 SoliD Prototype",
  description:
    "This is a prototype of Porsche's SoliD system for the solution proposal from CX4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden flex-col md:flex">
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <Icon className="" width={45} height={55} />
                <Separator orientation="vertical" className="mr-2" />
                <div className="mr-3">
                  <h1 className="font-bold text-lg">SoliD</h1>
                  <h1 className="text-xs">Solution with </h1>
                  <h1 className="text-xs">Integrated Diagnostics</h1>
                </div>
                <Search />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <LucideBell className="h-6 w-6" />
                  </Button>
                  <UserNav />
                </div>
              </div>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
