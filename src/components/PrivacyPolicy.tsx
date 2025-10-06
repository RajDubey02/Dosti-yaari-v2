// import React from 'react';

// const PrivacyPolicy: React.FC = () => {
//   return (
//     <div className="mt-6 min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl w-full space-y-8">
//         <h1 className="text-4xl font-bold text-center text-pink-600">Dosti Yaari Privacy Policy</h1>
//         <p className="text-gray-600 text-center">
//           Effective Date: October 6, 2025<br />
        
//         </p>

//         <section className="space-y-6">
//           <p className="text-lg text-gray-700">
//             Welcome to <span className="font-semibold text-pink-600">Dosti Yaari</span>! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app. By using Dosti Yaari, you agree to this Privacy Policy.
//           </p>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">1. About Dosti Yaari</h2>
//             <p className="text-gray-600">
//               Dosti Yaari is a communication app that allows users to chat using text messages and make voice or video calls with others they choose to connect with. There are no financial transactions or payments in this app.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">2. Information We Collect</h2>
//             <p className="text-gray-600">
//               We only collect limited information necessary to provide and secure our services.
//             </p>
//             <h3 className="text-xl font-medium text-gray-700">a. Information You Provide</h3>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li><strong>Mobile Number:</strong> We collect your contact number only for verification through OTP (One-Time Password). This ensures that every user account is genuine.</li>
//               <li><strong>Optional Profile Details:</strong> You may choose to add a display name or profile picture, but this is completely optional.</li>
//               <li><strong>Chat Messages:</strong> Only text messages are supported. We do not allow sharing of images, videos, or files through chat.</li>
//             </ul>
//             <h3 className="text-xl font-medium text-gray-700">b. Information Collected Automatically</h3>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li><strong>Device Information:</strong> Basic technical data such as device model, operating system version, and app version to ensure compatibility and performance.</li>
//               <li><strong>Usage Information:</strong> Anonymous data (like crashes or performance stats) to improve app stability.</li>
//             </ul>
//             <h3 className="text-xl font-medium text-gray-700">Permissions</h3>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li><strong>Contacts Permission:</strong> Used only for verifying your number via OTP.</li>
//               <li><strong>Microphone and Camera:</strong> Used only when you make or receive voice or video calls.</li>
//               <li><strong>Storage:</strong> Used temporarily for app functionality (no media sharing).</li>
//             </ul>
//             <p className="text-gray-600">
//               All permissions are strictly limited to app functionality and can be managed in your device settings.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">3. How We Use Your Information</h2>
//             <p className="text-gray-600">
//               We use your information to:
//             </p>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li>Verify your phone number using OTP.</li>
//               <li>Enable secure text, voice, and video communication between users.</li>
//               <li>Maintain app performance and prevent misuse or spam.</li>
//               <li>Improve overall user experience and app quality.</li>
//             </ul>
//             <p className="text-gray-600 font-semibold">
//               We do not sell, share, or trade your personal information with anyone.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">4. Chat Privacy and Screenshot Protection</h2>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li>Your chats are end-to-end encrypted for maximum privacy.</li>
//               <li>We do not store messages permanently after delivery.</li>
//               <li>Screenshots are disabled within chat screens to protect your privacy and prevent unauthorized sharing of private conversations.</li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">5. Data Storage and Security</h2>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li>All personal data (like phone numbers) is stored securely using encryption.</li>
//               <li>Voice and video calls are not recorded or saved.</li>
//               <li>Chat messages are stored only until delivered, then deleted automatically.</li>
//               <li>We use secure servers and follow best practices to protect against unauthorized access.</li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">6. User Control</h2>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li>You can log out of your account at any time.</li>
//               <li>Currently, account deletion is not available, but logging out stops all activity and access from your device.</li>
//               <li>You can control app permissions (camera, microphone, etc.) from your phone settings at any time.</li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">7. Data Sharing</h2>
//             <p className="text-gray-600">
//               We may share limited data only in the following situations:
//             </p>
//             <ul className="list-disc pl-6 text-gray-600 space-y-2">
//               <li>To comply with law enforcement or legal obligations.</li>
//               <li>With trusted third-party service providers (like Firebase for OTP verification or analytics), who follow strict data privacy and security standards.</li>
//             </ul>
//             <p className="text-gray-600 font-semibold">
//               We never share user data for advertising or marketing purposes.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">8. Children’s Privacy</h2>
//             <p className="text-gray-600">
//               Dosti Yaari is intended for users aged 18 and above. We do not knowingly collect personal information from children under 18. If such data is found, it will be deleted immediately.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">9. Changes to This Policy</h2>
//             <p className="text-gray-600">
//               We may update this Privacy Policy from time to time. Any updates will be reflected by changing the “Effective Date” above or through an in-app notification.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">10. Contact Us</h2>
//             <p className="text-gray-600">
//               If you have questions or concerns about this Privacy Policy, please contact us at:<br />
//               📧 Email: support@dostiyaari.com<br />
//               📱 App Name: Dosti Yaari
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;











