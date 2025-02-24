import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <nav className="flex gap-6">
            <Link href="/">
              <a className="font-semibold hover:text-primary">Home</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-primary">Blog</a>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
