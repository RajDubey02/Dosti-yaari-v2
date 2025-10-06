// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Heart } from 'lucide-react';
// import Logo from "../assets/IMG_2149__5_-removebg-preview.png"

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = ['Home', 'Features', 'Stories', 'Download', 'Contact'];

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         isScrolled 
//           // ? 'bg-gradient-to-r from-pink-500/95 via-red-500/95 to-purple-500/95 backdrop-blur-lg shadow-xl' 
//           ? 'bg-white/30 backdrop-blur-lg shadow-xl' 
//           : 'bg-white/80 backdrop-blur-lg shadow-xl'
//           // : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <motion.div 
//             className="flex items-center space-x-2"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={Logo} alt="" 
//             className='md:w-28 md:h-28 mt-4   w-24 h-24 '
//             />
//             <span className="text-2xl font-extrabold text-black tracking-wide" style={{ fontFamily: 'Dancing Script, cursive' }}>
//               Dosti Yari
//             </span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <motion.a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className="text-black hover:text-[#6811e1] font-semibold relative group cursor-pointer"
//                 // className="text-black hover:text-white font-bold relative group cursor-pointer"
//                 whileHover={{ y: -2 }}
//               >
//                 {link}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 group-hover:w-full transition-all duration-300"></span>
//               </motion.a>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 126, 185, 0.4)' }}
//             whileTap={{ scale: 0.95 }}
//             className="hidden md:block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
//           >
//             Join Now
//           </motion.button>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-white p-2"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white/10 backdrop-blur-lg rounded-b-2xl"
//           >
//             <div className="px-4 py-6 space-y-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link}
//                   href={`#${link.toLowerCase()}`}
//                   className="block text-white/90 hover:text-white font-medium py-2 transition-colors"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link}
//                 </a>
//               ))}
//               <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold mt-4">
//                 Join Now
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


















// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/IMG_2149__5_-removebg-preview.png';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = ['Home', 'Features', 'Stories', 'Download', 'Contact', 'Privacy Policy'];

//   const mobileMenuVariants = {
//     hidden: { opacity: 0, height: 0 },
//     visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
//     exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-white/30 backdrop-blur-lg shadow-xl'
//           : 'bg-white/80 backdrop-blur-lg shadow-xl'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
//             <img src={Logo} alt="Logo" className="md:w-28 md:h-28 mt-4 w-24 h-24" />
//             <span
//               className="text-2xl font-extrabold text-black tracking-wide"
//               style={{ fontFamily: 'Dancing Script, cursive' }}
//             >
//               Dosti Yari
//             </span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <motion.div
//                 key={link}
//                 className="text-black hover:text-[#6811e1] font-semibold relative group cursor-pointer"
//                 whileHover={{ y: -2 }}
//               >
//                 {link === 'Privacy Policy' ? (
//                   <Link to="/privacy-policy">{link}</Link>
//                 ) : (
//                   <a href={`#${link.toLowerCase()}`}>{link}</a>
//                 )}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 group-hover:w-full transition-all duration-300"></span>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 126, 185, 0.4)' }}
//             whileTap={{ scale: 0.95 }}
//             className="hidden md:block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
//           >
//             Join Now
//           </motion.button>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-black p-2"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="md:hidden bg-white/10 backdrop-blur-lg rounded-b-2xl overflow-hidden"
//             >
//               <div className="px-4 py-6 space-y-4">
//                 {navLinks.map((link) => (
//                   <motion.div
//                     key={link}
//                     className="block text-black/90 hover:text-black font-medium py-2 transition-colors"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     whileHover={{ x: 5 }}
//                   >
//                     {link === 'Privacy Policy' ? (
//                       <Link to="/privacy-policy">{link}</Link>
//                     ) : (
//                       <a href={`#${link.toLowerCase()}`}>{link}</a>
//                     )}
//                   </motion.div>
//                 ))}
//                 <motion.button
//                   className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold mt-4"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Join Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;














import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/IMG_2149__5_-removebg-preview.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Features', 'Stories', 'Download', 'Contact', 'Privacy Policy'];

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false);

    if (link === 'Privacy Policy') {
      navigate('/privacy-policy');
      return;
    }

        if (link === 'Contact') {
      navigate('/Contact');
      return;
    }

    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      navigate('/', { state: { scrollTo: link.toLowerCase() } });
    } else {
      const element = document.getElementById(link.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/30 backdrop-blur-lg shadow-xl'
          : 'bg-white/80 backdrop-blur-lg shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <img src={Logo} alt="Logo" className="md:w-28 md:h-28 mt-4 w-24 h-24" />
            <span
              className="text-2xl font-extrabold text-black tracking-wide"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              Dosti Yari
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link}
                className="text-black hover:text-[#6811e1] font-semibold relative group cursor-pointer"
                whileHover={{ y: -2 }}
                onClick={() => handleNavClick(link)}
              >
                {link === 'Privacy Policy' ? <span>{link}</span> : <span>{link}</span>}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 group-hover:w-full transition-all duration-300"></span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
                <a href="https://github.com/RajDubey02/My-apk/releases/download/v1.0.0/app-release.apk">

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
            className="md:hidden text-black p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white/10 backdrop-blur-lg rounded-b-2xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link}
                    className="block text-black/90 hover:text-black font-medium py-2 transition-colors"
                    onClick={() => handleNavClick(link)}
                    whileHover={{ x: 5 }}
                  >
                    <span>{link}</span>
                  </motion.div>
                ))}
                <a href="https://github.com/RajDubey02/My-apk/releases/download/v1.0.0/app-release.apk">
                <motion.button
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                </motion.button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
