import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Features', 'Stories', 'Download', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-pink-500/95 via-red-500/95 to-purple-500/95 backdrop-blur-lg shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-8 h-8 text-pink-300 fill-current" />
            <span className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Dosti Yari
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/90 hover:text-white font-medium relative group cursor-pointer"
                whileHover={{ y: -2 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 126, 185, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            Join Now
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/10 backdrop-blur-lg rounded-b-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/90 hover:text-white font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold mt-4">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;