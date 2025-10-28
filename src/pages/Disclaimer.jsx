import React, { useState, useEffect } from 'react';

const Disclaimer = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-down">Disclaimer</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">Important information about our platform and services</p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="h-16 w-full text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-10">
        <div className="lg:w-3/4 mx-auto">
          {/* Main Disclaimer Section */}
          <section 
            id="disclaimer" 
            className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              Important Disclaimer
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                OWNiFiE is a Proptech platform which works as an asset manager that allows like-minded people to come together and acquire their most desired asset class i.e. Luxury Holiday and Vacation homes across the Globe.
              </p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-emerald-800 text-lg mb-2">Property Ownership Clarification</h4>
                <p className="mb-3">We do not own, underwrite or co-own directly or indirectly any of our listed assets. Listed assets are third party and OWNiFiE may or may not be associated with Builder or promoter directly or indirectly.</p>
              </div>
              
              <p className="text-lg leading-relaxed">
                We at OWNiFiE try to list the best of the best projects which offer great value proposition and provide safe and viable investment opportunities.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-amber-800 text-lg mb-2">Limitation of Liability</h4>
                <p className="mb-3">OWNiFiE is not responsible for any loss, damage, delay, or any other misdeed of builders and promoters of the listed assets. OWNiFiE does not promise or commit any assured rentals or capital gains.</p>
              </div>
              
              <p className="text-lg leading-relaxed">
                All returns are organic in nature and totally depend upon market sentiment, occupancy percentage and the ARR of the property.
              </p>
            </div>
          </section>

          {/* Key Points Section */}
          <section 
            id="key-points" 
            className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              Key Points to Understand
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {[
                { icon: '🏢', title: 'Platform Role', desc: 'We are a Proptech platform and asset manager, not direct property owners.' },
                { icon: '🤝', title: 'Third-Party Assets', desc: 'All listed properties are third-party assets with no direct ownership by OWNiFiE.' },
                { icon: '📊', title: 'No Guaranteed Returns', desc: 'We do not promise or guarantee any specific rentals or capital gains.' },
                { icon: '⚖️', title: 'Limited Liability', desc: 'OWNiFiE is not responsible for builder/promoter actions or market fluctuations.' }
              ].map((card, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h4 className="font-bold text-emerald-700 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Considerations */}
          <section 
            id="investment" 
            className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
              </svg>
              Investment Considerations
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>Real estate investments, including luxury holiday and vacation homes, are subject to market risks. Potential investors should consider the following:</p>
              
              <ul className="list-disc pl-5 space-y-3">
                <li>Property values may fluctuate based on market conditions</li>
                <li>Rental income is not guaranteed and depends on occupancy rates</li>
                <li>External factors such as economic conditions and local regulations may impact returns</li>
                <li>All investment decisions should be made after thorough research and consultation with financial advisors</li>
              </ul>
              
              <div className="bg-gray-100 border-l-4 border-gray-400 p-5 rounded-r-lg mt-6">
                <h4 className="font-bold text-gray-800 text-lg mb-2">Independent Verification</h4>
                <p>We encourage all potential investors to independently verify property details, builder credentials, and all relevant documentation before making any investment decisions.</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section
              id="contact"
              className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Need Assistance?
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about our refund policy or need help
                  with a payment issue, please contact our support team.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">
                    Contact Information
                  </h4>
                  <p className="mb-2">Email: info@ownifie.com</p>
                  <p className="mb-2">Phone: +1 (555) 123-OWNiFiE</p>
                  <p>Business Hours: Monday-Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </section>
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

export default Disclaimer;