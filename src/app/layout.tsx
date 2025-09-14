import "@/app/global.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme";
import { RootProvider } from "fumadocs-ui/provider";

const inter = Inter({
  subsets: ["latin"],
});

type LayoutProps = {
  readonly children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
