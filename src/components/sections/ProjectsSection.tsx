
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';
import { Github, Star, GitFork } from 'lucide-react';

// Sample project data
const projects = [
  {
    id: 1,
    title: "CodeForce CLI",
    description: "A command-line tool for automating developer workflows and project setup.",
    language: "TypeScript",
    stars: 342,
    forks: 56,
    link: "https://github.com/example/codeforce-cli",
    contributors: 12
  },
  {
    id: 2,
    title: "DevConnect",
    description: "Open-source platform for connecting developers with mentors and collaborative projects.",
    language: "JavaScript",
    stars: 531,
    forks: 78,
    link: "https://github.com/example/devconnect",
    contributors: 24
  },
  {
    id: 3,
    title: "AI Code Assistant",
    description: "An AI-powered code helper that provides real-time suggestions and code improvements.",
    language: "Python",
    stars: 1204,
    forks: 189,
    link: "https://github.com/example/ai-code-assistant",
    contributors: 37
  },
  {
    id: 4,
    title: "CloudDeploy",
    description: "Simplified cloud deployment tool supporting AWS, GCP, and Azure with one configuration.",
    language: "Go",
    stars: 687,
    forks: 92,
    link: "https://github.com/example/clouddeploy",
    contributors: 18
  },
  {
    id: 5,
    title: "DataViz Library",
    description: "Comprehensive data visualization library for web applications with React integration.",
    language: "TypeScript",
    stars: 438,
    forks: 62,
    link: "https://github.com/example/dataviz-lib",
    contributors: 9
  },
  {
    id: 6,
    title: "Mobile UI Kit",
    description: "A rich collection of mobile UI components optimized for React Native applications.",
    language: "JavaScript",
    stars: 873,
    forks: 146,
    link: "https://github.com/example/mobile-ui-kit",
    contributors: 31
  }
];

// Language color map
const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Java: "#B07219"
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
            <Card key={project.id} className="h-full flex flex-col">
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
          <Button leftIcon={<Github size={18} />}>Submit Your Project</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
