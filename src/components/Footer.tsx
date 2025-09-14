import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/pakiyalakshmi",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/pakiyalakshmi",
      label: "GitHub"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:srpaabinaya80529@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Pakiyalakshmi S</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AI/ML Developer & Full Stack Engineer passionate about building intelligent solutions 
              that make a positive impact on the world.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 hover:border-primary/30 border border-border transition-smooth group"
                  aria-label={social.label}
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-smooth">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Dindigul, Tamil Nadu, India</p>
              <a 
                href="mailto:srpaabinaya80529@gmail.com"
                className="hover:text-primary transition-smooth"
              >
                srpaabinaya80529@gmail.com
              </a>
              <a 
                href="tel:+918220241670"
                className="hover:text-primary transition-smooth"
              >
                +91 8220241670
              </a>
            </div>
            
            <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></span>
                Currently available for new opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Pakiyalakshmi S. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;