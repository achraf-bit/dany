import React from 'react';
import { Shield, Clock, Award, Users, Wrench, PhoneCall } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "All our technicians are fully licensed, bonded, and insured for your peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "We're available around the clock for urgent repairs and emergency situations."
  },
  {
    icon: Award,
    title: "Quality Guarantee", 
    description: "100% satisfaction guarantee on all work with comprehensive warranties."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 15 years of combined experience serving the local community."
  },
  {
    icon: Wrench,
    title: "Latest Equipment",
    description: "State-of-the-art tools and technology for efficient, precise repairs."
  },
  {
    icon: PhoneCall,
    title: "Free Estimates",
    description: "Transparent pricing with no hidden fees and free estimates on all projects."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Dany ?
          </h2>
          <p className="text-xl text-gray-600">
            We're committed to providing exceptional service that goes beyond your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-blue-700" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,500+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;