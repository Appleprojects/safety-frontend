import React from 'react';
import { Github, Linkedin, Mail, Award, Book, Code } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: "Pardhu Nithin",
      id: "21161101445",
      role: "AI Developer",
      expertise: "Machine Learning & Computer Vision",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Specializes in developing advanced AI algorithms for safety detection."
    },
    {
      name: "Subhan.S",
      id: "211061101452",
      role: "Backend Developer",
      expertise: "System Architecture & API Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Expert in building scalable backend systems and real-time processing."
    },
    {
      name: "Hemanth Babu",
      id: "211061101474",
      role: "Frontend Developer",
      expertise: "UI/UX & Web Development",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Creates intuitive and responsive user interfaces for safety monitoring."
    }
  ];

  const achievements = [
    {
      icon: <Award className="text-yellow-500" size={40} />,
      title: "Industry Recognition",
      description: "Multiple awards for innovation in workplace safety"
    },
    {
      icon: <Book className="text-blue-500" size={40} />,
      title: "Research Publications",
      description: "Published papers on AI in industrial safety"
    },
    {
      icon: <Code className="text-green-500" size={40} />,
      title: "Open Source",
      description: "Contributors to safety monitoring frameworks"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">Meet the minds behind SafetyMonitor</p>
        </div>
      </div>

      {/* Team Section with Zig-zag Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {team.map((member, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
            items-center gap-12 mb-16`}
          >
            <div className="flex-1">
              <img 
                src={member.image} 
                alt={member.name} 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">ID: {member.id}</p>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.expertise}</p>
              <p className="text-gray-600 mb-6">{member.description}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              For commercial inquiries, please contact us at:
            </p>
            <a 
              href="mailto:harichselvamc@gmail.com"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <Mail size={24} />
              <span className="text-lg">harichselvamc@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;