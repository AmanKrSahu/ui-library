import "@/app/global.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme";
import { RootProvider } from "fumadocs-ui/provider";
import { Banner } from "fumadocs-ui/components/banner";

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
        <Banner variant="rainbow">
          <span>✨ Just launched: Component Library</span>
          <a
            className="mx-1 font-semibold underline"
            href="/docs/components"
            rel="noopener"
            target="_blank"
          >
            v1.0
          </a>
          <span>with 30+ production-ready components.</span>
        </Banner>
        <ThemeProvider>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
