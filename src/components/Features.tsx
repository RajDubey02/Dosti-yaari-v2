import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, MessageCircle, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Find Your Match',
      description: 'Advanced matching algorithm to connect you with compatible souls who share your values and interests.',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your privacy and safety are our top priority. Verified profiles and secure messaging keep you protected.',
      gradient: 'from-red-500 to-purple-500',
    },
    {
      icon: MessageCircle,
      title: 'Instant Chat',
      description: 'Connect instantly with matches through our real-time messaging system. Share photos, voice notes, and more.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Real Connections',
      description: 'Build meaningful relationships with authentic people. From friendship to love, create lasting bonds.',
      gradient: 'from-pink-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              Dosti Yari
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of friendship and romance with features designed to help you find your soulmate.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;