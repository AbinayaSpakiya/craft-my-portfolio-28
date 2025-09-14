import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MCA in Computer Applications",
      institution: "Kalasalingam Academy of Research And Education",
      location: "Krishnankoil",
      duration: "July 2023 – May 2025",
      gpa: "8.25/10",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: "B.Sc. in Electronics",
      institution: "PSG College of Arts And Science",
      location: "Coimbatore",
      duration: "July 2019 – April 2022",
      gpa: "7.6/10",
      icon: <Award className="text-accent" size={24} />
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"] },
    { category: "AI/ML", items: ["Machine Learning", "NLP", "Random Forest", "Data Analysis"] },
    { category: "Frameworks", items: ["Streamlit", "Nest.js", "Tailwind CSS", "React"] },
    { category: "Tools", items: ["Tableau", "Figma", "GitHub", "VS Code", "OpenAI"] },
    { category: "Platforms", items: ["Cursor", "Windsurf", "Blackbox AI"] }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Motivated and detail-oriented MCA student with strong skills in UI/UX, Python, Java, and data analysis. 
            Experienced in building AI-powered applications and passionate about solving complex problems with innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 border border-border hover:border-primary/30 transition-smooth shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-3">{edu.location}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar size={14} />
                          {edu.duration}
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="p-6 border border-border hover:border-primary/30 transition-smooth shadow-card">
                  <h4 className="font-semibold mb-4 text-primary">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <Card className="p-8 gradient-hero border border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Currently Working On</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Developing an Early Prediction of Dyslexia system using Machine Learning and Random Forest algorithms 
              as part of my research project, while completing my Full Stack Developer internship at MahaData Solutions.
            </p>
            <div className="flex justify-center gap-3">
              <Badge className="bg-primary text-primary-foreground">Research in Progress</Badge>
              <Badge className="bg-accent text-accent-foreground">Internship Active</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;