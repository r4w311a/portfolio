import { Home, Code, User, Mail, Github, Linkedin } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useIsMobile } from "@/hooks/use-mobile";

const navigationItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/r4w311a", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/r4w311a/", label: "LinkedIn" },
];

export default function Sidebar() {
  const activeSection = useScrollSpy(navigationItems.map(item => item.id));
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-cod-gray border-t border-dark-border">
        <div className="flex justify-around items-center py-2 px-4">
          {navigationItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 ${
                activeSection === id ? "text-accent" : "text-secondary"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-mono">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      {/* Compact Navigation Container */}
      <div className="bg-cod-gray rounded-2xl p-4 shadow-2xl border border-dark-border">
        {/* Logo */}
        <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center mb-6 float-animation">
          <span className="text-black font-mono font-bold text-lg">HM</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 mb-6">
          {navigationItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`nav-link group relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-dark-border hover:scale-110 ${
                activeSection === id ? "bg-dark-border scale-105" : ""
              }`}
            >
              <Icon
                className={`w-4 h-4 transition-all duration-300 ${
                  activeSection === id ? "text-accent" : "text-secondary hover:text-primary"
                }`}
              />
              <span className="tooltip">{label}</span>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-3 pt-4 border-t border-dark-border">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 hover:scale-110 rounded-lg hover:bg-dark-border"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
