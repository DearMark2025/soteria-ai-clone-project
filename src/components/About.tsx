
import { Award, Users, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Soteria AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI solutions and comprehensive digital services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Soteria AI Technologies Limited is an international technology company registered in Nigeria, 
              specializing in cutting-edge artificial intelligence applications, web development, software solutions, 
              and mobile app development for both Android and iOS platforms.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to empower businesses and organizations with innovative technology solutions 
              that drive growth, efficiency, and digital transformation in today's rapidly evolving digital landscape.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Quality & Excellence</h4>
                <p className="text-gray-600 text-sm">Committed to delivering world-class solutions</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Registration</h4>
                  <p className="text-gray-600">CAC Registration Number: RC 8363264</p>
                  <p className="text-gray-600">Registered in Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Office Location</h4>
                  <p className="text-gray-600">Dominion Aviation College</p>
                  <p className="text-gray-600">37 Oyinlola Street, Off Bolumole</p>
                  <p className="text-gray-600">Ring Road, Ibadan, Oyo State, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Focus Areas</h4>
                  <p className="text-gray-600">AI Applications, Web Development, Software Solutions, Mobile Apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
