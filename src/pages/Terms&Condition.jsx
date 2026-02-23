import { HardDrive } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// --- Data Section (Same as before) ---
const termsData = [
  {
    id: "introduction",
    title: "Introduction",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    content: (
      <>
        By accessing or using{" "}
        <Link to="/" className="text-emerald-700 font-semibold hover:underline">
          www.ownifie.com
        </Link>{" "}
        (the “Website” or “Platform”), you acknowledge that you have read,
        understood, and agree to be bound by these Terms & Conditions.
        <br />
        If you do not agree with any part of these Terms, you must not use this Platform.
        <br />
        These Terms constitute a legally binding agreement between you (“User”, “Investor”, “Co-Owner”, “Channel Partner”) and <span className="font-bold">OWNiFiE Pvt. Ltd.</span>, the parent entity operating under the brand name <span className="font-bold">OWNiFiE</span> (“we”, “us”, “our”, “Company”)..
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
    intro: "For the purpose of these Terms:",
    points: [
      {
        bold: "Platform",
        text: "refers to the OWNiFiE website and any associated digital interfaces.",
      },
      {
        bold: "User / Investor",
        text: "means any individual or entity registered to use OWNiFiE’s services.",
      },
      {
        bold: "OWNiCELL",
        text: "refers to a fractional digital representation of co-ownership in a property or asset.",
      },
      {
        bold: "Property Partner / Developer",
        text: "means any real-estate developer or seller collaborating with OWNiFiE.",
      },
      {
        bold: "Channel Partner / Associate",
        text: "means a person or agency officially affiliated with OWNiFiE for marketing, sales, or advisory purposes.",
      },
      {
        bold: "Service",
        text: "means the facilities, functionalities, and investment opportunities offered through OWNiFiE.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    intro: "To access and use the Platform:",
    points: [
      {
        text: "You must be at least 18 years of age and legally competent to enter into contracts under applicable law.",
      },
      {
        text: "You must complete all KYC/AML procedures as prescribed by the Company.",
      },
      {
        text: "Corporate investors must provide authorised signatory details and documentation. OWNiFiE reserves the right to refuse or terminate access to users who fail to meet these criteria.",
      },
    ],
  },
  {
    id: "platform-use",
    title: "Platform Use",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    points: [
      { text: "You agree to use the Platform only for lawful purposes and in accordance with these Terms." },
      { text: "You shall not misuse, copy, distribute, or attempt to reverse engineer any part of the Platform." },
      { text: "You agree to provide accurate, current, and complete information during registration and keep it updated." },
      { text: "Any unauthorised use of another user’s account, credentials, or financial data is strictly prohibited." },
    ],
  },
  {
    id: "account-security",
    title: "Account & Security",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
    points: [
      {
        text: "Users must maintain confidentiality of their login credentials.",
      },
      {
        text: "You agree to notify OWNiFiE immediately of any unauthorised access to your account.",
      },
      {
        text: "OWNiFiE shall not be liable for any loss arising from compromised credentials due to user negligence.",
      },
    ],
  },
  {
    id: "fees",
    title: "Fees, Payments & Refunds",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    points: [
      {
        text: "All investments, service fees, and charges are displayed transparently on the Platform.",
      },
      {
        text: "Payments shall be made via authorised banking channels, UPI, or integrated gateways.",
      },
      {
        text: "Refunds, if any, shall be processed only as per the relevant project’s investment agreement or regulatory guidelines.",
      },
    ],
  },
  {
    id: "date",
    title: "Data & Privacy",
    icon: <HardDrive />,
    content: <>Use of OWNiFiE is governed by our <Link to={"/privacy-policy"}>Privacy Policy</Link>.
    <br />
    By accessing the Platform, you consent to our collection, storage, and use of data as detailed therein.
    </>,
  },
];

const TermsAndCondition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [isManualScroll, setIsManualScroll] = useState(false);

  // --- EFFECT 1: INITIAL LOAD ONLY (Fixes the scroll blocking issue) ---
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs ONCE.

  // --- EFFECT 2: SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      // Agar humne click kiya hai, to auto-detection mat karo (Glitch prevent karne ke liye)
      if (isManualScroll) return;

      const scrollPosition = window.scrollY;
      const offset = 180; // Header height + thoda gap

      let current = activeSection;

      for (const item of termsData) {
        const element = document.getElementById(item.id);
        if (element) {
          // Check karo agar element viewport ke 'offset' area mein aa gaya hai
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
  }, [activeSection, isManualScroll]); // Ye dependencies sahi hain

  // --- CLICK HANDLER ---
  const scrollToSection = (id) => {
    setIsManualScroll(true); // Manual mode ON
    setActiveSection(id); // Link turant highlight karo

    const element = document.getElementById(id);
    if (element) {
      // Header ke hisaab se offset adjust karo (taki heading chupe nahi)
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      // 1 second baad manual mode OFF karo taaki wapis scroll detect hone lage
      setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-emerald-800 to-teal-700 text-white pb-24 pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>
        <div className="px-4 relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tight">
            Terms & Conditions
          </h1>
        </div>
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
          {/* Sidebar */}
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
                  {termsData.map((item) => (
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

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {termsData.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-7 mb-6 hover:shadow-md transition-shadow duration-300 scroll-mt-36"
              >
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

                {section.content && (
                  <div className="text-gray-600 leading-relaxed mb-4 text-lg">
                    {section.content}
                  </div>
                )}
                {section.intro && (
                  <p className="text-gray-700 font-medium mb-4">
                    {section.intro}
                  </p>
                )}

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
                              {point.bold}
                            </span>
                          )}
                          {point.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
