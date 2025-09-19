import React from 'react';
import { Sparkles, Shield, Trees } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Professional residential and commercial cleaning with eco-friendly products and thorough attention to detail.",
    features: ["Deep Cleaning", "Regular Maintenance", "Office Cleaning", "Eco-Friendly Products"],
    image: "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=400",
    available: true
  },
  {
    icon: Shield,
    title: "Security Guard Services", 
    description: "Trained security professionals providing protection for properties, events, and businesses.",
    features: ["Property Security", "Event Security", "24/7 Monitoring", "Trained Professionals"],
    image: "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=400",
    available: false
  },
  {
    icon: Trees,
    title: "Gardening Services",
    description: "Landscape design, lawn maintenance, planting, and seasonal garden care services.",
    features: ["Lawn Maintenance", "Landscape Design", "Seasonal Planting", "Garden Cleanup"],
    image: "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=400",
    available: false
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Professional cleaning services with more options coming soon
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group ${
                  !service.available ? 'opacity-80' : ''
                }`}
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!service.available && (
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${
                      service.available ? 'bg-blue-100' : 'bg-gray-200'
                    }`}>
                      <IconComponent 
                        className={service.available ? 'text-blue-700' : 'text-gray-500'} 
                        size={24} 
                      />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      service.available ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <p className={`mb-4 leading-relaxed ${
                    service.available ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.available ? 'bg-blue-600' : 'bg-gray-400'
                        }`}></div>
                        <span className={service.available ? 'text-gray-600' : 'text-gray-400'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      service.available 
                        ? 'bg-blue-700 text-white hover:bg-blue-800' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!service.available}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;