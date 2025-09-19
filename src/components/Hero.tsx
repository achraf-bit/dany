import React from 'react';
import { Phone, Clock, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Professional Home Services You Can 
                <span className="text-blue-700">Trust</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From emergency Cleaning servcies, our Experinced professionals 
                deliver quality service with 7/7 availability and satisfaction guarantee.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-green-600">
                <Shield size={20} />
                <span className="font-medium">Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Clock size={20} />
                <span className="font-medium">7/7 Emergency Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Get Free Quote
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors">
                <Phone size={20} />
                <span>Call Now: (212) 123-4567</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg"
              alt="Professional technician working"
              className="rounded-2xl shadow-2xl"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;