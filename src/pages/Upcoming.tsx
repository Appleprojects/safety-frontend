import React from 'react';
import { Construction, Car, Camera, Phone } from 'lucide-react';

const Upcoming = () => {
  const features = [
    {
      icon: <Construction className="text-blue-600" size={40} />,
      title: "Construction Safety",
      description: "Advanced monitoring system specifically designed for construction sites, including equipment safety and zone monitoring.",
      comingSoon: "Q2 2024"
    },
    {
      icon: <Car className="text-green-600" size={40} />,
      title: "Road Safety",
      description: "AI-powered traffic monitoring and accident prevention system for improved road safety.",
      comingSoon: "Q3 2024"
    },
    {
      icon: <Camera className="text-purple-600" size={40} />,
      title: "CCTV Integration",
      description: "Seamless integration with existing CCTV systems for comprehensive safety monitoring.",
      comingSoon: "Q4 2024"
    },
    {
      icon: <Phone className="text-red-600" size={40} />,
      title: "Mobile App",
      description: "Real-time monitoring and alerts through our dedicated mobile application.",
      comingSoon: "Q1 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Upcoming Features</h1>
          <p className="text-xl">Exciting new safety solutions coming soon</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                {feature.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <span className="text-blue-600">Coming {feature.comingSoon}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Upcoming Features?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for early access and commercial inquiries
          </p>
          <a 
            href="mailto:harichselvamc@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;