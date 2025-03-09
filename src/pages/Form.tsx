
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    skills: '',
    experience: 'beginner',
    interests: [] as string[],
    hearAbout: '',
    agreement: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission to database
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Clear form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        skills: '',
        experience: 'beginner',
        interests: [],
        hearAbout: '',
        agreement: false
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-3">Join Code Force Community</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill out this form to join our thriving developer community and get access to events, job opportunities, and more!
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="glass-card p-8 rounded-xl text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-codeforce-blue/10 mb-6">
                <CheckCircle2 className="h-8 w-8 text-codeforce-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for joining the Code Force community. We've received your information and will be in touch soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asLink href="/">Return to Home</Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>Submit Another Response</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-xl animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-foreground mb-1">GitHub Profile</label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourusername"
                    className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-foreground mb-1">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourusername"
                    className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="skills" className="block text-sm font-medium text-foreground mb-1">Skills & Technologies*</label>
                <textarea
                  id="skills"
                  name="skills"
                  required
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., JavaScript, React, Node.js, Python, etc."
                  rows={3}
                  className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">Experience Level*</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center p-3 border border-border rounded-md cursor-pointer hover:bg-secondary/50 transition-colors">
                    <input
                      type="radio"
                      name="experience"
                      value="beginner"
                      checked={formData.experience === 'beginner'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Beginner (0-2 years)</span>
                  </label>
                  
                  <label className="flex items-center p-3 border border-border rounded-md cursor-pointer hover:bg-secondary/50 transition-colors">
                    <input
                      type="radio"
                      name="experience"
                      value="intermediate"
                      checked={formData.experience === 'intermediate'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Intermediate (3-5 years)</span>
                  </label>
                  
                  <label className="flex items-center p-3 border border-border rounded-md cursor-pointer hover:bg-secondary/50 transition-colors">
                    <input
                      type="radio"
                      name="experience"
                      value="advanced"
                      checked={formData.experience === 'advanced'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Advanced (5+ years)</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">Areas of Interest*</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {['Web Development', 'Mobile App Development', 'Data Science', 'Machine Learning', 'DevOps', 'Blockchain', 'UI/UX Design', 'Game Development', 'Cloud Computing'].map((interest) => (
                    <label key={interest} className="flex items-center p-3 border border-border rounded-md cursor-pointer hover:bg-secondary/50 transition-colors">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleInterestChange}
                        className="mr-2"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="hearAbout" className="block text-sm font-medium text-foreground mb-1">How did you hear about us?</label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border bg-input/30 rounded-md focus:outline-none focus:ring-1 focus:ring-codeforce-blue"
                >
                  <option value="">Select an option</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Colleague</option>
                  <option value="search">Search Engine</option>
                  <option value="event">Tech Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to receive communications from Code Force. I understand that I can unsubscribe at any time. I have read and agree to the <a href="#" className="text-codeforce-blue hover:underline">Privacy Policy</a> and <a href="#" className="text-codeforce-blue hover:underline">Terms of Service</a>.
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  isLoading={isSubmitting}
                  className="min-w-[200px]"
                >
                  Submit Application
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Already a member? <Link to="/login" className="text-codeforce-blue hover:underline">Sign in</Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Form;
