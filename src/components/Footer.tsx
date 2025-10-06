// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

// const Footer = () => {
//   const socialLinks = [
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Youtube, href: '#', label: 'Youtube' },
//   ];

//   const footerLinks = [
//     { text: 'Privacy Policy', href: '#' },
//     { text: 'Download Our App', href: 'https://github.com/RajDubey02/My-apk/releases/download/v1.0.0/app-release.apk' },
//     { text: 'About Us', href: '#' },
//     { text: 'Contact Support', href: '#' },
   
   
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Logo & Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center md:text-left"
//           >
//             <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
//               <Heart className="w-8 h-8 text-pink-400 fill-current" />
//               <span className="text-3xl font-bold tracking-wide" style={{ fontFamily: 'Dancing Script, cursive' }}>
//                 Dosti Yari
//               </span>
//             </div>
//             <p className="text-gray-300 leading-relaxed max-w-md">
//               Where friendship turns into love. Join thousands of hearts finding their perfect match 
//               through meaningful connections and lasting relationships.
//             </p>
//           </motion.div>

//           {/* Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-center md:text-left"
//           >
//             <h3 className="text-xl font-bold mb-6">Quick Links</h3>
//             <div className="grid grid-cols-2 gap-3">
//               {footerLinks.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.href}
//                   className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
//                   whileHover={{ x: 5 }}
//                 >
//                   {link.text}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Social & Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center md:text-left"
//           >
//             <h3 className="text-xl font-bold mb-6">Follow Us</h3>
//             <div className="flex justify-center md:justify-start space-x-4 mb-8">
//               {socialLinks.map(({ icon: Icon, href, label }, index) => (
//                 <motion.a
//                   key={index}
//                   href={href}
//                   aria-label={label}
//                   whileHover={{ 
//                     scale: 1.1,
//                     boxShadow: '0 10px 25px rgba(255, 126, 185, 0.4)',
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
//                 >
//                   <Icon size={20} />
//                 </motion.a>
//               ))}
//             </div>

//             <div className="space-y-2">
//               <p className="text-gray-300 text-sm">
//                 <span className="font-medium">Email:</span> hello@dostiyari.com
//               </p>
//               <p className="text-gray-300 text-sm">
//                 <span className="font-medium">Support:</span> +91 98765 43210
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="border-t border-white/10 mt-12 pt-8 text-center"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm">
//               © 2024 Dosti Yari. All rights reserved. Made with{' '}
//               <Heart size={14} className="inline text-pink-400 fill-current mx-1" />
//               for love seekers everywhere.
//             </p>
            
//             <div className="flex items-center space-x-6 text-sm text-gray-400">
//               <span>Available on iOS & Android</span>
//               <div className="flex space-x-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="text-green-400 text-xs">Online</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;














// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/IMG_2149__5_-removebg-preview.png';


// const MotionLink = motion(Link); // Wrap Link properly

// const Footer = () => {
//   const socialLinks = [
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Youtube, href: '#', label: 'Youtube' },
//   ];

//   const footerLinks = [
//     { text: 'Privacy Policy', href: '/privacy-policy', isInternal: true },
//     { text: 'Download Our App', href: 'https://github.com/RajDubey02/My-apk/releases/download/v1.0.0/app-release.apk' },
//     { text: 'About Us', href: '/' },
//     { text: 'Contact Support', href: '/Contact', isInternal: true },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Logo & Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center md:text-left"
//           >
//             <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
//               {/* <Heart className="w-8 h-8 text-pink-400 fill-current" /> */}
//                 <img src={Logo} alt="Logo" className="md:w-20 md:h-20  w-20 h-20 mt-6" />
//               <span className="text-3xl font-bold tracking-wide" style={{ fontFamily: 'Dancing Script, cursive' }}>
//                 Dosti Yari
//               </span>
//             </div>
//             <p className="text-gray-300 leading-relaxed max-w-md">
//               Where friendship turns into love. Join thousands of hearts finding their perfect match 
//               through meaningful connections and lasting relationships.
//             </p>
//           </motion.div>

//           {/* Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-center md:text-left"
//           >
//             <h3 className="text-xl font-bold mb-6">Quick Links</h3>
//             <div className="grid grid-cols-2 gap-3">
//               {footerLinks.map((link, index) =>
//                 link.isInternal ? (
//                   <MotionLink
//                     key={index}
//                     to={link.href}
//                     className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
//                     whileHover={{ x: 5 }}
//                   >
//                     {link.text}
//                   </MotionLink>
//                 ) : (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
//                     whileHover={{ x: 5 }}
//                   >
//                     {link.text}
//                   </motion.a>
//                 )
//               )}
//             </div>
//           </motion.div>

//           {/* Social & Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center md:text-left"
//           >
//             <h3 className="text-xl font-bold mb-6">Follow Us</h3>
//             <div className="flex justify-center md:justify-start space-x-4 mb-8">
//               {socialLinks.map(({ icon: Icon, href, label }, index) => (
//                 <motion.a
//                   key={index}
//                   href={href}
//                   aria-label={label}
//                   whileHover={{ 
//                     scale: 1.1,
//                     boxShadow: '0 10px 25px rgba(255, 126, 185, 0.4)',
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
//                 >
//                   <Icon size={20} />
//                 </motion.a>
//               ))}
//             </div>

//             <div className="space-y-2">
//               <p className="text-gray-300 text-sm">
//                 <span className="font-medium">Email:</span> support@dostiyaari.com
//               </p>
//               <p className="text-gray-300 text-sm">
//                 <span className="font-medium">Support:</span> +91 82913 89774
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="border-t border-white/10 mt-12 pt-8 text-center"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm">
//               © 2024 Dosti Yari. All rights reserved. Made with{' '}
//               <Heart size={14} className="inline text-pink-400 fill-current mx-1" />
//               for love seekers everywhere.
//             </p>
            
//             <div className="flex items-center space-x-6 text-sm text-gray-400">
//               <span>Available on iOS & Android</span>
//               <div className="flex space-x-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="text-green-400 text-xs">Online</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





















import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/IMG_2149__5_-removebg-preview.png';

const MotionLink = motion(Link);

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const footerLinks = [
    { text: 'Privacy Policy', href: '/privacy-policy', isInternal: true },
    { text: 'Download Our App', href: 'https://github.com/RajDubey02/My-apk/releases/download/v1.0.0/app-release.apk' },
    { text: 'About Us', href: '/' },
    { text: 'Contact Support', href: '/Contact', isInternal: true },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          > 
            <div className="flex items-center justify-center md:justify-start space-x-2 ">
              <img src={Logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 mb-2" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-8" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Dosti Yari
              </h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Where friendship turns into love. Join thousands of hearts finding their perfect match 
              through meaningful connections and lasting relationships.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {footerLinks.map((link, index) =>
                link.isInternal ? (
                  <MotionLink
                    key={index}
                    to={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm md:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {link.text}
                  </MotionLink>
                ) : (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm md:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {link.text}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-3 md:space-x-4 mb-6">
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
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                >
                  <Icon size={18} className="md:size-20" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-gray-300 text-sm md:text-base">
                <span className="font-medium">Email:</span> support@dostiyaari.fun
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                <span className="font-medium">Support:</span> +91 82913 89774
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
          className="border-t border-white/10 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Dosti Yari. All rights reserved. Made with{' '}
              <Heart size={12} className="inline text-pink-400 fill-current mx-1 md:size-14" />
              for love seekers everywhere.
            </p>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <span>Available on iOS & Android</span>
              <div className="flex items-center space-x-2">
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