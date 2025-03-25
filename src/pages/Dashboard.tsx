import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    applicationsSubmitted: 0,
    interviewsScheduled: 0,
    jobsTracked: 0,
    resumeViews: 0
  });

  // Simulate fetching dashboard data
  useEffect(() => {
    // This would be an API call in a real application
    setTimeout(() => {
      setStats({
        applicationsSubmitted: 12,
        interviewsScheduled: 3,
        jobsTracked: 18,
        resumeViews: 45
      });
    }, 1000);
  }, []);

  const features = [
    {
      title: 'AI Resume Builder',
      description: 'Create an impressive resume with AI-powered suggestions',
      icon: '📝',
      link: '/resume-builder'
    },
    {
      title: 'Job Tracker',
      description: 'Keep track of all your job applications in one place',
      icon: '🔍',
      link: '/job-tracker'
    },
    {
      title: 'Interview Preparation',
      description: 'Practice with our AI chatbot and question bank',
      icon: '💬',
      link: '/interview-prep'
    },
    {
      title: 'Job Trends',
      description: 'Stay updated with current job market trends',
      icon: '📈',
      link: '/job-trends'
    },
    {
      title: 'Networking',
      description: 'Connect with professionals in your industry',
      icon: '🔗',
      link: '/networking'
    },
    {
      title: 'Community Forums',
      description: 'Discuss and share experiences with other job seekers',
      icon: '👥',
      link: '/community'
    },
    {
      title: 'Find a Mentor',
      description: 'Get guidance from experienced professionals',
      icon: '🧠',
      link: '/mentorship'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Applications Submitted</h3>
          <p className="text-3xl font-bold text-gray-800">{stats.applicationsSubmitted}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Interviews Scheduled</h3>
          <p className="text-3xl font-bold text-gray-800">{stats.interviewsScheduled}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Jobs Tracked</h3>
          <p className="text-3xl font-bold text-gray-800">{stats.jobsTracked}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Resume Views</h3>
          <p className="text-3xl font-bold text-gray-800">{stats.resumeViews}</p>
        </div>
      </div>
      
      {/* Quick Access */}
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Quick Access</h2>
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Link 
            key={index} 
            to={feature.link} 
            className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="mb-3 text-3xl">{feature.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>
      
      {/* Upcoming Interviews */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Upcoming Interviews</h2>
        {stats.interviewsScheduled > 0 ? (
          <div className="divide-y">
            <div className="flex items-center justify-between py-3">
              <div>
                <h3 className="font-medium">Frontend Developer Interview</h3>
                <p className="text-gray-500">TechCorp Inc.</p>
              </div>
              <div className="text-right">
                <p className="font-medium">March 28, 2025</p>
                <p className="text-gray-500">10:00 AM</p>
              </div>
            </div>
            {/* More interviews would be listed here */}
          </div>
        ) : (
          <p className="text-gray-600">No upcoming interviews scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;