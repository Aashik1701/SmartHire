import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Resume Builder', path: '/resume-builder', icon: '📝' },
    { name: 'Job Tracker', path: '/job-tracker', icon: '🔍' },
    { name: 'Interview Prep', path: '/interview-prep', icon: '💬' },
    { name: 'Job Trends', path: '/job-trends', icon: '📈' },
    { name: 'Networking', path: '/networking', icon: '🔗' },
    { name: 'Community', path: '/community', icon: '👥' },
    { name: 'Mentorship', path: '/mentorship', icon: '🧠' },
  ];

  // Close sidebar on route change in mobile view
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // Added isOpen and onClose to dependencies
  }, [location.pathname, isOpen, onClose]);

  // Enable/disable body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:z-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-primary-600 lg:hidden">
          <span className="text-xl font-bold text-white">SmartHire</span>
          <button
            type="button"
            className="p-2 text-white rounded-md hover:bg-primary-700"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100
                    ${location.pathname === item.path ? 'bg-gray-100 text-primary-600 font-medium' : ''}
                  `}
                  onClick={() => onClose()}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;