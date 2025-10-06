import React from 'react';
import { Mail, Smartphone, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
        </div>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-start space-x-4 p-5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
              <a 
                href="mailto:support@dostiyaari.fun"
                className="text-blue-600 hover:text-blue-700 font-medium break-all"
              >
               support@dostiyaari.fun
              </a>
            </div>
          </div>

          {/* App Name */}
          <div className="flex items-start space-x-4 p-5 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">App Name</h3>
              <p className="text-gray-800 font-medium">Dosti Yaari</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">Phone</h3>
              <a 
                href="tel:+918291389774"
                className="text-green-600 hover:text-green-700 font-medium text-lg"
              >
                +91 82913 89774
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            We typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
}