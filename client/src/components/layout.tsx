import { ThemeToggle } from "./theme-toggle";
import { Link } from "wouter";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-center gap-6">
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
            <Link href="/services">
              <a className="hover:text-primary">Services</a>
            </Link>
            <a href="https://aichronicles1211.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              Blog
            </a>
            <a href="#contact" className="hover:text-primary" onClick={(e) => {
              e.preventDefault();
              
              // Find the section that contains the contact form (Ready to Work Together section)
              const workTogetherSection = document.querySelector('.bg-primary\\/5');
              const contactSection = document.getElementById("contact");
              
              if (workTogetherSection) {
                // Scroll to the "Ready to Work Together" section
                workTogetherSection.scrollIntoView({ behavior: "smooth", block: "start" });
              } else if (contactSection) {
                // Fallback to contact form if the section can't be found
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                // If not on home page, go to home page first then set up a function
                // to scroll to the contact section after the page loads
                sessionStorage.setItem('scrollToContact', 'true');
                window.location.href = "/";
              }
            }}>
              Contact
            </a>
            <div className="border-l pl-6 flex items-center gap-4">
              <a href="https://github.com/AChowdhury1211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/anwesha-chowdhury/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/Anweshac1211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <Link href="/">
              <a className="flex items-center gap-2">
                <img 
                  src="/images/aichronicles_logo.png" 
                  alt="AIChronicles Logo" 
                  className="h-20 w-auto"
                />
              </a>
            </Link>
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} AIChronicles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}