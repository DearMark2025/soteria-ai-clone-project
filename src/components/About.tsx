import { Award, Users, Target, Globe, TrendingUp, BarChart3, Shield } from 'lucide-react';

const About = () => {
  const impactStats = [
    {
      icon: TrendingUp,
      title: "Total Projects Delivered",
      value: "₦500M+",
      change: "+12% from last month",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Active Clients",
      value: "45,234",
      change: "+8% from last month", 
      color: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Success Rate",
      value: "98.5%",
      change: "+2% from last month",
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Global Reach",
      value: "8,742",
      change: "+15% from last month",
      color: "text-indigo-400"
    }
  ];

  const testimonials = [
    {
      name: "Adebayo Olumide",
      role: "Software Engineer",
      location: "Lagos",
      avatar: "AO",
      rating: 5,
      quote: "Soteria AI completely changed my business. I went from struggling with manual processes to owning automated systems. The AI solutions are absolutely game-changing!"
    },
    {
      name: "Chioma Nwachukwu", 
      role: "Business Owner",
      location: "Abuja",
      avatar: "CN",
      rating: 5,
      quote: "As an entrepreneur, this platform has revolutionized how I manage operations. The security and transparency give me complete peace of mind."
    },
    {
      name: "Emeka Okafor",
      role: "Medical Doctor", 
      location: "Port Harcourt",
      avatar: "EO",
      rating: 5,
      quote: "The mobile-first design makes everything so easy. I can manage my practice and track progress anywhere, anytime."
    },
    {
      name: "Fatima Ibrahim",
      role: "Civil Engineer",
      location: "Kaduna", 
      avatar: "FI",
      rating: 5,
      quote: "I saved ₦3.2 million over 9 months and streamlined all my project management processes completely."
    },
    {
      name: "Olumide Adegoke",
      role: "Entrepreneur",
      location: "Ibadan",
      avatar: "OA", 
      rating: 5,
      quote: "After 6 months of consistent use, I've automated 80% of my business operations and increased efficiency dramatically."
    },
    {
      name: "Kemi Adebayo",
      role: "Teacher",
      location: "Abeokuta",
      avatar: "KA",
      rating: 5,
      quote: "The discipline of working with Soteria AI has transformed how I manage my educational technology needs."
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Live Impact Dashboard */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live Impact Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time data showing the positive impact Soteria AI is making across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-green-400 text-sm">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Recent Success Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Recent Success Stories</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-300 italic mb-2">
                    "Thanks to Soteria AI, I was able to automate my entire customer service system. The AI chatbot handles 90% of inquiries automatically!"
                  </p>
                  <p className="text-green-400 text-sm">- Adebayo O., Lagos</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-300 italic mb-2">
                    "As a business owner, Soteria AI has streamlined my operations completely. Revenue increased by 150% in just 6 months."
                  </p>
                  <p className="text-green-400 text-sm">- Mrs. Chioma N., Abuja</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Geographic Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lagos</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '120px'}}></div>
                    <span className="text-green-400 font-semibold">32,456 users</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Abuja</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '80px'}}></div>
                    <span className="text-green-400 font-semibold">18,234 users</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Port Harcourt</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '60px'}}></div>
                    <span className="text-green-400 font-semibold">12,890 users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real stories from Nigerians who have transformed their business with Soteria AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-green-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Leading Organizations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Impact Certified</h3>
              <p className="text-gray-400 text-sm">Verified impact on business transformation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">ISO Compliant</h3>
              <p className="text-gray-400 text-sm">International quality standards</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Community Verified</h3>
              <p className="text-gray-400 text-sm">Trusted by thousands of businesses</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Technology Excellence Award</h3>
              <p className="text-gray-400 text-sm">Recognized for innovation leadership</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Admin Panel Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
