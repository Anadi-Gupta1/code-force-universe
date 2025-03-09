
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';
import { Github, Star, GitFork } from 'lucide-react';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Swarajya",
    description: "Revolutionary project celebrating India's independence and cultural heritage.",
    language: "JavaScript",
    stars: 28,
    forks: 12,
    link: "https://github.com/Anadi-Gupta1/Swarajya-",
    contributors: 3
  },
  {
    id: 2,
    title: "My Crush",
    description: "Creative personal project with interactive animations and unique UI design.",
    language: "HTML/CSS",
    stars: 15,
    forks: 5,
    link: "https://github.com/Anadi-Gupta1/my-crush",
    contributors: 1
  },
  {
    id: 3,
    title: "GDG",
    description: "Google Developer Group project with developer tools and resources.",
    language: "TypeScript",
    stars: 42,
    forks: 18,
    link: "https://github.com/Anadi-Gupta1/GDG",
    contributors: 7
  },
  {
    id: 4,
    title: "Dark",
    description: "Dark-themed UI component library with modern design patterns.",
    language: "JavaScript",
    stars: 56,
    forks: 23,
    link: "https://github.com/Anadi-Gupta1/Dark",
    contributors: 5
  },
  {
    id: 5,
    title: "DevConnect",
    description: "Open-source platform for connecting developers with mentors and collaborative projects.",
    language: "JavaScript",
    stars: 123,
    forks: 44,
    link: "https://github.com/Anadi-Gupta1",
    contributors: 15
  },
  {
    id: 6,
    title: "Mobile UI Kit",
    description: "A rich collection of mobile UI components optimized for React Native applications.",
    language: "JavaScript",
    stars: 87,
    forks: 34,
    link: "https://github.com/Anadi-Gupta1",
    contributors: 8
  }
];

// Language color map
const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Java: "#B07219",
  "HTML/CSS": "#E34C26"
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-codeforce-dark/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Open source" 
          title="Community Projects" 
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: languageColors[project.language] || "#ccc" }}
                    ></div>
                    <span className="text-sm text-muted-foreground">{project.language}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="flex items-center">
                      <Star size={14} className="mr-1" />
                      <span className="text-xs">{project.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork size={14} className="mr-1" />
                      <span className="text-xs">{project.forks}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="text-sm text-muted-foreground mt-2">
                  <span>{project.contributors} contributors</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline" 
                  leftIcon={<Github size={16} />}
                  className="w-full" 
                  asLink
                  href={project.link}
                  target="_blank"
                >
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Contribute to Open Source</h3>
            <p className="text-muted-foreground">
              Join our community of contributors and help build the future of open source software. Whether you're a beginner or expert, your contributions matter.
            </p>
          </div>
          <Button 
            leftIcon={<Github size={18} />}
            asLink
            href="https://github.com/Anadi-Gupta1"
            target="_blank"
          >
            Submit Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
