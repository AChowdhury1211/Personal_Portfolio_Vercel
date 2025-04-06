import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between w-full">
            <div className="flex items-center gap-6">
              <a href="/" className="hover:text-primary">Home</a>
              <a href="https://aichronicles1211.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Blog
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/AChowdhury1211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/anwesha-chowdhury/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/Anweshac1211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <div className="border-l pl-4">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center gap-2">
                <img 
                  src="/images/aichronicles_logo.png" 
                  alt="AIChronicles Logo" 
                  className="h-20 w-auto"
                />
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/AChowdhury1211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <SiGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/anwesha-chowdhury/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <SiLinkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/Anweshac1211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} AIChronicles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}