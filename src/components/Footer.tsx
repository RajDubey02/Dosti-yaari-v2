import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const footerLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms & Conditions', href: '#' },
    { text: 'About Us', href: '#' },
    { text: 'Contact Support', href: '#' },
    { text: 'Safety Tips', href: '#' },
    { text: 'Community Guidelines', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <Heart className="w-8 h-8 text-pink-400 fill-current" />
              <span className="text-3xl font-bold tracking-wide" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Dosti Yari
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Where friendship turns into love. Join thousands of hearts finding their perfect match 
              through meaningful connections and lasting relationships.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label={label}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 10px 25px rgba(255, 126, 185, 0.4)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Email:</span> hello@dostiyari.com
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Support:</span> +91 98765 43210
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Dosti Yari. All rights reserved. Made with{' '}
              <Heart size={14} className="inline text-pink-400 fill-current mx-1" />
              for love seekers everywhere.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Available on iOS & Android</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;