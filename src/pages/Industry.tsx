import React from 'react';
import { HardHat, AlertCircle, CheckCircle2, Shield, PenTool, Users, Gauge, Award } from 'lucide-react';

const Industry = () => {
  const safetyPoints = [
    {
      icon: <HardHat className="text-blue-600" size={32} />,
      title: "Personal Protective Equipment",
      description: "Proper PPE is essential for protecting workers from physical hazards and maintaining workplace safety."
    },
    {
      icon: <AlertCircle className="text-red-600" size={32} />,
      title: "Risk Assessment",
      description: "Regular risk assessments help identify potential hazards and implement preventive measures."
    },
    {
      icon: <CheckCircle2 className="text-green-600" size={32} />,
      title: "Safety Training",
      description: "Comprehensive safety training ensures workers understand and follow safety protocols."
    },
    {
      icon: <Shield className="text-purple-600" size={32} />,
      title: "Compliance",
      description: "Adherence to safety regulations and standards is crucial for maintaining a safe work environment."
    }
  ];

  const benefits = [
    {
      icon: <PenTool className="text-blue-600" size={32} />,
      title: "Equipment Safety",
      description: "Ensure all machinery and tools meet safety standards and are properly maintained."
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      title: "Worker Well-being",
      description: "Prioritize employee health and safety through comprehensive protection measures."
    },
    {
      icon: <Gauge className="text-orange-600" size={32} />,
      title: "Performance Optimization",
      description: "Improve workplace efficiency while maintaining the highest safety standards."
    },
    {
      icon: <Award className="text-purple-600" size={32} />,
      title: "Industry Leadership",
      description: "Set the benchmark for safety excellence in your industry sector."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Industrial Safety</h1>
          <p className="text-xl">Understanding the importance of workplace safety</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Zig-zag Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Why Safety Matters</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Industrial safety is not just a regulatory requirement—it's a fundamental aspect of 
                sustainable business operations and worker well-being. Proper safety measures protect 
                workers from injuries, prevent accidents, and ensure business continuity.
              </p>
              <p className="text-gray-700 mb-4">
                Our AI-powered safety monitoring system helps industries maintain high safety standards 
                by providing real-time detection of safety gear compliance and potential hazards.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Industrial Safety"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Safety Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <div className="text-gray-600">Accident Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Coverage</div>
            </div>
          </div>
        </div>

        {/* Zig-zag Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Advanced Monitoring</h2>
            <p className="text-gray-700 mb-4">
              Our system uses cutting-edge AI technology to monitor workplace safety in real-time. 
              This includes detection of:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Personal protective equipment (PPE)</li>
              <li>Safety violations and hazards</li>
              <li>Equipment maintenance needs</li>
              <li>Environmental safety conditions</li>
            </ul>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Advanced Monitoring"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Safety Points Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Safety Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300">
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industry;