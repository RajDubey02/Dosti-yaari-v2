import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart, Sparkles } from 'lucide-react';
import AnimatedHearts from './AnimatedHearts';
import HeroImage from '../assets/_Red and White Festive Photo First Date tips YouTube Thumbnail.png'; // Adjust the file extension (.jpg, .png, etc.) as needed
import HeroImage1 from '../assets/WhatsApp Image 2025-09-13 at 7.13.49 PM.jpeg'; // Adjust the file extension (.jpg, .png, etc.) as needed


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-500 to-purple-600"></div> */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: `url(${HeroImage})`,
            width: '100vw',
            height: '100vh', // Minimum height, will extend to buttons
            zIndex: 0,
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/0"></div>
        </div>


 <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: `url(${HeroImage1})`,
            width: '100vw',
            height: '100vh', // Minimum height, will extend to buttons
            zIndex: 0,
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/0"></div>
        </div>

      {/* Animated Background Elements */}
      <AnimatedHearts />
      
      {/* Bokeh Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Where Friendship
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-white"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Turns into Love
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover meaningful connections that blossom into beautiful relationships. 
            Join thousands finding their perfect match on Dosti Yari.
          </motion.p>

          {/* Download Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(255, 126, 185, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 flex items-center space-x-3 min-w-[200px]"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Boys App</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(162, 89, 255, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center space-x-3 min-w-[200px]"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Girls App</span>
              <Heart className="w-5 h-5 animate-pulse fill-current" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;