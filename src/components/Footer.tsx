import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <a href="mailto:harichselvamc@gmail.com" className="hover:text-blue-300">
                harichselvamc@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/industry" className="hover:text-blue-300">Industry Safety</a></li>
              <li><a href="/ai-detect" className="hover:text-blue-300">AI Detection</a></li>
              <li><a href="/upcoming" className="hover:text-blue-300">Upcoming Features</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Team Members</h3>
            <ul className="space-y-2">
              <li>Pardhu Nithin (21161101445)</li>
              <li>Subhan.S (211061101452)</li>
              <li>Hemanth Babu (211061101474)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; 2024 SafetyMonitor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;