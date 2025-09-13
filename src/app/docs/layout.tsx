import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        collapsible: false,
      }}
      themeSwitch={{enabled: false}}
      searchToggle={{enabled: false}}
    >
      {children}
    </DocsLayout>
  );
}
