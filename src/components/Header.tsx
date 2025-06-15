
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Soteria AI
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-900 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-900 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-900 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-blue-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
