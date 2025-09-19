import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown District",
    rating: 5,
    text: "Exceptional service!",
    service: "Emergency Cleaning"
  },
  {
    name: "Michael Chen", 
    location: "Westside",
    rating: 4,
    text: "The team was knowledgeable, punctual, and explained everything clearly. Great experience overall.",
    service: "Gardening"
  },
  {
    name: "Emily Rodriguez",
    location: "Riverside",
    rating: 3,
    text: "Quick response time and excellent workmanship. Will definitely use again!",
    service: "Security"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from satisfied customers across the area
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-700 p-3 rounded-full">
                  <Quote className="text-white" size={20} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Summary */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
          </div>
          <p className="text-gray-600">
            Based on <span className="font-semibold">250+ reviews</span> from verified customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;