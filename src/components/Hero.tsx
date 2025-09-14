import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin size={16} />
              <span>Dindigul, Tamil Nadu</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Pakiyalakshmi</span>
              <br />
              <span className="text-foreground">S</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              AI/ML Developer & Full Stack Engineer passionate about building intelligent solutions that make a difference
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gradient-primary text-white border-0 hover:shadow-glow transition-smooth">
              <Mail size={20} className="mr-2" />
              Get In Touch
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 transition-smooth">
              View My Work
              <ArrowDown size={20} className="ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/pakiyalakshmi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-smooth"
            >
              <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
            
            <a
              href="https://github.com/pakiyalakshmi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-smooth"
            >
              <Github size={20} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
            
            <a
              href="mailto:srpaabinaya80529@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-smooth"
            >
              <Mail size={20} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;