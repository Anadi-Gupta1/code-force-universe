
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, Save, Database } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  github: string;
  skills: string;
  experience: string;
  interests: string[];
  message: string;
}

const GoogleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    github: '',
    skills: '',
    experience: 'beginner',
    interests: [],
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<FormData[]>([]);
  const [showData, setShowData] = useState(false);
  
  // Load existing submissions from localStorage (would be replaced by database call)
  useEffect(() => {
    const storedData = localStorage.getItem('codeForceUserData');
    if (storedData) {
      try {
        setSubmissions(JSON.parse(storedData));
      } catch (e) {
        console.error("Error parsing stored data:", e);
      }
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For now, store in localStorage (this would be replaced with a database call)
    // In a real implementation, this would send data to Supabase
    setTimeout(() => {
      const updatedSubmissions = [...submissions, formData];
      setSubmissions(updatedSubmissions);
      localStorage.setItem('codeForceUserData', JSON.stringify(updatedSubmissions));
      
      toast({
        title: "Sign Up Successful!",
        description: "Your account has been created. You can now log in.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        github: '',
        skills: '',
        experience: 'beginner',
        interests: [],
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-codeforce-dark to-codeforce-black">
        <div className="max-w-4xl mx-auto mb-8">
          <Link to="/" className="inline-flex items-center text-codeforce-blue hover:text-codeforce-blue/80 mb-6 group transition-all">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-block p-1.5 rounded-xl bg-gradient-to-r from-codeforce-blue to-purple-500 mb-4">
              <div className="bg-codeforce-dark px-6 py-2 rounded-lg">
                <h3 className="text-sm font-medium uppercase tracking-wider text-codeforce-blue">Sign Up Form</h3>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 glow-text">Create Your Code Force Account</h1>
            <p className="text-codeforce-gray max-w-2xl mx-auto">
              Sign up to join our thriving developer community. Your information will be stored in our database.
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-lg border border-codeforce-blue/20 rounded-xl p-6 md:p-8 shadow-glow">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-codeforce-blue/10">
              <h2 className="text-xl font-semibold text-white">Developer Information</h2>
              <button 
                onClick={() => setShowData(!showData)} 
                className="text-xs bg-codeforce-dark hover:bg-codeforce-blue/20 text-codeforce-blue px-3 py-1.5 rounded-md transition-all flex items-center"
              >
                <Database className="mr-1.5 h-3.5 w-3.5" />
                {showData ? 'Hide Data' : 'View Stored Data'}
              </button>
            </div>
            
            {showData ? (
              <div className="animate-fade-in">
                <h3 className="text-lg font-medium text-white mb-4">Registered Users ({submissions.length})</h3>
                {submissions.length === 0 ? (
                  <p className="text-codeforce-gray italic">No users registered yet. Be the first to sign up!</p>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                    {submissions.map((submission, index) => (
                      <div key={index} className="bg-codeforce-dark/50 rounded-lg p-4 border border-codeforce-blue/10">
                        <div className="flex justify-between">
                          <h4 className="font-medium text-codeforce-blue">{submission.name}</h4>
                          <span className="text-xs bg-codeforce-blue/10 text-codeforce-blue px-2 py-0.5 rounded">
                            {submission.experience}
                          </span>
                        </div>
                        <p className="text-sm text-codeforce-gray mt-1">{submission.email}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {submission.interests.map((interest, i) => (
                            <span key={i} className="text-xs bg-codeforce-dark px-2 py-0.5 rounded-full text-codeforce-light">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <button 
                  onClick={() => setShowData(false)}
                  className="mt-6 w-full py-2 bg-codeforce-dark hover:bg-codeforce-dark/80 text-white rounded-md transition-colors"
                >
                  Return to Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-codeforce-light">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-codeforce-light">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-codeforce-light">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="github" className="block text-sm font-medium text-codeforce-light">GitHub Profile</label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all"
                    placeholder="https://github.com/username"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="skills" className="block text-sm font-medium text-codeforce-light">Skills & Technologies*</label>
                  <textarea
                    id="skills"
                    name="skills"
                    required
                    value={formData.skills}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all resize-none"
                    placeholder="JavaScript, React, Node.js, Python, etc."
                  ></textarea>
                </div>
                
                <div className="space-y-3 md:col-span-2">
                  <label className="block text-sm font-medium text-codeforce-light">Experience Level*</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['beginner', 'intermediate', 'advanced'].map((level) => (
                      <label 
                        key={level}
                        className={`
                          relative flex items-center justify-center p-3 rounded-md border cursor-pointer transition-all
                          ${formData.experience === level 
                            ? 'border-codeforce-blue bg-codeforce-blue/10 text-white' 
                            : 'border-codeforce-blue/20 bg-codeforce-dark/30 text-codeforce-gray hover:bg-codeforce-dark/50'}
                        `}
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={level}
                          checked={formData.experience === level}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="capitalize">{level}</span>
                        {formData.experience === level && (
                          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-codeforce-blue"></span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 md:col-span-2">
                  <label className="block text-sm font-medium text-codeforce-light">Areas of Interest</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Web Development', 'Mobile Apps', 'Machine Learning', 'DevOps', 'Cloud Computing', 'Blockchain'].map((interest) => (
                      <label 
                        key={interest}
                        className={`
                          relative flex items-center p-3 rounded-md border cursor-pointer transition-all
                          ${formData.interests.includes(interest) 
                            ? 'border-codeforce-blue bg-codeforce-blue/10 text-white' 
                            : 'border-codeforce-blue/20 bg-codeforce-dark/30 text-codeforce-gray hover:bg-codeforce-dark/50'}
                        `}
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <span>{interest}</span>
                        {formData.interests.includes(interest) && (
                          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-codeforce-blue"></span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-codeforce-light">Why do you want to join Code Force?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all resize-none"
                    placeholder="Tell us why you'd like to be part of our community..."
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300
                      ${isSubmitting 
                        ? 'bg-codeforce-blue/50 cursor-not-allowed' 
                        : 'bg-codeforce-blue hover:bg-codeforce-blue/80 shadow-glow'} 
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-5 w-5" />
                        Create Account
                      </>
                    )}
                  </button>
                  
                  <p className="mt-4 text-center text-sm text-codeforce-gray">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-codeforce-blue hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-codeforce-blue hover:underline">Privacy Policy</a>
                  </p>
                  
                  <p className="mt-6 text-center text-sm text-codeforce-gray">
                    Already have an account?{' '}
                    <Link to="/login" className="text-codeforce-blue hover:underline">
                      Log in here
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-codeforce-gray text-sm">
              Need help? <a href="#" className="text-codeforce-blue hover:underline">Contact support</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GoogleForm;
