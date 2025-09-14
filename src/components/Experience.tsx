import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      role: "Fullstack Developer",
      company: "MahaData Solutions",
      location: "North Carolina, USA",
      duration: "December 2024 – April 2025",
      type: "Internship",
      description: "Working on real-time projects including rebuilding the company webpage and developing a medical test platform with AI automatic scoring capabilities.",
      responsibilities: [
        "Rebuilt company's webpage with Nest.js and Tailwind CSS",
        "Creating Medical test platform with AI automatic scoring",
        "Implementing real-time database connections",
        "Collaborating with international team members"
      ],
      technologies: ["Nest.js", "Tailwind CSS", "AI Integration", "Database Management"],
      status: "Current"
    }
  ];

  const currentWork = [
    {
      title: "Dyslexia Prediction Research",
      description: "Developing a machine learning model using Random Forest algorithm for early prediction of dyslexia",
      duration: "December 2024 - May 2025",
      type: "Research Project",
      status: "In Progress"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gaining hands-on experience in full-stack development and AI/ML research while building real-world solutions.
          </p>
        </div>

        {/* Current Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Briefcase className="text-primary" size={28} />
            Professional Experience
          </h3>

          {experience.map((exp, index) => (
            <Card key={index} className="p-8 border border-border hover:border-primary/30 transition-smooth shadow-card animate-fade-in">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left side - Company info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="mt-4">
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {exp.status}
                    </Badge>
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="lg:w-2/3">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-muted hover:bg-primary/10 hover:text-primary transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Current Research */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Building2 className="text-accent" size={28} />
            Research & Development
          </h3>

          {currentWork.map((work, index) => (
            <Card key={index} className="p-8 border border-border hover:border-accent/30 transition-smooth shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{work.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2 lg:justify-end">
                    <Calendar size={16} />
                    {work.duration}
                  </div>
                  <div className="flex gap-2 lg:justify-end">
                    <Badge variant="outline" className="border-muted-foreground/30">
                      {work.type}
                    </Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {work.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="mt-12 p-8 gradient-hero border border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Professional Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <p className="text-muted-foreground">Improved user task completion rates through UX design</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <p className="text-muted-foreground">AI/ML projects completed successfully</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <p className="text-muted-foreground">Research paper in development</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;