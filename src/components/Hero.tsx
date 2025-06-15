
import { ArrowRight, Bot, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#10b981" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="30" r="1.5" fill="#10b981" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="70" r="1" fill="#10b981" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
              </circle>
              <line x1="20" y1="20" x2="80" y2="30" stroke="#10b981" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="80" y1="30" x2="50" y2="70" stroke="#10b981" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite" />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Central Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-green-500 p-6 rounded-2xl shadow-2xl">
            <Code className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-white">Soteria</span>{' '}
          <span className="text-green-400">AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Professional{' '}
          <span className="text-green-400 font-semibold">app, website & software development</span> company.{' '}
          Specializing in{' '}
          <span className="text-green-400 font-semibold">AI applications</span> and cutting-edge technology solutions.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">150+</div>
            <p className="text-gray-400">Apps & Websites Built</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">80+</div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">98%</div>
            <p className="text-gray-400">Project Success Rate</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Custom software development</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>AI-powered applications</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Mobile & web solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
