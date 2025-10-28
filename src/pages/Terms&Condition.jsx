import React, { useState, useEffect } from "react";

const TermsAndCondition = () => {
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
            Terms & Conditions
          </h1>
          <p className="text-xl text-center text-emerald-100 animate-fade-in-up">
            OWNiFiE Proptech Private Limited
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
            {/* OWNiFiE Owner Agreement Section */}
            <section
              id="OWNiFiE-owner-agreement"
              className="policy-section bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
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
                OWNiFiE Owner Agreement
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  I understand and agree that OWNiFiE Proptech Pvt Ltd, being a
                  Proptech Platform to offer Fractional Ownership on Holiday
                  Homes/Secondary Homes by dividing the total cost of the
                  property (Including BSP, Stamp duty cost, Registration Cost,
                  Furnishing Cost, other equipment required inside the unit)
                  into equal fractions. The registration of the unit will be
                  done in the name of the designated SPV and I will be appointed
                  as a shareholder in the designated SPV.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                  My Application For Ownership
                </h3>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
                  <p className="mb-3">To become an Owner, I declare that:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>I am above 18 years of age</li>
                    <li>
                      I agree to complete and submit an enrolment application to
                      OWNiFiE Proptech Pvt Ltd in the prescribed form
                    </li>
                    <li>
                      I agree to pay the application fee to OWNiFiE Proptech Pvt
                      Ltd
                    </li>
                  </ul>
                </div>

                <p>
                  I understand and agree that OWNiFiE Proptech Pvt Ltd reserves
                  the right to refuse any enrolment application, including
                  without limitation if required to do so by the laws, rules or
                  regulations of any local, state, national or federal
                  governmental entity or by any judicial, public, regulatory or
                  law enforcement authority or court.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">
                    Co-Ownership Terms
                  </h4>
                  <p>
                    I understand and agree that up to 2 co-owners of OWNiFiE
                    Ownership who live at the same address may apply for one
                    OWNiFiE. I have to nominate a lead owner to act as our
                    principal contact for matters relating to our ownership.
                  </p>
                </div>
              </div>
            </section>

            {/* Property Rights Section */}
            <section
              id="property-rights"
              className="policy-section bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 5.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 10l1.293-1.293zm4 0a1 1 0 010 1.414L11.586 10l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Property Rights
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  I understand and agree that Usage rights of 30 Days every year
                  is allotted to me. However, all 30 days cannot be used at once
                  and should be in a breakup of Minimum 2 Night 3 Days and
                  Maximum 7 Night 8 Days in one stretch.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-amber-800 text-lg mb-2">
                    NOTE:
                  </h4>
                  <p>
                    For more details on Usage, please refer the FAQs of Usage on
                    www.OWNiFiE.com
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                  Obligations
                </h3>
                <p>
                  I understand and agree that all the obligations like
                  Maintenance, Repair, Breakage, Renovation, Updation,
                  Government Taxes, etc. will be beared by the shareholders
                  collectively in the same ratio as per their Ownership in the
                  related property of the respective SPV.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                  Occupancy Limits
                </h3>
                <p>
                  I understand that the number of people who can occupy the
                  apartment is as follows:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700">
                      3 BHK Apartment/Villa
                    </h4>
                    <p>6 Adults and 2 Kids</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700">
                      2 BHK Apartment/Villa
                    </h4>
                    <p>4 Adults and 2 Kids</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700">
                      1 BHK Apartment/Villa
                    </h4>
                    <p>3 Adults or 2 Adults and 2 Kids</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700">
                      Studio Apartment/Villa
                    </h4>
                    <p>2 Adults and 1 Kid</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic">
                  (Children above 12 years shall be considered as adult for the
                  purpose of occupancy. 2 children below 12 years to be
                  considered as one adult).
                </p>
              </div>
            </section>

            {/* Payment Terms Section */}
            <section
              id="payment-terms"
              className="policy-section bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Payment Terms
              </h2>

              <div className="space-y-4 text-gray-700">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg">
                  <h4 className="font-bold text-emerald-800 text-lg mb-2">
                    Payment Consent
                  </h4>
                  <p>
                    The OWNiFiE Proptech Pvt Ltd doesn't accept Booking Amount
                    payments in cash. All payments to OWNiFiE Proptech Pvt Ltd
                    are to be made in form of cheque/draft favoring "OWNiFiE
                    Proptech Pvt Ltd Proptech Pvt Ltd.", or through Credit
                    Cards/Debit Cards/Bank to Bank transfer/UPI etc.
                  </p>
                </div>

                <p>
                  I understand and agree that if I delay or do not pay the
                  installments on time/due date, I will be liable to pay a
                  penalty/interest of 11% per annum on the due amount.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                  Methods of Payments and Refunds
                </h3>
                <p>
                  I understand and agree that I have to quote my booking details
                  on all bank transfers and cheques payable to OWNiFiE Proptech
                  Pvt Ltd to avoid errors and undue delays.
                </p>

                <p>
                  I will be responsible for paying my bank's charges in respect
                  of all payments made to and refunds received from OWNiFiE
                  Proptech Pvt Ltd.
                </p>

                <p>
                  I understand and agree that any refund made by OWNiFiE
                  Proptech Pvt Ltd will be in the same manner and currency as
                  the original payment was made by me.
                </p>
              </div>
            </section>

            {/* Cancellation Policy Section */}
            <section
              id="cancellation-policy"
              className="policy-section bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Cancellation Policy
              </h2>

              <div className="space-y-4 text-gray-700">
                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                  <h4 className="font-bold text-red-800 text-lg mb-2">
                    Cancellation Terms
                  </h4>
                  <p>
                    I understand and agree that the booking amount is considered
                    as the "Earnest Money", if I cancel my OWNiFiE Ownership after
                    the booking payment, the entire "Earnest Money" will be
                    forfeited by OWNiFiE Proptech Pvt Ltd. However, I have a
                    freelook period of 14 Days from the date of Onboarding.
                  </p>
                </div>

                <p>
                  I understand and agree that the lock-in period for the OWNiFiE
                  Ownership will be for 3 years from the date of possession of
                  the property. I am not allowed to liquidate my OWNiFiE before the
                  end of the lock in period.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                  Right of First Refusal (ROFR)
                </h3>
                <p>
                  I understand and agree that if I wish to liquidate my OWNiFiE
                  through outright sales, then I will be under contractual
                  obligation to first offer my OWNiFiE at the appropriate market
                  rate to OWNiFiE PROPTECH PVT LTD and only once OWNiFiE
                  Proptech Pvt Ltd does not accepts the offer and declines the
                  offer for whatsoever reason, communicating it in writing with
                  me, I may proceed to sell the OWNiFiE in open market.
                </p>
              </div>
            </section>

            {/* Management Agreement Section */}
            <section
              id="management-agreement"
              className="policy-section bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                Management Agreement
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  THE MANAGEMENT AGREEMENT between the Designated SPV and
                  OWNiFiE PropTech Private Limited or it's associated SPV
                  company or LLP or any other Legal entity to be executed on the
                  terms and conditions specified.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                  Services Rendered
                </h3>
                <p>
                  OWNiFiE PropTech Private Limited or it's associated SPV
                  company or LLP or any other Legal entity commit to provide all
                  Property management Services i.e., 24X7 Concierge,
                  Housekeeping, Room services etc. at the Property owned by the
                  related SPV.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Maintenance & Reservation
                    </h4>
                    <p className="text-sm">
                      Maintenance of a reservation service and rentals, together
                      with the Property Manager and other employees.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Cleaning & Housekeeping
                    </h4>
                    <p className="text-sm">
                      Arranging for or providing cleaning, housekeeping and maid
                      service for the Unit.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Repairs & Maintenance
                    </h4>
                    <p className="text-sm">
                      Periodic inspection and arrangements for necessary repairs
                      and maintenance of said property.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Accounting & Records
                    </h4>
                    <p className="text-sm">
                      Maintenance of accounting records with relation to the
                      Unit, usage and occupancy thereof.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability Section */}
            <section
              id="limitation-liability"
              className="policy-section bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Limitation of Liability
              </h2>

              <div className="space-y-4 text-gray-700">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h4 className="font-bold text-amber-800 text-lg mb-2">
                    Disclaimer
                  </h4>
                  <p>
                    Company makes no warranty, explicitly or implicitly, without
                    Limitation with respect to the availability, quality or
                    suitability of the accommodation facility provided in any
                    unit including all amenities thereon and expressly disclaims
                    the warranties or conditions of merchantability and fitness
                    for any particular purpose.
                  </p>
                </div>

                <p>
                  Besides, under any circumstances, the company shall not be
                  liable for any special, indirect, incidental, or consequential
                  damages of any kind whatsoever (including, without limitation
                  attorneys' fees) in any way due to resulting from or arising
                  in connection with the OWNiFiE or the unit or the failure of
                  company to perform its obligations or for any alleged
                  deficiency of service, regardless of any negligence.
                </p>

                <p>
                  Except as otherwise provided, the accommodation and amenities
                  in the unit are provided on an "as is", "as available" basis
                  and the Company disclaims all warranties.
                </p>
              </div>
            </section>

            {/* Channel Partner Agreement Section */}
            <section
              id="channel-partner"
              className="policy-section bg-white rounded-xl shadow-lg p-6 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-100 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                Channel Partner Agreement
              </h2>

              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Appointment
                </h3>
                <p>
                  OWNiFiE Proptech Private Limited appoints the Channel Partner
                  on an exclusive basis in the Territory of and to term and
                  conditions of this agreement; Channel Partner can do
                  Online/offline selling of bricks, provide assistance services,
                  organize community events and all OWNiFiE Proptech Private
                  Limited services in the exclusive territory.
                </p>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg mt-6">
                  <h4 className="font-bold text-purple-800 text-lg mb-2">
                    Channel Partner Rights
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Channel Partner can use the trade names, trademarks, of
                      the OWNiFiE Proptech Pvt. Ltd for the business purpose
                    </li>
                    <li>
                      Channel Partner can use the Company's copyright, website,
                      data, brand name, knowledge etc.
                    </li>
                    <li>
                      The Channel Partner shall enter into a Registered License
                      Agreement when required
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                  Term
                </h3>
                <p>
                  This Agreement shall remain in force for the period of 5 years
                  from the date of signature by the parties.
                </p>

                <p>
                  The Company agrees to allow the Channel Partner to renew the
                  Channel Partner subject to renewal terms being agreed and
                  where the Channel Partner has operated the Channel Partner
                  successfully and in accordance with the terms of this
                  Agreement and the Channel Partner Manual.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            If you have any questions about these Terms, please contact us at
          </p>
          <a
            href="mailto:info@ownifie.com"
            className="inline-block mt-4 text-emerald-300 hover:text-white text-xl font-medium transition-colors duration-300"
          >
            info@ownifie.com
          </a>
          <p className="mt-6 text-emerald-200">
            OWNiFiE is India's Leading Proptech Company unlocking Fractional
            Ownership in Private & Residential Real Estate
          </p>
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

export default TermsAndCondition;
