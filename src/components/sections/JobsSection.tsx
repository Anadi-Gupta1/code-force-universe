
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';
import { Briefcase, Building, Map, Clock, DollarSign } from 'lucide-react';

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "Looking for an experienced frontend developer with strong React skills to lead our web applications team.",
    tags: ["React", "TypeScript", "Next.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Data Systems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $160k",
    description: "Join our backend team to build scalable APIs and microservices for our growing platform.",
    tags: ["Node.js", "Python", "PostgreSQL"],
    link: "#"
  },
  {
    id: 3,
    title: "DevOps Intern",
    company: "Cloud Solutions",
    location: "Remote",
    type: "Internship",
    salary: "$30/hr",
    description: "Great opportunity for students interested in cloud technologies and CI/CD pipelines.",
    tags: ["AWS", "Docker", "GitHub Actions"],
    link: "#"
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Innovate Mobile",
    location: "San Francisco, CA",
    type: "Contract",
    salary: "$80-100/hr",
    description: "6-month contract to help build our new mobile experience using React Native.",
    tags: ["React Native", "iOS", "Android"],
    link: "#"
  }
];

const JobsSection: React.FC = () => {
  return (
    <section id="jobs" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Career growth" 
          title="Job Opportunities" 
          alignment="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <Building size={16} className="mr-1" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary">
                    <Briefcase className="h-6 w-6 text-codeforce-blue" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4">{job.description}</CardDescription>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Map size={14} className="mr-2 text-codeforce-blue" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock size={14} className="mr-2 text-codeforce-blue" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground col-span-2">
                    <DollarSign size={14} className="mr-2 text-codeforce-blue" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-codeforce-blue font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  asLink 
                  href={job.link}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-secondary to-secondary/50 rounded-xl p-8 mt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2">Are you hiring?</h3>
              <p className="text-muted-foreground max-w-md">
                Post your job opportunities to our community of talented developers.
              </p>
            </div>
            <Button>Post a Job</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
