import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  toggleSidebar: () => void;
}

const Navbar = ({ isAuthenticated, setIsAuthenticated, toggleSidebar }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Clear any stored tokens/user data
  };

  return (
    <nav className="shadow-md bg-primary-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {isAuthenticated && (
              <button
                type="button"
                className="p-2 text-white rounded-md bg-primary-600 lg:hidden"
                onClick={toggleSidebar}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            <Link to="/" className="flex items-center flex-shrink-0 ml-2 lg:ml-0">
              <span className="text-xl font-bold text-white">SmartHire</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-primary-700">
                  Profile
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="tertiary"
                  size="sm"
                  className="ml-4 text-white hover:bg-primary-700"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-primary-700">
                  Login
                </Link>
                <Link to="/register" className="px-3 py-2 ml-4 text-sm font-medium bg-white rounded-md text-primary-600 hover:bg-gray-100">
                  Register
                </Link>
              </>
            )}
          </div>
          
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="p-2 text-white rounded-md bg-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-600 sm:px-3 lg:hidden">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-700">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full px-3 py-2 text-base font-medium text-left text-white rounded-md hover:bg-primary-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-700">
                Login
              </Link>
              <Link to="/register" className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-700">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;