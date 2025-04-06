import { SiGithub, SiLinkedin, SiUpwork, SiSubstack } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function SocialLinks() {
  const links = [
    { icon: SiGithub, href: "https://github.com/AChowdhury1211", label: "GitHub" },
    { icon: FaXTwitter, href: "https://x.com/Anweshac1211", label: "X" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/anwesha-chowdhury/", label: "LinkedIn" },
    { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~0105df259d22f176e7", label: "Upwork" },
    { icon: SiSubstack, href: "#", label: "Substack" },
  ];

  return (
    <div className="flex gap-4 items-center">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon className="w-6 h-6" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </div>
  );
}