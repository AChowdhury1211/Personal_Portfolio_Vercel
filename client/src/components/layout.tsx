import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b relative z-10">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <a className="flex items-center gap-2">
                {/* Only the top part of the logo is visible in the header */}
                <div className="h-20 overflow-hidden">
                  <img 
                    src="/images/aichronicles_logo.png" 
                    alt="AIChronicles Logo" 
                    className="h-48 w-auto relative -top-4"
                    id="header-logo"
                  />
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
          <p>&copy; {new Date().getFullYear()} AIChronicles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}