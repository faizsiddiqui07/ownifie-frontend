import React, { useState, useEffect } from "react";

const RefundPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-down">
            Refund Policy
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn about our payment methods and refund procedures
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="h-16 w-full text-gray-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 mx-auto">
            {/* Methods of Payment and Refunds Section */}
            <section
              id="payment-methods"
              className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Methods of Payment and Refunds
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  You should quote your booking details on all bank transfers
                  and cheques made payable to us to avoid error and undue delay.
                </p>

                <p>
                  You are responsible for paying your own bank's charges in
                  respect of all payments made to and refunds received from
                  OWNiFiE except in cases where OWNiFiE is found to be at fault.
                </p>

                <p>
                  We will refund any payments made by you to us in the same
                  manner and currency as the original payment was made.
                </p>
              </div>
            </section>

            {/* Payment Consent Section */}
            <section
              id="payment-consent"
              className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Payment Consent
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  The amount paid for booking shall be deemed refundable if
                  OWNiFiE fails to deliver the property or is unable to gather
                  the rest co-owners or cancels the booking from its end to the
                  OWNiFiE owner.
                </p>

                <p>
                  The OWNiFiE doesn't accept payments in Cash. All payments to
                  the OWNiFiE is to be made form of cheque/draft favoring
                  "OWNiFiE", or through Credit Cards. Any payment in cash and
                  cheque/draft not favoring the OWNiFiE is at the OWNiFiE Owner's
                  risk and the OWNiFiE will not be liable for the same.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-emerald-800 text-lg mb-2">
                    Refund with Interest
                  </h4>
                  <p>
                    OWNiFiE is liable to return the booking amount with an
                    interest of 11% per annum if all the co-owners are not
                    brought on board within 180 to 365 days depending upon the
                    property type as specified at the time of booking.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-amber-800 text-lg mb-2">
                    Cancellation Policy
                  </h4>
                  <p>
                    If the OWNiFiE owner cancels the booking from its consent the
                    OWNiFiE holds the right to forfeit the payment and the
                    amount paid deems Non-refundable. I/We hear by agree that if
                    under any circumstances booking of OWNiFiE is cancelled by
                    Me/Us the booking amount deemed non refundable.
                  </p>
                </div>
              </div>
            </section>

            {/* Summary Section */}
            <section
              id="summary"
              className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Policy Summary
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {[
                  {
                    icon: "💰",
                    title: "Accepted Payments",
                    desc: 'Cheque/draft favoring "OWNiFiE" or Credit Cards. No cash payments accepted.',
                  },
                  {
                    icon: "⏱️",
                    title: "Refund Timeline",
                    desc: "180 to 365 days depending on property type for co-owner onboarding.",
                  },
                  {
                    icon: "📈",
                    title: "Interest Rate",
                    desc: "11% per annum interest if co-owners are not brought on board in time.",
                  },
                  {
                    icon: "🚫",
                    title: "Cancellation",
                    desc: "Customer cancellations result in non-refundable booking amount.",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <h4 className="font-bold text-emerald-700 mb-2">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </div>
                ))}
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

export default RefundPolicy;
