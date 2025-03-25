import { Link } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const Navbar = ({ isAuthenticated, setIsAuthenticated }: NavbarProps) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
    // Clear any stored tokens/user data
  };

  return (
    <nav className="text-white bg-blue-600 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <span className="text-xl font-bold">SmartHire</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-700">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 ml-4 text-sm font-medium bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-700">
                  Login
                </Link>
                <Link to="/register" className="px-3 py-2 ml-4 text-sm font-medium bg-blue-700 rounded-md hover:bg-blue-800">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;