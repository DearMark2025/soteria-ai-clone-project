
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Soteria AI Technologies Limited
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading AI solutions provider in Nigeria, specializing in artificial intelligence applications, 
              web development, software solutions, and mobile app development. Transforming businesses with 
              innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">AI Applications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@soteriaai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+234 (0) 123 456 7890</span>
              </div>
              <div className="text-sm">
                <p>Dominion Aviation College</p>
                <p>37 Oyinlola Street, Off Bolumole</p>
                <p>Ring Road, Ibadan, Oyo State</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Soteria AI Technologies Limited. All rights reserved.</p>
              <p className="mt-1">CAC Registration Number: RC 8363264 | Registered in Nigeria</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