// import React from 'react';
// import { Shield, Lock, Users, Bell, Database, UserCheck, Share2, Baby, FileText, Mail } from 'lucide-react';

// const PrivacyPolicy: React.FC = () => {
//   const sections = [
//     {
//       icon: Users,
//       title: "About Dosti Yaari",
//       content: "Dosti Yaari is a communication app that allows users to chat using text messages and make voice or video calls with others they choose to connect with. There are no financial transactions or payments in this app."
//     }
//   ];

//   return (
//     <div className="mt-6 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
//           <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-8 py-12 text-center">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
//               <Shield className="w-10 h-10 text-pink-500" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
//               Privacy Policy
//             </h1>
//             <p className="text-pink-100 text-lg font-medium">Dosti Yaari</p>
//             <p className="text-white/80 text-sm mt-2">Effective Date: October 6, 2025</p>
//           </div>
          
//           <div className="px-8 py-6 bg-gradient-to-r from-pink-50 to-purple-50">
//             <p className="text-gray-700 text-center leading-relaxed">
//               Welcome to <span className="font-bold text-pink-600">Dosti Yaari</span>! Your privacy is important to us. 
//               This Privacy Policy explains how we collect, use, and protect your information when you use our app.
//             </p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="space-y-6">
//           {/* Section 1 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
//                 <Users className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">1. About Dosti Yaari</h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   Dosti Yaari is a communication app that allows users to chat using text messages and make voice or video calls with others they choose to connect with. There are no financial transactions or payments in this app.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
//                 <Database className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Information We Collect</h2>
//                 <p className="text-gray-600 mb-4">We only collect limited information necessary to provide and secure our services.</p>
                
