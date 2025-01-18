import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LucideBell, LucideUserRound } from "lucide-react";

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
              <div className="flex h-16 items-center justify-between px-4">
                <div className="mx-2" />
                <Search />
                <div className="align-end flex flex-row">
                  <MainNav className="mx-6" />
                  <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle />
                    <Button variant="ghost" size="icon">
                      <LucideBell className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <LucideUserRound className="w-6 h-6 bg-background" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <SidebarProvider>
              <AppSidebar />
              <main>{children}</main>
            </SidebarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
