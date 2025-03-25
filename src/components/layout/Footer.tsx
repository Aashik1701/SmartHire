// src/components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">SmartHire</h2>
            <p className="text-gray-300">Making hiring smarter for everyone</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms
            </a>
          </div>
        </div>
        
        <div className="pt-4 mt-8 text-center text-gray-300 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} SmartHire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;