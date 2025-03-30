import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <a className="flex items-center gap-2">
                {/* Main logo */}
                <div className="h-14 w-44 flex items-center justify-center">
                  <img src="/images/logo.svg" alt="AIChronicles Logo" className="h-full" />
                </div>
              </a>
            </Link>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
            <Link href="/services">
              <a className="hover:text-primary">Services</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-primary">Blog</a>
            </Link>
            <Link href="/#contact">
              <a className="hover:text-primary">Contact</a>
            </Link>
            <div className="border-l pl-6 flex items-center gap-4">
              <a href="#github" className="text-muted-foreground hover:text-primary">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="text-muted-foreground hover:text-primary">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="#youtube" className="text-muted-foreground hover:text-primary">
                <SiYoutube className="w-5 h-5" />
              </a>
              <a href="#twitter" className="text-muted-foreground hover:text-primary">
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex justify-center mb-4">
            <img src="/images/ac-logo.svg" alt="AC Logo" className="h-10" />
          </div>
          <p>&copy; {new Date().getFullYear()} AIChronicles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}