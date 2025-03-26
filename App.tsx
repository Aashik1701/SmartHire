import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Layout components
import Navbar from './src/components/layout/Navbar';
import Footer from './src/components/layout/Footer';
import Sidebar from './src/components/layout/Sidebar';
import Container from './src/components/layout/Container';

// Pages
import LandingPage from './src/pages/LandingPage.tsx';
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated}
          toggleSidebar={toggleSidebar}
        />
        
        <div className="flex flex-1">
          {isAuthenticated && (
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          )}
          
          <main className="flex-1 w-full">
            {/* Conditionally render Container based on route */}
            <Routes>
              <Route path="/landingpage" element={<LandingPage />} />
              {/* Wrap other routes with Container */}
              <Route path="/" element={<Container><Dashboard /></Container>} />
              <Route path="/resume-builder" element={<Container><ResumeBuilder /></Container>} />
              <Route path="/job-tracker" element={<Container><JobTracker /></Container>} />
              <Route path="/interview-prep" element={<Container><InterviewPrep /></Container>} />
              <Route path="/job-trends" element={<Container><JobTrends /></Container>} />
              <Route path="/networking" element={<Container><Networking /></Container>} />
              <Route path="/community" element={<Container><Community /></Container>} />
              <Route path="/mentorship" element={<Container><Mentorship /></Container>} />
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