//                 <div className="space-y-6">
//                   <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-5 border-l-4 border-pink-500">
//                     <h3 className="text-lg font-bold text-gray-800 mb-3">a. Information You Provide</h3>
//                     <ul className="space-y-3">
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Mobile Number:</strong> We collect your contact number only for verification through OTP (One-Time Password). This ensures that every user account is genuine.</span>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Optional Profile Details:</strong> You may choose to add a display name or profile picture, but this is completely optional.</span>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Chat Messages:</strong> Only text messages are supported. We do not allow sharing of images, videos, or files through chat.</span>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-500">
//                     <h3 className="text-lg font-bold text-gray-800 mb-3">b. Information Collected Automatically</h3>
//                     <ul className="space-y-3">
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Device Information:</strong> Basic technical data such as device model, operating system version, and app version to ensure compatibility and performance.</span>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Usage Information:</strong> Anonymous data (like crashes or performance stats) to improve app stability.</span>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-500">
//                     <h3 className="text-lg font-bold text-gray-800 mb-3">Permissions</h3>
//                     <ul className="space-y-3">
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Contacts Permission:</strong> Used only for verifying your number via OTP.</span>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Microphone and Camera:</strong> Used only when you make or receive voice or video calls.</span>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
//                         <span className="text-gray-700"><strong className="text-gray-900">Storage:</strong> Used temporarily for app functionality (no media sharing).</span>
//                       </li>
//                     </ul>
//                     <p className="text-gray-600 mt-4 text-sm italic">
//                       All permissions are strictly limited to app functionality and can be managed in your device settings.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Section 3 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
//                 <UserCheck className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">3. How We Use Your Information</h2>
//                 <p className="text-gray-600 mb-4">We use your information to:</p>
//                 <ul className="space-y-2 mb-4">
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Verify your phone number using OTP.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Enable secure text, voice, and video communication between users.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Maintain app performance and prevent misuse or spam.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Improve overall user experience and app quality.</span>
//                   </li>
//                 </ul>
//                 <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
//                   <p className="text-green-800 font-bold">
//                     We do not sell, share, or trade your personal information with anyone.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Section 4 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
//                 <Lock className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Chat Privacy and Screenshot Protection</h2>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Your chats are end-to-end encrypted for maximum privacy.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">We do not store messages permanently after delivery.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Screenshots are disabled within chat screens to protect your privacy and prevent unauthorized sharing of private conversations.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Section 5 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md">
//                 <Shield className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Storage and Security</h2>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">All personal data (like phone numbers) is stored securely using encryption.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Voice and video calls are not recorded or saved.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Chat messages are stored only until delivered, then deleted automatically.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">We use secure servers and follow best practices to protect against unauthorized access.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Section 6 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
//                 <UserCheck className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">6. User Control</h2>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">You can log out of your account at any time.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">Currently, account deletion is not available, but logging out stops all activity and access from your device.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">You can control app permissions (camera, microphone, etc.) from your phone settings at any time.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Section 7 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
//                 <Share2 className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Data Sharing</h2>
//                 <p className="text-gray-600 mb-4">We may share limited data only in the following situations:</p>
//                 <ul className="space-y-3 mb-4">
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">To comply with law enforcement or legal obligations.</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="flex-shrink-0 w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
//                     <span className="text-gray-700">With trusted third-party service providers (like Firebase for OTP verification or analytics), who follow strict data privacy and security standards.</span>
//                   </li>
//                 </ul>
//                 <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-lg">
//                   <p className="text-rose-800 font-bold">
//                     We never share user data for advertising or marketing purposes.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Section 8 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
//                 <Baby className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Children's Privacy</h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   Dosti Yaari is intended for users aged 18 and above. We do not knowingly collect personal information from children under 18. If such data is found, it will be deleted immediately.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Section 9 */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
//                 <Bell className="w-6 h-6 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">9. Changes to This Policy</h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   We may update this Privacy Policy from time to time. Any updates will be reflected by changing the "Effective Date" above or through an in-app notification.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Section 10 */}
//           <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl shadow-lg p-8 text-white">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
//                 <Mail className="w-6 h-6 text-pink-500" />
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
//                 <p className="mb-4 text-white/90">
//                   If you have questions or concerns about this Privacy Policy, please contact us at:
//                 </p>
//                 <div className="space-y-2">
//                   <p className="flex items-center gap-2 text-lg">
//                     <span>📧</span>
//                     <span className="font-semibold">support@dostiyaari.com</span>
//                   </p>
//                   <p className="flex items-center gap-2 text-lg">
//                     <span>📱</span>
//                     <span className="font-semibold">App Name: Dosti Yaari</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-8 text-center text-gray-500 text-sm">
//           <p>© 2025 Dosti Yaari. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;













