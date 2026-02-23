import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  Info,
  ShieldAlert,
  TrendingUp,
  FileWarning,
  CheckCircle,
} from "lucide-react";

// --- Data Section (Easy to Edit) ---
const disclaimerData = [
  {
    id: "about-ownifie",
    content: (
      <>
        OWNiFiE is a PropTech and WealthTech platform operated by{" "}
        <strong>OWNiFiE Pvt. Ltd.</strong>, which functions as an Asset and
        Investment Management Facilitator. It enables like-minded investors to
        collectively participate in premium and curated real estate assets
        through structured fractional or co-ownership models executed via
        Special Purpose Vehicles (SPVs) and, where applicable, represented
        digitally as OWNiFiE CELLs, and sole ownership models represented as
        Entire Unit/Assets.
      </>
    ),
  },
  {
    id: "platform-role",
    content: (
      <>
        OWNiFiE does not own, underwrite, or co-own any of the listed properties
        directly or indirectly, unless explicitly stated for a specific project.
        All listed assets are third-party properties, and OWNiFiE may or may not
        have an association, contractual or otherwise, with the respective
        builders, promoters, or property owners.
      </>
    ),
  },
  {
    id: "no-guarantees",
    intro:
      "While OWNiFiE undertakes thorough due diligence to list properties that offer strong fundamentals, verified documentation, and transparent governance structures, the platform does not guarantee or warrant:",
    points: [
      { text: "Any assured returns, fixed rentals, or capital appreciation." },
      {
        text: "The financial performance, completion timelines, or conduct of any third-party developer, promoter, or builder.",
      },
    ],
  },
  {
    id: "investment-risks",
    content: (
      <>
        All investments made through OWNiFiE are subject to market, legal, and
        liquidity risks. The performance of each asset depends on external
        factors such as demand-supply dynamics, occupancy rates, property
        management efficiency, taxation policies, and prevailing economic
        conditions.
      </>
    ),
  },
  {
    id: "liability",
    content: (
      <>
        OWNiFiE functions or Co-ownership & Sole ownership purely as a digital
        intermediary and technology enabler for fractional property ownership
        and asset management. It shall not be held liable for any loss, damage,
        delay, or default arising from the acts, omissions, or representations
        of third-party developers, property managers, or service providers
        associated with the listed assets.
      </>
    ),
  },
  {
    id: "investor-responsibility",
    content: (
      <>
        Investors are strongly advised to conduct independent due diligence and
        seek professional financial or legal advice before making any
        investment. Participation in any property via OWNiFiE implies that the
        investor has understood and accepted the inherent risks and has agreed
        to the platform’s Terms & Conditions and Privacy Policy.
      </>
    ),
  },
];

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("about-ownifie");
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

      for (const item of disclaimerData) {
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
      {/* --- Header Section (Same as Refund Policy) --- */}
      <div className="relative bg-gradient-to-br from-emerald-800 to-teal-700 text-white pb-24 pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>

        <div className="px-4 relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tight uppercase leading-snug">
            Disclaimer
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
          <div className="w-full">
            {disclaimerData.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-7 mb-6 hover:shadow-md transition-shadow duration-300 scroll-mt-36"
              >
                {/* Header */}
                <div className="flex items-center">
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
                        <div className="text-gray-600 leading-relaxed text-lg">
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
  );
};

export default Disclaimer;
