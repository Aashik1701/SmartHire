import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Layout components
import Navbar from './src/components/layout/Navbar';
import Footer from './src/components/layout/Footer';
import Sidebar from './src/components/layout/Sidebar';

// Pages
import Dashboard from './src/pages/Dashboard';
import ResumeBuilder from './src/pages/ResumeBuilder';
import JobTracker from './src/pages/JobTracker';
import InterviewPrep from './src/pages/InterviewPrep';
import JobTrends from './src/pages/JobTrends';
import Networking from './src/pages/Networking';
import Community from './src/pages/Community';
import Mentorship from './src/pages/Mentorship';
import Login from './src/pages/auth/Login';
import Register from './src/pages/auth/Register';
import React from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        
        <div className="flex flex-1">
          {isAuthenticated && <Sidebar />}
          
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/job-tracker" element={<JobTracker />} />
              <Route path="/interview-prep" element={<InterviewPrep />} />
              <Route path="/job-trends" element={<JobTrends />} />
              <Route path="/networking" element={<Networking />} />
              <Route path="/community" element={<Community />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            </Routes>
          </main>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;