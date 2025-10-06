// import React from 'react';
// import { motion } from 'framer-motion';

// const AppShowcase = () => {
//   return (
//     <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="order-2 lg:order-1"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Experience Love in{' '}
//               <span 
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
//                 style={{ fontFamily: 'Dancing Script, cursive' }}
//               >
//                 Your Pocket
//               </span>
//             </h2>

//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Our beautifully designed app makes finding love effortless and enjoyable. 
//               Swipe, match, and chat with potential partners who could be your perfect match.
//             </p>

//             <div className="space-y-4 mb-8">
//               {[
//                 'Intuitive swipe interface for easy matching',
//                 'Real-time notifications for new matches',
//                 'Advanced filters to find exactly what you want',
//                 'Video calls and voice messages for deeper connections'
//               ].map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   className="flex items-center space-x-3"
//                 >
//                   <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
//                   <span className="text-gray-700">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
//             >
//               Download Now
//             </motion.button>
//           </motion.div>

//           {/* Phone Mockup */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, rotateY: -15 }}
//             whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="order-1 lg:order-2 relative"
//           >
//             <div className="relative mx-auto max-w-sm">
//               {/* Phone Frame */}
//               <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl">
//                 <div className="bg-black rounded-2xl overflow-hidden">
//                   {/* Screen Content */}
//                   <div className="relative bg-gradient-to-br from-pink-400 via-red-500 to-purple-600 aspect-[9/19.5]">
//                     {/* Status Bar */}
//                     <div className="flex justify-between items-center p-4 text-white text-sm">
//                       <span>9:41</span>
//                       <div className="flex space-x-1">
//                         <div className="w-4 h-2 border border-white/50 rounded-sm">
//                           <div className="w-3 h-1 bg-white rounded-sm"></div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* App Content Preview */}
//                     <div className="px-6">
//                       {/* Profile Card */}
//                       <motion.div
//                         animate={{ y: [0, -10, 0] }}
//                         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                         className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 mb-4 shadow-lg"
//                       >
//                         <div className="w-full h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl mb-3"></div>
//                         <h3 className="font-bold text-gray-800 text-lg">Sarah, 24</h3>
//                         <p className="text-gray-600 text-sm">2 km away</p>
//                       </motion.div>

//                       {/* Action Buttons */}
//                       <div className="flex justify-center space-x-6">
//                         <motion.div
//                           whileHover={{ scale: 1.1 }}
//                           className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
//                         >
//                           <div className="w-6 h-6 bg-red-400 rounded-full"></div>
//                         </motion.div>
//                         <motion.div
//                           whileHover={{ scale: 1.1 }}
//                           className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
//                         >
//                           <div className="w-8 h-8 bg-green-400 rounded-full"></div>
//                         </motion.div>
//                       </div>
//                     </div>

//                     {/* Glassmorphism Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <motion.div
//                 animate={{ rotate: 360, scale: [1, 1.2, 1] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                 className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"
//               ></motion.div>
              
//               <motion.div
//                 animate={{ rotate: -360, scale: [1, 1.1, 1] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                 className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"
//               ></motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppShowcase;





import React from 'react';
import MainIMG from '../assets/image1.png'
import { motion } from 'framer-motion';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Love in{' '}
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                Your Pocket
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our beautifully designed app makes finding love effortless and enjoyable. 
              Swipe, match, and chat with potential partners who could be your perfect match.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Intuitive swipe interface for easy matching',
                'Real-time notifications for new matches',
                'Advanced filters to find exactly what you want',
                'Video calls and voice messages for deeper connections'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

              <a href="https://github.com/RajDubey02/My-apk/releases/download/v1.0.0/app-release.apk">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Download Now
            </motion.button>
            </a>
          </motion.div>

          {/* Image Replacement */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-full h-full">
              <img
                src={MainIMG} // Adjust path based on your assets structure
                alt="App Showcase"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"
              ></motion.div>
              
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;