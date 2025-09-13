import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul & Priya',
      location: 'Mumbai',
      story: "We met on Dosti Yari two years ago and got married last month! What started as friendship turned into the most beautiful love story. Thank you for helping us find each other.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Amit & Sneha',
      location: 'Delhi',
      story: "The app's matching algorithm is incredible! We connected instantly and our conversations felt so natural. Six months later, we're planning our future together.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Vikram & Anjali',
      location: 'Bangalore',
      story: "Dosti Yari helped me find not just a partner, but my best friend. The safe environment and genuine profiles made all the difference in our love story.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      name: 'Rohan & Kavya',
      location: 'Pune',
      story: "From the first message to our wedding day, Dosti Yari was where our love story began. The app truly understands what makes relationships work.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-100" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Love Stories from{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              Dosti Yari
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real couples sharing their journey from friendship to forever love
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-pink-600 hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-pink-600 hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-pink-200">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center"
                    >
                      <Heart size={16} className="text-white fill-current" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <Star size={20} className="text-yellow-500 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Story */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].story}"
                    </p>

                    {/* Names & Location */}
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-pink-600 font-medium">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;