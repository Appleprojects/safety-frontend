import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <HardHat size={32} />
              <span className="font-bold text-xl">SafetyMonitor</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-800">Home</Link>
              <Link to="/industry" className="px-3 py-2 rounded-md hover:bg-blue-800">Industry</Link>
              <Link to="/about" className="px-3 py-2 rounded-md hover:bg-blue-800">About Us</Link>
              <Link to="/ai-detect" className="px-3 py-2 rounded-md hover:bg-blue-800">AI Detect</Link>
              <Link to="/upcoming" className="px-3 py-2 rounded-md hover:bg-blue-800">Upcoming</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-800">Home</Link>
              <Link to="/industry" className="block px-3 py-2 rounded-md hover:bg-blue-800">Industry</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-blue-800">About Us</Link>
              <Link to="/ai-detect" className="block px-3 py-2 rounded-md hover:bg-blue-800">AI Detect</Link>
              <Link to="/upcoming" className="block px-3 py-2 rounded-md hover:bg-blue-800">Upcoming</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;