import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-down">Privacy Policy & Terms of Service</h1>
           <p className="text-xl text-center max-w-3xl mx-auto">Important information about our platform and services</p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="h-16 w-full text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 mx-auto">
            {/* Terms & Conditions Section */}
            <section 
              id="terms-and-conditions" 
              className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Terms & Conditions
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>By using OWNiFiE.com, you acknowledge that you agree to and are subject to the following terms and conditions. If you do not fully agree to these Terms, you may not access or otherwise use the Site. You should read through all the Terms carefully.</p>
                
                <p>The Terms constitute a legally binding agreement between you and OWNiFiE Proptech Private Limited, the owner of www.OWNiFiE.com. ("OWNiFiE", "we", "us" or "our").</p>
                
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-emerald-800 text-lg mb-2">Definition of Terms</h4>
                  <p className="mb-3">For the purpose of these Terms of Use, wherever the context so requires:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>"You" or "User" or "Owner" or "bit owner" or "Agent" or "Listing Agent" or "Associate" or "channel partner" shall mean any legitimate person who is accessing the app and/or has agreed to avail the services of OWNiFiE by providing the required information while registering on the app.</li>
                    <li>The term "we", "us", "our", "OWNiFiE" shall mean OWNiFiE Proptech Private Limited.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy Policy Section */}
            <section 
              id="privacy-policy" 
              className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
                Privacy Policy
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>This Privacy Policy applies to the activities of OWNiFiE Proptech Private Limited. By visiting website www.OWNiFiE.com and our mobile application you are accepting the terms stated hereunder relating to Privacy.</p>
                
                <p>It explains how OWNiFiE handles personal information and complies with the requirements of the Privacy Act. If you have further questions relating to this policy please write to us on info@OWNiFiE.com.</p>
                
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    { icon: '🔒', title: 'Data Protection', desc: 'Account Information and certain other information about you are subject to our applicable privacy policy.' },
                    { icon: '📧', title: 'Communication', desc: 'When you use the site to send an inquiry to a member, you agree to allow the Site to add your email to our database.' },
                    { icon: '🛡️', title: 'Information Safety', desc: 'Every effort shall be made to keep the information provided by the users in a safe manner.' }
                  ].map((card, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="text-3xl mb-3">{card.icon}</div>
                      <h4 className="font-bold text-emerald-700 mb-2">{card.title}</h4>
                      <p className="text-sm text-gray-600">{card.desc}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Our Purpose</h3>
                <p>Our purpose in collecting information about you is to provide you with personalized services, including exploring MORE options offered by OWNiFiE.</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Information Disclosure</h3>
                <p>OWNiFiE provides personal information to the property management service provider in order to facilitate a booking that you have requested. Otherwise, OWNiFiE does not routinely disclose personal information, except where it is necessary to provide you with a service that you have requested.</p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-amber-800 text-lg mb-2">Legal Exceptions</h4>
                  <p>OWNiFiE will not normally otherwise use or disclose any information about you without your consent, unless required by law to protect the rights, property or personal safety of another bit owner.</p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Marketing Communications</h3>
                <p>When you provide your personal information to OWNiFiE, we will give you the choice as to whether or not you wish to receive further information about special offers, promotions, and changes to our products and services.</p>
              </div>
            </section>

            {/* Trademark & Copyright Section */}
            <section 
              id="trademark-and-copyright" 
              className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.94 7.94a1.5 1.5 0 112.12 2.12 1.5 1.5 0 01-2.12-2.12zm1.56 6.5h-1.1v-1.1h1.1v1.1z" clipRule="evenodd"></path>
                </svg>
                Trademark & Copyright Restriction
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>One shall refrain from uploading any contents that are trademarked or copyrighted by any third party. OWNiFiE cannot verify the legality or ownership of contents you upload and you are solely responsible for the contents you upload and shall indemnify OWNiFiE from any legal implications arising directly or indirectly out of such act.</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Important Notice</h4>
                  <p>Users are solely responsible for ensuring that any content they upload does not infringe upon third-party intellectual property rights. OWNiFiE reserves the right to remove any content that allegedly infringes copyright or trademark rights without prior notice.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">If you have any questions about these Terms, please contact us at</p>
          <a href="mailto:info@ownifie.com" className="inline-block mt-4 text-emerald-300 hover:text-white text-xl font-medium transition-colors duration-300">
            info@ownifie.com
          </a>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;