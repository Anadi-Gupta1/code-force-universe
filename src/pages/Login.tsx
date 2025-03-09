
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { toast } from "@/components/ui/use-toast";
import { Github, Mail, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "You have been successfully logged in.",
        duration: 5000,
      });
      navigate('/');
    }, 1500);
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
                <h3 className="text-sm font-medium uppercase tracking-wider text-codeforce-blue">Login Form</h3>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 glow-text">Code Force Login</h1>
            <p className="text-codeforce-gray max-w-2xl mx-auto">
              Sign in to your account to access all the features of our platform.
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-lg border border-codeforce-blue/20 rounded-xl p-6 md:p-8 shadow-glow">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-codeforce-blue/10">
              <h2 className="text-xl font-semibold text-white">Account Access</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-codeforce-light">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-codeforce-light">Password*</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-codeforce-dark/50 border border-codeforce-blue/20 focus:border-codeforce-blue/50 text-white rounded-md focus:ring-1 focus:ring-codeforce-blue outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-codeforce-blue focus:ring-codeforce-blue border-gray-300 rounded mr-2"
                  />
                  <span className="text-sm text-codeforce-light">Remember me</span>
                </label>
                
                <a href="#" className="text-sm text-codeforce-blue hover:text-codeforce-blue/80">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300
                  ${isLoading 
                    ? 'bg-codeforce-blue/50 cursor-not-allowed' 
                    : 'bg-codeforce-blue hover:bg-codeforce-blue/80 shadow-glow'} 
                `}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-codeforce-blue/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-black/30 text-codeforce-gray text-sm">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 px-4 border border-codeforce-blue/20 rounded-md bg-codeforce-dark/50 hover:bg-codeforce-dark transition-colors text-white"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 px-4 border border-codeforce-blue/20 rounded-md bg-codeforce-dark/50 hover:bg-codeforce-dark transition-colors text-white"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Google
                </button>
              </div>
              
              <p className="mt-6 text-center text-sm text-codeforce-gray">
                Don't have an account?{' '}
                <Link to="/google-form" className="text-codeforce-blue hover:underline">
                  Sign up for free
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
