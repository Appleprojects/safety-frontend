import React from 'react';
import { Shield, HardHat, Construction, AlertTriangle, CheckCircle2, Bell } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <HardHat size={40} />,
      title: "PPE Detection",
      description: "Advanced AI-powered detection of personal protective equipment including helmets and safety vests."
    },
    {
      icon: <Shield size={40} />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of safety compliance with instant alerts for violations."
    },
    {
      icon: <Construction size={40} />,
      title: "Industry Standards",
      description: "Adherence to international safety standards and regulations."
    },
    {
      icon: <AlertTriangle size={40} />,
      title: "Incident Prevention",
      description: "Proactive safety measures to prevent workplace accidents and injuries."
    }
  ];

  const sections = [
    {
      title: "Advanced Safety Detection",
      description: "Our AI-powered system uses state-of-the-art computer vision to detect safety equipment and violations in real-time, ensuring maximum workplace safety.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <CheckCircle2 size={40} className="text-green-600" />
    },
    {
      title: "Instant Alert System",
      description: "Get immediate notifications when safety violations are detected, allowing quick response to potential hazards and maintaining a secure work environment.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <Bell size={40} className="text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlend: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industrial Safety Monitoring
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Protecting workers with advanced AI-powered safety detection
            </p>
            <a 
              href="https://safety-frontend.vercel.app/ai-detect" 
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition duration-300"
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Safety Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition duration-300">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zig-zag Sections */}
      {sections.map((section, index) => (
        <div key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="mb-4">{section.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600 text-lg">{section.description}</p>
                <a 
                  href="/industry" 
                  className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </a>
              </div>
              <div className="flex-1">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Statistics Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">99%</div>
              <div className="text-xl">Detection Accuracy</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl">Monitoring</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;