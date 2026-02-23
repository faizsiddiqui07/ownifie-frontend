import React, { useState, useEffect } from "react";

// --- Data Section (Easy to Edit) ---
const refundData = [
  {
    id: "payment-instructions",
    title: "1. Payment Instructions",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    ),
    content: (
      <>
        You must always quote your booking reference, registered e-mail ID, or
        investor code on all transfers to OWNiFiE or its designated SPV to
        ensure correct allocation of funds and avoid delay or error in
        processing.
        <br />
        <br />
        All payments shall be made only in the name of the respective SPV or{" "}
        <strong>OWNiFiE Realty Pvt. Ltd.</strong> or Developer/Promoter/Builder
        through authorised banking channels such as:
      </>
    ),
    points: [
      {
        text: "Cheque/Demand Draft in favour of the Company/SPV as communicated in writing.",
      },
      { text: "NEFT / RTGS / IMPS / UPI." },
      {
        text: "Debit/Credit Card payment through official OWNiFiE-verified payment gateways.",
      },
    ],
    footer: "OWNiFiE does not accept cash payments under any circumstances. Any payment made in cash or to any entity/individual other than the authorised payee is at the payer’s own risk, and OWNiFiE will not be liable for such transactions.",
  },
  {
    id: "bank-charges",
    title: "2. Bank Charges",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    content: (
      <>
        You are responsible for any banking, transfer, or currency conversion
        charges related to your payments or refunds, except where a delay or
        error is proven to be directly attributable to OWNiFiE or its
        affiliates.
      </>
    ),
  },
  {
    id: "refunds",
    title: "3. Refunds",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    ),
    intro: "All refunds (if applicable) will be made:",
    points: [
      {
        text: "In the same currency and through the same mode as the original payment, where legally and technically feasible.",
      },
      {
        text: "Only to the original remitter’s account, after completion of KYC and verification.",
      },
      {
        text: "After adjustment of applicable taxes, processing fees, and any non-refundable statutory or administrative costs.",
      },
    ],
    footer: "Refunds shall be initiated only upon written confirmation from the Company/Manager and may take up to 45–90 working days depending on banking timelines and statutory clearances.",
  },
  {
    id: "consent-conditions",
    title: "4. Payment Consent and Refund Conditions",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
    content: (
      <>
        <ul>

          <li className="flex flex-col items-start my-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3">
                <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </div>
              The amount paid as Booking or Application Fee shall be refundable only if:
            </div>
            <ol className="ml-14 list-decimal">
              <li>OWNiFiE or the relevant SPV fails to deliver the property or</li>
              <li>Fails to constitute the full cohort of co-owners within 180–365 days of booking, depending on the property type, or</li>
              <li>Cancels the project or booking on its own initiative.</li>
            </ol>
          </li>
        </ul>
      </>
    ),
    points: [
      {
        text: "In such cases, the Company shall refund the booking amount with simple interest @ 9% p.a. from the date of receipt until the refund date.",
      },
      {
        text: "If the Investor/Owner voluntarily cancels the booking or withdraws for personal reasons before possession or cohort formation, the booking amount shall stand forfeited and deemed non-refundable.",
      },
      {
        text: "Upon acceptance of these terms, you acknowledge that no verbal or informal assurance contrary to this clause shall be binding on OWNiFiE.",
      },
    ],
  },
];

const RefundPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("payment-instructions");
  const [isManualScroll, setIsManualScroll] = useState(false);

  // --- EFFECT 1: INITIAL LOAD ---
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // --- EFFECT 2: SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;

      const scrollPosition = window.scrollY;
      const offset = 180;

      let current = activeSection;

      for (const item of refundData) {
        const element = document.getElementById(item.id);
        if (element) {
          if (element.offsetTop - offset <= scrollPosition) {
            current = item.id;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isManualScroll]);

  // --- CLICK HANDLER ---
  const scrollToSection = (id) => {
    setIsManualScroll(true);
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* --- Header Section --- */}
      <div className="relative bg-gradient-to-br from-emerald-800 to-teal-700 text-white pb-24 pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>

        <div className="px-4 relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tight uppercase">
            Methods of Payment & Refunds
          </h1>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 text-gray-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <div className="px-4 sm:px-16 pt-12 pb-4 -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          {/* --- Sticky Sidebar --- */}
          <aside className="hidden lg:block lg:w-1/4 sticky top-28 self-start h-fit transition-all duration-300">
            <div className="bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-white border-b border-emerald-100">
                <h3 className="font-bold text-emerald-800 uppercase text-xs tracking-wider flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                  Quick Navigation
                </h3>
              </div>
              <nav className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                <ul className="py-2">
                  {refundData.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 border-l-4 hover:bg-emerald-50 flex items-center group
                        ${
                          activeSection === item.id
                            ? "border-emerald-600 text-emerald-800 bg-emerald-50/50"
                            : "border-transparent text-gray-500 hover:text-emerald-600"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-2 transition-colors ${activeSection === item.id ? "bg-emerald-600" : "bg-gray-300 group-hover:bg-emerald-400"}`}
                        ></span>
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* --- Main Content --- */}
          <div className="w-full lg:w-3/4">
            {refundData.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-7 mb-6 hover:shadow-md transition-shadow duration-300 scroll-mt-36"
              >
                {/* Header */}
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {section.icon}
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>

                {/* Content */}
                {section.content && (
                  <div className="text-gray-600 leading-relaxed mb-4 text-lg">
                    {section.content}
                  </div>
                )}

                {/* Intro Line */}
                {section.intro && (
                  <p className="text-gray-700 text-lg font-medium mb-4">
                    {section.intro}
                  </p>
                )}

                {/* Bullet Points */}
                {section.points && (
                  <ul className="space-y-4">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                            <svg
                              className="w-3.5 h-3.5 text-emerald-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="text-gray-600 leading-relaxed">
                          {point.bold && (
                            <span className="font-bold text-gray-800 mr-1">
                              {point.bold}:
                            </span>
                          )}
                          {point.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <div>
                    <p className="text-gray-600 leading-relaxed mt-4 text-lg">
                      {section.footer}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
