import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-4xl px-6 py-8 text-right lg:px-0">
      <p className="text-xs text-muted">
        &copy; {new Date().getFullYear()} Created by{" "}
        <a
          href={siteConfig.author.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 transition-colors hover:text-accent"
        >
          {siteConfig.author.name}
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
