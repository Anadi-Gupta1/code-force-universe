
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import Button from '../ui/Button';
import { Calendar, MapPin, Users } from 'lucide-react';

// Sample event data
const events = [
  {
    id: 1,
    title: "Web3 Development Hackathon",
    description: "Join our 48-hour hackathon focused on building decentralized applications using blockchain technology.",
    date: "June 15-17, 2025",
    location: "Online (Discord)",
    image: "/placeholder.svg",
    attendees: 120,
    link: "#"
  },
  {
    id: 2,
    title: "Frontend Masters Workshop",
    description: "Learn advanced React patterns and performance optimization techniques from industry experts.",
    date: "July 8, 2025",
    location: "San Francisco, CA",
    image: "/placeholder.svg",
    attendees: 50,
    link: "#"
  },
  {
    id: 3,
    title: "Open Source Contribution Day",
    description: "Collaborate with maintainers to make your first or hundredth contribution to open source projects.",
    date: "August 12, 2025",
    location: "Online (Zoom)",
    image: "/placeholder.svg",
    attendees: 200,
    link: "#"
  },
  {
    id: 4,
    title: "AI & Machine Learning Workshop",
    description: "Dive deep into practical applications of ML models and how to integrate them in your projects.",
    date: "September 5, 2025",
    location: "New York, NY",
    image: "/placeholder.svg",
    attendees: 80,
    link: "#"
  }
];

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-codeforce-dark/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="What's happening" 
          title="Upcoming Events" 
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="w-full h-48 mb-4 overflow-hidden rounded-md bg-secondary relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover opacity-70" 
                  />
                  <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Users size={12} className="mr-1" />
                    {event.attendees}+ attendees
                  </div>
                </div>
                <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <div className="flex items-center text-muted-foreground">
                  <Calendar size={16} className="mr-2 text-codeforce-blue" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2 text-codeforce-blue" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  asLink 
                  href={event.link}
                >
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="secondary">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
