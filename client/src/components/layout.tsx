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
                {/* Replace with your actual logo */}
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  Logo
                </div>
                <span className="font-semibold text-xl">Your Name</span>
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="#linkedin" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                <a href="#youtube" className="text-muted-foreground hover:text-primary">YouTube</a>
                <a href="#twitter" className="text-muted-foreground hover:text-primary">Twitter</a>
                <a href="#github" className="text-muted-foreground hover:text-primary">GitHub</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Hire Me</h3>
              <div className="flex gap-4">
                <a href="#upwork" className="text-muted-foreground hover:text-primary">Upwork</a>
                <a href="#fiverr" className="text-muted-foreground hover:text-primary">Fiverr</a>
                <Link href="/#contact">
                  <a className="text-muted-foreground hover:text-primary">Contact Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}