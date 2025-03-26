import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
// Import Framer Motion for enhanced animations
// import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    stats: false,
    testimonials: false,
    pricing: false,
  });
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    stats: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
  };

  // Intersection observer for animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.2 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Features data
  const features = [
    {
      title: "AI-Powered Resume Analysis",
      description: "Our advanced AI parses your resume to highlight strengths and suggest improvements, ensuring you stand out to recruiters.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Smart Job Matching",
      description: "Get matched with jobs that align with your skills and experience. Our AI recommends positions where you're most likely to succeed.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Interview Preparation",
      description: "Practice with our AI interview coach and get real-time feedback on responses, helping you ace your next interview.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Application Tracking",
      description: "Keep track of all your applications in one place. Never miss an update or deadline with our comprehensive tracking system.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Career Insights",
      description: "Get valuable insights about salary trends, in-demand skills, and career growth opportunities in your industry.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Recruiter Dashboard",
      description: "For recruiters, our platform offers powerful tools to find the best candidates quickly and efficiently with AI assistance.",
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Engineer",
      company: "TechGlobal",
      quote: "SmartHire completely transformed my job search. The AI resume analysis helped me improve my resume, and I landed interviews at top tech companies within weeks.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "Innovate Inc.",
      quote: "As a recruiter, SmartHire has cut our hiring time in half. The candidate matching algorithm consistently delivers top talent that fits our needs perfectly.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist",
      company: "DataFlow",
      quote: "The interview preparation feature gave me the confidence I needed. I practiced with the AI coach and received an offer for my dream job the following week.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      company: "DesignHub",
      quote: "I was skeptical about AI-powered job matching, but SmartHire recommended positions that perfectly aligned with my skills and career goals. I'm now at my ideal company.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Pricing data
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic tools for job seekers just getting started",
      features: [
        "AI Resume Analysis (Basic)",
        "Job Matching (Limited)",
        "5 Job Applications / Month",
        "Basic Application Tracking"
      ],
      btnText: "Get Started",
      btnVariant: "secondary"
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Advanced features for serious job seekers",
      features: [
        "AI Resume Analysis (Advanced)",
        "Unlimited Job Matching",
        "Unlimited Applications",
        "Interview Preparation",
        "Career Insights",
        "Priority Support"
      ],
      btnText: "Start Free Trial",
      btnVariant: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "Full suite of tools for recruiters and companies",
      features: [
        "All Pro Features",
        "Recruiter Dashboard",
        "AI Candidate Shortlisting",
        "Interview Scheduling",
        "Analytics Dashboard",
        "API Access",
        "Dedicated Support"
      ],
      btnText: "Contact Sales",
      btnVariant: "tertiary"
    }
  ];

  // Stats data
  const stats = [
    { value: "3.5M+", label: "Job Seekers" },
    { value: "85%", label: "Higher Interview Rate" },
    { value: "25K+", label: "Partner Companies" },
    { value: "45%", label: "Faster Hiring Time" }
  ];

  // Animation classes for fade in - update to use container-fluid instead of max-w limitations
  const fadeInClasses = "transition-all duration-1000 ease-in-out";
  const hiddenClasses = "opacity-0 translate-y-10";
  const visibleClasses = "opacity-100 translate-y-0";

  // Add container classes for full-width design
  const containerFluid = "w-full"; // Removed px-4
  const containerContent = "mx-auto w-full max-w-screen-2xl px-4"; // Keep padding only in content container

  // Gradient animation for hero section
  const gradientAnimation = {
    background: 'linear-gradient(-45deg, #3b82f6, #2563eb, #1d4ed8, #60a5fa)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
  };

  return (
    // Add negative margin to counteract any parent padding
    <div className="w-screen overflow-hidden landing-page -ml-[calc(100vw-100%)]" style={{ width: "100vw", maxWidth: "100vw" }}>
      {/* Hero Section - full-width */}
      <section 
        ref={sectionRefs.hero}
        className="relative flex items-center justify-center w-full min-h-screen overflow-hidden text-white"
        style={gradientAnimation}
      >
        <div 
          className={`${containerFluid} py-24 md:py-32 text-center relative z-10 ${fadeInClasses} ${isVisible.hero ? visibleClasses : hiddenClasses}`}
        >
          <div className={containerContent}>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              The Future of Hiring is <span className="text-transparent bg-white bg-clip-text">Here</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-10 text-xl text-blue-100 md:text-2xl">
              SmartHire revolutionizes recruitment by leveraging AI to bridge the gap between job seekers and recruiters—making the process faster, smarter, and fairer.
            </p>
            <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
              <Button 
                size="lg"
                variant="secondary"
                className="font-semibold text-lg min-w-[200px]"
              >
                For Job Seekers
              </Button>
              <Button 
                size="lg"
                variant="tertiary"
                className="font-semibold text-lg min-w-[200px] border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                For Recruiters
              </Button>
            </div>
            
            <div className="mt-12 sm:mt-16">
              <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
                {/* Dashboard screenshot/mockup */}
                <div className="p-2 bg-gray-800 rounded-t-lg">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://placehold.co/1200x700/2563eb/FFFFFF/png?text=SmartHire+Dashboard+Preview" 
                    alt="SmartHire Dashboard Preview" 
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-700 to-transparent opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Particles Background - keep full-width */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full bg-opacity-20"
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Features Section - full-width with centered content */}
    <section 
      ref={sectionRefs.features}
      className="w-full py-20 bg-white"
    >
      <div className={containerFluid}>
        <div className={containerContent}>
        <div 
          className={`text-center mb-16 ${fadeInClasses} ${isVisible.features ? visibleClasses : hiddenClasses}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Revolutionizing the Hiring Process
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Our AI-powered platform offers innovative solutions for both job seekers and recruiters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div 
            key={index} 
            className={`${fadeInClasses} ${isVisible.features ? visibleClasses : hiddenClasses}`}
            style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 mb-4 rounded-full bg-primary-100">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>

    {/* Stats Section - full-width */}
    <section 
      ref={sectionRefs.stats}
      className="w-full py-16 text-white bg-primary-700"
    >
      <div className={containerFluid}>
        <div className={containerContent}>
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
            key={index} 
            className={`${fadeInClasses} ${isVisible.stats ? visibleClasses : hiddenClasses}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            >
            <div className="mb-2 text-4xl font-bold md:text-5xl">{stat.value}</div>
            <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>

    {/* How It Works Section - full-width */}
    <section className="w-full py-20 bg-gray-50">
      <div className={containerFluid}>
        <div className={containerContent}>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            How SmartHire Works
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Our platform connects job seekers and recruiters using AI-powered tools
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute hidden w-1 h-full transform -translate-x-1/2 md:block left-1/2 bg-primary-200"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {/* Step 1 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className="md:col-start-1 md:pr-8 md:text-right">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Create Your Profile & Upload Resume
                </h3>
                <p className="text-gray-600">
                Sign up and create your profile. Upload your resume to get started with our AI-powered analysis.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start md:col-start-2">
              <div className="flex items-center justify-center w-12 h-12 font-bold text-white border-4 rounded-full border-primary-200 bg-primary-600">1</div>
            </div>
            </div>

            {/* Step 2 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className="flex items-center justify-end md:col-start-1">
              <div className="flex items-center justify-center w-12 h-12 font-bold text-white border-4 rounded-full border-primary-200 bg-primary-600">2</div>
            </div>
            <div className="md:col-start-2 md:pl-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Get AI-Powered Insights & Recommendations
                </h3>
                <p className="text-gray-600">
                Our AI analyzes your resume and provides personalized job recommendations and improvement suggestions.
                </p>
              </div>
            </div>
            </div>

            {/* Step 3 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className="md:col-start-1 md:pr-8 md:text-right">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Apply to Jobs & Track Applications
                </h3>
                <p className="text-gray-600">
                Apply to recommended jobs with one click and keep track of all your applications in real-time.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start md:col-start-2">
              <div className="flex items-center justify-center w-12 h-12 font-bold text-white border-4 rounded-full border-primary-200 bg-primary-600">3</div>
            </div>
            </div>

            {/* Step 4 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
            <div className="flex items-center justify-end md:col-start-1">
              <div className="flex items-center justify-center w-12 h-12 font-bold text-white border-4 rounded-full border-primary-200 bg-primary-600">4</div>
            </div>
            <div className="md:col-start-2 md:pl-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Prepare for Interviews & Get Hired
                </h3>
                <p className="text-gray-600">
                Practice with our AI interview coach, schedule interviews, and land your dream job.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

      {/* Testimonials Section - Updated for a more immersive design */}
      <section 
        ref={sectionRefs.testimonials}
        className="relative w-full py-20 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900"
      >
        {/* Add background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className={containerFluid}>
          <div className={containerContent}>
            <div 
              className={`text-center mb-16 ${fadeInClasses} ${isVisible.testimonials ? visibleClasses : hiddenClasses}`}
            >
              <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                What Our Users Say
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-blue-100">
                Hear from job seekers and recruiters who have transformed their hiring process
              </p>
            </div>

            <div 
              className={`relative mx-auto ${fadeInClasses} ${isVisible.testimonials ? visibleClasses : hiddenClasses}`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Implement a more modern testimonial carousel */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-700 ease-out" 
                     style={{ transform: `translateX(-${activeTestimonial * 100}%)`, width: `${testimonials.length * 100}%` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                      <div className="overflow-hidden bg-white shadow-2xl rounded-2xl">
                        <div className="md:flex">
                          {/* Testimonial image - full height on larger screens */}
                          <div className="md:w-1/3 bg-primary-100">
                            <div className="relative h-64 overflow-hidden md:h-full">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name}
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-800/30 to-transparent"></div>
                            </div>
                          </div>
                          
                          {/* Testimonial content */}
                          <div className="flex flex-col justify-center p-8 md:w-2/3 md:p-12">
                            <svg className="w-12 h-12 mb-6 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391C14.017 10.677 16.318 8 19.326 8V21h-5.309zM4.692 21V8h5.308v13H4.692zM0 4.353C0 1.948 1.949 0 4.354 0s4.354 1.948 4.354 4.353-1.949 4.353-4.354 4.353S0 6.759 0 4.353zm14.017 0C14.017 1.948 15.966 0 18.371 0s4.354 1.948 4.354 4.353-1.949 4.353-4.354 4.353-4.354-1.948-4.354-4.353z" />
                            </svg>
                            
                            <blockquote className="mb-6 text-xl font-medium leading-relaxed text-gray-800 md:text-2xl">
                              "{testimonial.quote}"
                            </blockquote>
                            
                            <div className="mt-auto">
                              <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                              <div className="font-medium text-primary-600">{testimonial.role}</div>
                              <div className="text-gray-600">{testimonial.company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation arrows */}
                <button 
                  onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="absolute z-10 flex items-center justify-center w-12 h-12 transition-colors -translate-y-1/2 rounded-full shadow-lg left-4 top-1/2 bg-white/80 text-primary-600 hover:bg-white"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                  className="absolute z-10 flex items-center justify-center w-12 h-12 transition-colors -translate-y-1/2 rounded-full shadow-lg right-4 top-1/2 bg-white/80 text-primary-600 hover:bg-white"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Dots navigation */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-3 w-14 rounded-full transition-all ${
                      activeTestimonial === index 
                        ? 'bg-white w-14' 
                        : 'bg-white/40 w-4 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - full-width */}
      <section 
        ref={sectionRefs.pricing}
        className="w-full py-20 bg-gray-50"
      >
        <div className={containerFluid}>
          <div className={containerContent}>
            <div 
              className={`text-center mb-16 ${fadeInClasses} ${isVisible.pricing ? visibleClasses : hiddenClasses}`}
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Choose the plan that works best for your needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative rounded-lg bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                    plan.popular ? 'border-2 border-primary-500' : ''
                  } ${fadeInClasses} ${isVisible.pricing ? visibleClasses : hiddenClasses}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 px-4 py-1 text-sm font-semibold text-white bg-primary-500">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="ml-2 text-gray-600">/{plan.period}</span>
                    </div>
                    <p className="mb-6 text-gray-600">{plan.description}</p>
                    
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      variant={plan.btnVariant as any}
                      fullWidth
                      className="py-3 font-medium"
                    >
                      {plan.btnText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - full-width */}
      <section className="w-full py-20 text-white bg-primary-700">
        <div className={containerFluid}>
          <div className={containerContent}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-blue-100">
              Join thousands of job seekers and recruiters who are already benefiting from SmartHire's AI-powered platform.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/register">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="font-semibold text-lg min-w-[200px]"
                >
                  Get Started for Free
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="tertiary"
                className="font-semibold text-lg min-w-[200px] border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CSS for animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        /* Add additional animation for testimonial glow effect */
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        
        /* Override any parent container padding */
        body, html {
          overflow-x: hidden;
        }
        
        .landing-page {
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          max-width: 100vw;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;