
import { Brain, Globe, Monitor, Smartphone, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Applications",
      description: "Cutting-edge artificial intelligence solutions tailored to your business needs, including machine learning models and intelligent automation systems.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices for optimal performance.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Progressive Web Apps"]
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions designed to streamline your business processes and enhance productivity across all platforms.",
      features: ["Desktop Applications", "Cloud Solutions", "API Development", "System Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for Android and iOS, delivering exceptional user experiences.",
      features: ["Native iOS/Android", "Cross-platform", "UI/UX Design", "App Store Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Shield className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6">Let's discuss how our AI-powered solutions can help you achieve your goals</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
