import { SiGithub, SiLinkedin, SiUpwork, SiFiverr, SiSubstack, SiYoutube } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function SocialLinks() {
  const links = [
    { icon: SiGithub, href: "#", label: "GitHub" },
    { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: SiUpwork, href: "#", label: "Upwork" },
    { icon: SiFiverr, href: "#", label: "Fiverr" },
    { icon: SiSubstack, href: "#", label: "Substack" },
    { icon: SiYoutube, href: "#", label: "YouTube" },
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