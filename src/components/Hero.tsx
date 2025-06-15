
import { ArrowRight, Bot, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Soteria AI Technologies
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-700">Limited</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading AI solutions provider developing cutting-edge applications, websites, software, and mobile apps
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Bot className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Applications</h3>
              <p className="text-gray-600 text-center">Intelligent solutions powered by artificial intelligence</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Code className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web & Software</h3>
              <p className="text-gray-600 text-center">Custom websites and software solutions</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Smartphone className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-600 text-center">Android and iOS app development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
