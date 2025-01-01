import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 font-mono">
      <div className="max-w-md text-center">
        <div className="text-xs text-muted-foreground">$ cat /routes/not-found</div>
        <h1 className="mt-3 text-7xl font-bold text-gradient">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          fatal: pathspec did not match any file(s) known to git
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground hover:bg-secondary transition"
        >
          cd ~/
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 font-mono">
      <div className="max-w-md text-center">
        <div className="text-xs text-destructive">build failed · exit 1</div>
        <h1 className="mt-3 text-xl font-semibold">This page didn't compile</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try invalidating cache and rebuilding.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
        >
          $ retry
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  ssr: false,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Software Engineer · Full-Stack Portfolio" },
      {
        name: "description",
        content:
          "Full-Stack Software Engineer building scalable enterprise systems with Java, Spring Boot, and Angular.",
      },
      { name: "author", content: "Software Engineer" },
      { name: "theme-color", content: "#0a0d14" },
      { property: "og:title", content: "Software Engineer · Full-Stack Portfolio" },
      {
        property: "og:description",
        content: "Building scalable enterprise applications with Java, Spring Boot, and Angular.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
