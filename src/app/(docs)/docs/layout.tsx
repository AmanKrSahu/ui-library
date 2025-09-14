import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import { Banner } from "fumadocs-ui/components/banner";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <>
      <Banner variant="rainbow">
        <span>✨ New Release: Woven UI</span>
        <a
          className="mx-1 font-semibold underline"
          href="/docs/components"
          rel="noopener"
          target="_blank"
        >
          v1.0.0
        </a>
        <span>with 30+ production-ready components.</span>
      </Banner>
      <DocsLayout
        tree={source.pageTree}
        sidebar={{
          collapsible: false,
        }}
        themeSwitch={{ enabled: false }}
        searchToggle={{ enabled: false }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
