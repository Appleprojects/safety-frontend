import React from 'react';
import { Camera, Upload, AlertCircle, CheckCircle } from 'lucide-react';

const AiDetect = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">AI Safety Detection</h1>
          <p className="text-xl">Real-time monitoring and analysis of safety compliance</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Detection Demo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Live Detection Demo</h2>
            <p className="text-gray-600">
              Upload an image or video to see our AI detection in action
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <Upload size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-4">Drag and drop your files here, or click to select</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Upload File
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Camera className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Real-time Detection</h3>
            <p className="text-gray-600">
              Instant analysis of PPE compliance using advanced computer vision
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <AlertCircle className="text-red-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Violation Alerts</h3>
            <p className="text-gray-600">
              Immediate notifications when safety violations are detected
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CheckCircle className="text-green-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Compliance Reports</h3>
            <p className="text-gray-600">
              Detailed analytics and reports on safety compliance trends
            </p>
          </div>
        </div>

        {/* Detection Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Detection Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">&lt;0.1s</div>
              <div className="text-gray-600">Response Time</div>
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
      </div>
    </div>
  );
}

export default AiDetect;