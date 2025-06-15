
import { Brain, Globe, Monitor, Smartphone, Shield, Zap, Clock, Target, TrendingUp } from 'lucide-react';

const Services = () => {
  const processSteps = [
    {
      number: "1",
      title: "Consultation & Planning",
      description: "Define your technology needs and choose from AI, web, or mobile solutions that fit your business goals.",
      duration: "2 days",
      icon: Target
    },
    {
      number: "2", 
      title: "Design & Architecture",
      description: "Create detailed system architecture and user experience designs with cutting-edge technology stack.",
      duration: "1 week",
      icon: Brain
    },
    {
      number: "3",
      title: "Development & Testing",
      description: "Build your solution with rigorous testing, automated deployment, and progress tracking.",
      duration: "2-8 weeks",
      icon: Code
    },
    {
      number: "4",
      title: "Launch & Integration",
      description: "Get your solution live with seamless integration, comprehensive training, and full documentation.",
      duration: "Instant",
      icon: Zap
    },
    {
      number: "5",
      title: "Support & Scaling",
      description: "Ongoing maintenance, feature updates, and scaling support to grow with your business needs.",
      duration: "Ongoing",
      icon: TrendingUp
    }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate processes and gain competitive advantages in your industry."
    },
    {
      icon: Target,
      title: "3x Development Speed",
      description: "Our proven methodologies and experienced team deliver solutions 3x faster than traditional development approaches."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance standards protecting your data and ensuring reliable operations."
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* How Soteria AI Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Soteria AI Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A simple 5-step journey to transform your business with cutting-edge technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-500 p-3 rounded-xl">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.description}</p>
                <div className="bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Start Your Journey Today →
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Soteria AI Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Soteria AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary technology solutions that put your business growth first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
                <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Standards</h3>
              <p className="text-gray-400 leading-relaxed">
                International best practices with local expertise, serving businesses across Nigeria and beyond.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile-First Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamless experience across all devices with offline capabilities for uninterrupted access.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300">
              <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Round-the-clock technical support and maintenance to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import { Code } from 'lucide-react';
