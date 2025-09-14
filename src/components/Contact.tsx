import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: "Email",
      value: "srpaabinaya80529@gmail.com",
      href: "mailto:srpaabinaya80529@gmail.com"
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      label: "Phone",
      value: "+91 8220241670",
      href: "tel:+918220241670"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: "Location",
      value: "Dindigul, Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/pakiyalakshmi",
      color: "text-blue-600"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/pakiyalakshmi",
      color: "text-gray-800 dark:text-gray-200"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get <span className="text-gradient">In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, innovative projects, or just having a conversation about technology and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card className="p-8 border border-border shadow-card h-full">
              <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary/10 hover:border-primary/30 border border-border transition-smooth group"
                    >
                      <span className={`${social.color} group-hover:text-primary transition-smooth`}>
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Professional Status */}
              <Card className="mt-8 p-6 gradient-hero border border-primary/20">
                <h4 className="font-semibold mb-2">Current Status</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Actively seeking opportunities in AI/ML development and full-stack engineering roles.
                  Available for internships, freelance projects, and full-time positions.
                </p>
                <div className="flex gap-2">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span className="text-sm text-accent font-medium">Available for work</span>
                </div>
              </Card>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 border border-border shadow-card">
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-border focus:border-primary/50 focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-border focus:border-primary/50 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="border-border focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    className="border-border focus:border-primary/50 focus:ring-primary/20 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white border-0 hover:shadow-glow transition-smooth"
                  size="lg"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 gradient-hero border border-primary/20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="gradient-primary text-white border-0 hover:shadow-glow transition-smooth">
                <a href="mailto:srpaabinaya80529@gmail.com">
                  <Mail size={20} className="mr-2" />
                  Email Me Directly
                </a>
              </Button>
              <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/5 transition-smooth">
                <a href="tel:+918220241670">
                  <Phone size={20} className="mr-2" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;