import React from 'react';
import { Shield, Lock, Users, Bell, Database, UserCheck, Share2, Baby, FileText, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mt-10 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mb-4 shadow-lg">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-pink-100 text-base sm:text-lg font-medium">Dosti Yaari</p>
            <p className="text-white/80 text-xs sm:text-sm mt-2">Effective Date: October 6, 2025</p>
          </div>
          
          <div className="px-6 py-4 sm:px-8 sm:py-6 bg-gradient-to-r from-pink-50 to-purple-50">
            <p className="text-gray-700 text-center text-sm sm:text-base leading-relaxed">
              Welcome to <span className="font-bold text-pink-600">Dosti Yaari</span>! Your privacy is important to us. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our app.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 sm:space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">1. About Dosti Yaari</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Dosti Yaari is a communication app that allows users to chat using text messages and make voice or video calls with others they choose to connect with. There are no financial transactions or payments in this app.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">2. Information We Collect</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4">We only collect limited information necessary to provide and secure our services.</p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 sm:p-5 border-l-4 border-pink-500">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">a. Information You Provide</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Mobile Number:</strong> We collect your contact number only for verification through OTP (One-Time Password). This ensures that every user account is genuine.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Optional Profile Details:</strong> You may choose to add a display name or profile picture, but this is completely optional.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Chat Messages:</strong> Only text messages are supported. We do not allow sharing of images, videos, or files through chat.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-5 border-l-4 border-blue-500">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">b. Information Collected Automatically</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Device Information:</strong> Basic technical data such as device model, operating system version, and app version to ensure compatibility and performance.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Usage Information:</strong> Anonymous data (like crashes or performance stats) to improve app stability.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Permissions</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Contacts Permission:</strong> Used only for verifying your number via OTP.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Microphone and Camera:</strong> Used only when you make or receive voice or video calls.</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 text-sm sm:text-base"><strong className="text-gray-900">Storage:</strong> Used temporarily for app functionality (no media sharing).</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm italic">
                      All permissions are strictly limited to app functionality and can be managed in your device settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">3. How We Use Your Information</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4">We use your information to:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Verify your phone number using OTP.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Enable secure text, voice, and video communication between users.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Maintain app performance and prevent misuse or spam.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Improve overall user experience and app quality.</span>
                  </li>
                </ul>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-lg">
                  <p className="text-green-800 font-bold text-sm sm:text-base">
                    We do not sell, share, or trade your personal information with anyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">4. Chat Privacy and Screenshot Protection</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Your chats are end-to-end encrypted for maximum privacy.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">We do not store messages permanently after delivery.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Screenshots are disabled within chat screens to protect your privacy and prevent unauthorized sharing of private conversations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">5. Data Storage and Security</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">All personal data (like phone numbers) is stored securely using encryption.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Voice and video calls are not recorded or saved.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Chat messages are stored only until delivered, then deleted automatically.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">We use secure servers and follow best practices to protect against unauthorized access.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">6. User Control</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">You can log out of your account at any time.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Currently, account deletion is not available, but logging out stops all activity and access from your device.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">You can control app permissions (camera, microphone, etc.) from your phone settings at any time.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">7. Data Sharing</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4">We may share limited data only in the following situations:</p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">To comply with law enforcement or legal obligations.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                    <span className="text-gray-700 text-sm sm:text-base">With trusted third-party service providers (like Firebase for OTP verification or analytics), who follow strict data privacy and security standards.</span>
                  </li>
                </ul>
                <div className="bg-rose-50 border-l-4 border-rose-500 p-3 sm:p-4 rounded-lg">
                  <p className="text-rose-800 font-bold text-sm sm:text-base">
                    We never share user data for advertising or marketing purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                <Baby className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">8. Children's Privacy</h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Dosti Yaari is intended for users aged 18 and above. We do not knowingly collect personal information from children under 18. If such data is found, it will be deleted immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">9. Changes to This Policy</h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  We may update this Privacy Policy from time to time. Any updates will be reflected by changing the "Effective Date" above or through an in-app notification.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">10. Contact Us</h2>
                <p className="mb-3 sm:mb-4 text-white/90 text-sm sm:text-base">
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-base sm:text-lg">
                    <span>📧</span>
                    <span className="font-semibold">support@dostiyaari.com</span>
                  </p>
                  <p className="flex items-center gap-2 text-base sm:text-lg">
                    <span>📱</span>
                    <span className="font-semibold">App Name: Dosti Yaari</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>© 2025 Dosti Yaari. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;