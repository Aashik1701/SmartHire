import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
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

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                  location.pathname === item.path ? 'bg-gray-100' : ''
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;