import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, Brain, BarChart3, Palette, Zap, Mail } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ML WALL-E",
      description: "An AI assistant with machine learning capabilities for intelligent responses, featuring document-based Q&A, image-to-text conversion, voice-to-text translation, and Google image search integration.",
      icon: <Bot className="text-primary" size={24} />,
      technologies: ["Python", "Machine Learning", "NLP", "Computer Vision"],
      status: "Completed",
      githubUrl: "#",
      features: ["Document Q&A", "Image-to-Text", "Voice Translation", "Google Search"],
      color: "primary"
    },
    {
      title: "APTIMATE BOT",
      description: "An AI chatbot utilizing NLP and machine learning for automated responses, enhanced user engagement, and intelligent decision-making capabilities.",
      icon: <Brain className="text-accent" size={24} />,
      technologies: ["Python", "Streamlit", "NLP", "Machine Learning"],
      status: "Completed",
      features: ["NLP Processing", "Automated Responses", "User Engagement", "Smart Decisions"],
      color: "accent"
    },
    {
      title: "Smart Phone Addiction Analysis",
      description: "A comprehensive Tableau project that visualizes smartphone usage patterns, providing insights into user behavior, screen time trends, and addiction levels through interactive dashboards.",
      icon: <BarChart3 className="text-primary" size={24} />,
      technologies: ["Tableau", "Data Analysis", "CSV Processing", "Data Visualization"],
      status: "Completed",
      features: ["Usage Patterns", "Screen Time Analysis", "Interactive Dashboards", "Addiction Metrics"],
      color: "primary"
    },
    {
      title: "WALL-E Ultimate Bot Design",
      description: "Orchestrated the design of WALL-E Ultimate Bot, a Figma-based AI assistant interface, incorporating accessibility guidelines and intuitive navigation that improved user task completion rates by 30%.",
      icon: <Palette className="text-accent" size={24} />,
      technologies: ["Figma", "UI/UX Design", "Accessibility", "User Research"],
      status: "Completed",
      features: ["Accessibility Guidelines", "Intuitive Navigation", "30% Improvement", "User Testing"],
      color: "accent"
    },
    {
      title: "Early Prediction of Dyslexia",
      description: "An AI-driven project using machine learning to detect dyslexia risk early by analyzing linguistic, cognitive, and behavioral patterns for timely intervention. Currently in development as part of research work.",
      icon: <Zap className="text-primary" size={24} />,
      technologies: ["Machine Learning", "Java", "Random Forest", "Research"],
      status: "In Progress",
      features: ["Early Detection", "Pattern Analysis", "Risk Assessment", "Research Paper"],
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in AI/ML, full-stack development, and UI/UX design. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group p-6 border border-border hover:border-primary/30 transition-smooth shadow-card hover:shadow-elegant animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  {project.icon}
                </div>
                <Badge 
                  className={`${project.status === 'In Progress' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} border-0`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="text-xs border-border/50 hover:border-primary/50 transition-smooth"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-muted hover:bg-primary/10 hover:text-primary transition-smooth text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {project.githubUrl && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-border hover:border-primary/50 hover:bg-primary/5 transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                
                <Button 
                  size="sm" 
                  className={`flex-1 ${project.color === 'primary' ? 'gradient-primary' : 'gradient-accent'} text-white border-0 hover:shadow-glow transition-smooth`}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 gradient-hero border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects that push the boundaries of AI and technology.
            </p>
            <Button className="gradient-primary text-white border-0 hover:shadow-glow transition-smooth">
              <Mail className="mr-2" size={20} />
              Let's Connect
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;