import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart, Users, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id='download' className="py-20 bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join Thousands Finding Love on{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-white"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              Dosti Yari
            </span>
            {' '}Today!
          </h2>

          <motion.p 
            className="text-xl md:text-2xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Don't wait for love to find you. Take the first step towards your happily ever after 
            and discover meaningful connections that last a lifetime.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-pink-100">Active Users</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">2K+</div>
              <div className="text-pink-100">Success Stories</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-pink-100">Match Rate</div>
            </div>
          </motion.div>

          {/* Download Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
              <a href="https://github.com/RajDubey02/My-apk/releases/download/v1.0.0/app-release.apk">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(255, 255, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(255, 126, 185, 0.5)',
                  '0 0 40px rgba(255, 126, 185, 0.8)',
                  '0 0 20px rgba(255, 126, 185, 0.5)',
                ],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="group bg-white text-pink-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-pink-50 transition-all duration-300 flex items-center space-x-3 min-w-[220px]"
            >
            
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Boys App</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            
            </motion.button>
  </a>
            {/* <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(255, 255, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(162, 89, 255, 0.5)',
                  '0 0 40px rgba(162, 89, 255, 0.8)',
                  '0 0 20px rgba(162, 89, 255, 0.5)',
                ],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="group bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-purple-50 transition-all duration-300 flex items-center space-x-3 min-w-[220px]"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Girls App</span>
              <Heart className="w-5 h-5 animate-pulse fill-current" />
            </motion.button> */}
          </motion.div>

          <motion.p
            className="text-pink-100 mt-8 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Free to download • Premium features available
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;