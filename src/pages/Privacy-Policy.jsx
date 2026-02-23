import {
  HardDrive,
  ShieldCheck,
  FileText,
  BadgePercent,
  Landmark,
  Scale,
  ClipboardList,
  Ban,
  Share2,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// --- Exact Content Mapping as per your raw data ---
const termsData = [
  {
    id: "overview",
    title: "Overview",
    icon: <ShieldCheck className="w-6 h-6" />,
    content: (
      <>
        OWNiFiE values your trust and is committed to protecting your personal
        data. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit{" "}
        <Link to="/" className="text-emerald-700 font-semibold hover:underline">
          www.ownifie.com
        </Link>{" "}
        or use our related services.
      </>
    ),
  },
  {
    id: "info-collect",
    title: "Information We Collect",
    icon: <FileText className="w-6 h-6" />,
    intro:
      "We collect information to facilitate property co-ownership, investment participation, and regulatory compliance:",
    points: [
      { text: "Personal details (name, DOB, gender, address)" },
      { text: "Identity verification (PAN, Aadhaar, passport, etc.)" },
      { text: "Contact details (email, mobile number)" },
      { text: "Usage analytics, cookies, and related data required." },
    ],
  },
  {
    id: "purpose",
    title: "Purpose of Collection",
    icon: <ClipboardList className="w-6 h-6" />,
    intro: "Your data is collected for the following:",
    points: [
      { text: "Registration, account management, and identity verification" },
      { text: "Investment processing and property allocation" },
      { text: "Communication, marketing, and customer support" },
      { text: "Legal compliance (KYC/AML, taxation, reporting)" },
      { text: "Platform analytics, fraud detection, and service enhancement" },
    ],
  },
  {
    id: "sharing",
    title: "Information Sharing",
    icon: <Share2 className="w-6 h-6"/>,
    intro: "We may share your data only when necessary:",
    points: [
      {
        text: "With property partners, custodians, payment gateways, and auditors",
      },
      { text: "With regulatory authorities under law" },
      { text: "Within OWNiFiE’s group companies for administrative purposes" },
      {
        text: "With third-party analytics and marketing partners (with consent)",
      },
    ],
    footer: "We never sell or rent user data for profit.",
  },
  {
    id: "purpose",
    title: "Data Retention & Security",
    icon: <ClipboardList className="w-6 h-6" />,
    intro:
      "Your data is retained as long as necessary for business or legal purposes.",
  },
  {
    id: "rights",
    title: "Your Rights",
    icon: <Scale className="w-6 h-6" />,
    intro: "You have the right to:",
    points: [
      { text: "Access and correct your data" },
      { text: "Withdraw consent" },
      { text: "Request deletion (where permitted by law)" },
      { text: "Object to marketing communications" },
    ],
  },
  {
    id: "trademark",
    title: "Trademark & Copyright",
    icon: <HardDrive className="w-6 h-6" />,
    content: (
      <>
        All rights to the name <span className="font-bold">OWNiFiE</span>, its
        logo, and content are owned by OWNiFiE Pvt Ltd. Unauthorised
        reproduction or commercial use of our materials is strictly prohibited.
        <br />
        Users uploading third-party content are solely responsible for ensuring
        copyright compliance and shall indemnify OWNiFiE for any infringement
        claims.
      </>
    ),
  },
  {
    id: "owner-agreement",
    title: "OWNiFiE Owner Agreement",
    icon: <Landmark className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          <span className="font-bold">Between: OWNiFiE Pvt. Ltd.</span>{" "}
          (operating the platform “OWNiFiE”; “Company”, “we”, “us”, “our”) and
          the undersigned <span className="font-bold">Owner/Investor</span>{" "}
          (“you”, “Owner”).
        </p>
        <p>
          <span className="font-bold">Effective Date: [●]</span> <br />
          <span className="font-bold">Property / SPV:</span> See Schedule A (Key
          Commercial Terms).
        </p>

        <h4 className="font-bold text-emerald-800 border-t pt-2">
          1. Purpose & Structure
        </h4>
        <p>
          1.1 <span className="font-bold">Platform & Model.</span> OWNiFiE is a
          technology platform enabling{" "}
          <span className="font-bold">
            fractional/co-ownership, and real-asset tolenization
          </span>{" "}
          of curated real-estate via a Special Purpose Vehicle (SPV) as well as
          deals on sole-ownership asset investment. You acquire
          equity/securities in the SPV (and/or platform-recorded OWNiCELL as the
          digital ledger representation of your fractional interest).
        </p>
        <p>
          1.2 Title Holder. Legal title to the underlying asset is held by the
          SPV; Owners hold their economic/usage rights & shares proportionate to
          their Fractional Interest.
        </p>
        <p>
          1.3 Manager. The SPV engages a Manager (the Company or its
          affiliate/appointed entity) under the Management Agreement (Schedule
          D).
        </p>

        <h4 className="font-bold text-emerald-800 border-t pt-2">
          2. Eligibility & Onboarding
        </h4>
        <p>
          2.1 Age & Capacity. You confirm you are 18+ and legally competent;
          entities act through an authorised signatory.
        </p>
        <p>
          2.2 KYC/AML. You agree to complete KYC/AML and provide documents the
          Company/Manager/bankers/regulators require.
        </p>
        <p>
          2.3 Acceptance. The Company may accept/reject any application
          (including for legal/regulatory reasons). Admission as Owner occurs
          only upon receipt/clearance of all amounts and
          countersignature/e-acceptance.
        </p>
        <p>
          2.4 Co-Owners. Up to two co-owners at the same address may be
          recorded; you must nominate a Lead Owner as primary contact. The
          Company may act on instructions of any recorded co-owner unless
          conflicting (see 2.5).
        </p>
        <p>
          2.5 Conflicting Instructions. If instructions conflict, the Company
          may act on the first-received reasonable instruction or suspend action
          until reconciled.
        </p>

        <h4 className="font-bold text-emerald-800 border-t pt-2">
          3. Rentals & Distributions (If Rental Program Is Enabled)
        </h4>
        <p>
          3.1 Manager-Led Rentals. If you do not use some/all nights, Manager
          may place the unit in Short-Stay/BNB/Long-Stay rentals (where
          permitted).
        </p>
        <p>
          3.2 Net Revenue Allocation. Net rental income (after property costs
          like builder maintenance, utilities, taxes, repairs, management costs,
          etc.) is pooled, accounted, and disbursed pro-rata typically post FY
          closing (latest by June), subject to audited accounts.
        </p>
        <p>
          3.3 Transparency. The Manager shall maintain transparent monthly
          statements (summary view) and annual audited statements.
        </p>

        <h4 className="font-bold text-emerald-800 border-t pt-2">
          4. Payments, Penalties & Refund Method
        </h4>
        <p>
          4.1 Modes. Payments must be via approved channels
          (NEFT/RTGS/UPI/card/cheque DD in favour of the notified payee). No
          cash accepted.
        </p>
        <p>
          4.2 Referencing. Quote booking/owner IDs on all transfers. Bank
          charges are on you. Refunds (when due) are made in the same
          currency/mode used originally, where feasible.
        </p>
        <p>
          4.3 Delay/Default. Delayed instalments may attract interest @ 9% p.a.
          (or as per Schedule C). Three consecutive defaults may trigger
          cancellation as per Schedule C.
        </p>

        <h4 className="font-bold text-emerald-800 border-t pt-2">
          5. Right of First Refusal (ROFR)
        </h4>
        <p>
          Before any outright sale of your Fractional Interest post lock-in, you
          must offer ROFR to the Company/SPV at a fair market value. Only upon
          written decline/expiry may you sell in open market (service/transfer
          fees apply). See Schedule F.
        </p>

        <h4 className="font-bold text-emerald-800 border-t pt-2">
          6. Suspension/Termination of Usage (Non-Payment/Misconduct)
        </h4>
        <p>
          6.1 Non-Payment. AMF/dues non-payment can trigger immediate suspension
          of usage and booking privileges until cured.
        </p>
        <p>
          6.2 Misconduct/Breach. Material breach (house-rule violations,
          reputational harm, unlawful use, property damage) permits suspension
          on written notice; if not remedied within 14 days, suspension may
          continue indefinitely or lead to termination of usage rights for that
          period.
        </p>

        <h4 className="font-bold text-emerald-800 border-t pt-2">
          7. Limitation of Liability
        </h4>
        <p>
          To the maximum extent permitted by law, the Company/SPV/Manager are
          not liable for indirect/special/consequential damages. Aggregate
          liability (if any) is limited to fees paid to the Company in the
          preceding 12 months, excluding statutory breaches/wilful misconduct.
        </p>
      </div>
    ),
  },
  {
    id: "SCHEDULE-A",
    title: "SCHEDULE A — Key Commercial Terms",
    icon: <ShieldCheck className="w-6 h-6" />,
    points: [
      { text: "Property/Project: [●]" },
      { text: "SPV Name & CIN: [●]" },
      { text: "Fractional Interest purchased: [● Shares/CELLs or %]" },
      { text: "Price & Payment Plan: [Milestones, EMI if any]" },
      { text: "Booking/Earnest Amount: [●]" },
      { text: "Lock-In: 3 years from possession date" },
      {
        text: "AMF (Year 1): ₹[●] per Fractional Interest; escalation cap ≤ WPI/CPI + 10% unless expert review (see Schedule G)",
      },
      {
        text: "Rental Program: Enabled/Disabled; (if enabled) pool distribution cycle: Annual (by June)",
      },
      { text: "AMF Relief Clause (if applicable): Yes/No (conditions apply)" },
      { text: "ROFR: Yes, per Schedule F" },
      { text: "Cohort Formation Deadline: 180–365 days (property-specific)" },
      { text: "Lead Owner: [●] | Co-Owner (if any): [●]" },
      { text: "Nominee: [●]" },
    ],
  },
  {
    id: "SCHEDULE-B",
    title: "SCHEDULE B — Usage Policy (Summary)",
    icon: <ShieldCheck className="w-6 h-6" />,
    points: [
      {
        text: "Annual nights: 30 per full Fractional Interest (unless specified).",
      },
      { text: "Min/Max stretch: 2N/3D to 7N/8D." },
      { text: "Blackout/peak rules (if any): [●]." },
      {
        text: "Occupancy limits: as in as per property space/size (unless property-specific).",
      },
      {
        text: "House rules, pets, smoking, events: [attach property handbook].",
      },
    ],
  },
  {
    id: "SCHEDULE-C",
    title: "SCHEDULE C — Cancellation & Refunds",
    icon: <ShieldCheck className="w-6 h-6" />,
    points: [
      {
        text: "1.	Free-Look: 14 days from onboarding—full reversal (Govt taxes/charges not refundable; if usage occurred, actuals deducted).",
      },
      {
        text: "2.	Owner Cancellation (pre-possession): Earnest Money forfeited.",
      },
      {
        text: "3.	Early Exit within Lock-In (exceptional): refund of amounts paid minus 20% cancellation charge; Govt taxes non-refundable; paid AMF/non-recurring charges non-refundable.",
      },
      {
        text: "4.	Post Lock-In Transfer: allowed; hurdle/exit fee (e.g., 10% on profit) + transfer admin charges.",
      },
      {
        text: "5.	Instalment Default: failure to pay 3 consecutive instalments → Company may cancel allotment and refund 50% of amounts paid to SPV within 90 working days after possession; if EMIs were timely but you cancel for personal reasons, refund = amounts paid minus 10%, payable within 90 working days from cancellation request.",
      },
      {
        text: "6.	Failure to Cohort: if co-owners not onboarded as per Schedule A, booking amount refunded with 9% p.a. interest.",
      },
    ],
  },
  {
    id: "SCHEDULE-D",
    title: "SCHEDULE D — Management Agreement (Framework Summary)",
    icon: <ShieldCheck className="w-6 h-6" />,
    points: [
      {
        text: "Parties: SPV (Owner collective) and Manager (Company/affiliate).",
      },
      {
        text: "Services: reservations & rentals; housekeeping; preventive & breakdown maintenance; vendor management; statutory compliance; insurance; inventory; accounting & audit interface; guest relations; amenity operations; upgrades/CapEx proposals.",
      },
      {
        text: "Accounting & Reports: monthly statements; annual audited statements; online dashboard; access for Owners.",
      },
      {
        text: "Charges: AMF per Schedule G; rental program fees (if any); cost-plus for repairs; transparent vendor quotes.",
      },
      {
        text: "Payment Terms: AMF due 31 March following the FY (or as notified). 24% p.a. penal interest on overdue AMF may apply (if specified in Schedule G).",
      },
      { text: "Sinking Fund: may be created/maintained for long-term capex." },
      {
        text: "Change of Manager: SPV may replace Manager as per SPV documents/law.",
      },
    ],
  },
  {
    id: "SCHEDULE-E",
    title: "SCHEDULE E — Booking & Cancellation Matrix",
    icon: <ShieldCheck className="w-6 h-6" />,
    content: (
      <>
        <ul>
          <li className="flex items-start">
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
            Booking confirmation: only by written/e-mail/app/website voucher.
          </li>

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
              Owner Holiday Cancellation (nights deducted):
            </div>
            <ol className="ml-10">
              <li>{`i >30 days before check-in: No deduction`}</li>
              <li>ii 21–30 days: 25% of nights booked</li>
              <li>iii 14–20 days: 50% of nights booked</li>
              <li>iv ≤7 days: 100% of nights booked</li>
            </ol>
          </li>

          <li className="flex items-start">
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
             No-show/late arrival/early departure: nights debited as per
            original booking.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "SCHEDULE-F",
    title: "SCHEDULE F — ROFR & Resale",
    icon: <ShieldCheck className="w-6 h-6" />,
    points: [
      {
        text: "ROFR: Owner must first offer Fractional Interest to Company/SPV at FMV (valuation approach disclosed). If declined in 15 business days, Owner may sell in open market, subject to KYC/approval, transfer fees, and hurdle fee (if profit realised).",
      },
      {
        text: "Transfer mechanics: buyer onboarding, KYC, SPV share transfer, CELL re-assignment (if used), update of registers, fee settlement.",
      },
    ],
  },
  {
    id: "SCHEDULE-G",
    title: "SCHEDULE G — Fees & Escalation",
    icon: <ShieldCheck className="w-6 h-6" />,
    points: [
      {
        text: "AMF Base: ₹[●] per Fractional Interest, billed annually.",
      },
      {
        text: "Escalation Cap: not to exceed weighted inflation + up to 10%, unless independent expert validates higher need (budget-based).",
      },
      {
        text: "Other Charges: actuals for utilities, taxes, minor repairs, housekeeping, linen, consumables; cost-plus terms published annually.",
      },
      {
        text: "Penalties: AMF overdue up to 24% p.a. (if adopted).",
      },
      {
        text: "Sinking Fund: [●]% of AMF (if adopted).",
      },
    ],
  },
];

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;
      const scrollPosition = window.scrollY;
      const offset = 180;
      let current = activeSection;

      for (const item of termsData) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop - offset <= scrollPosition) {
          current = item.id;
        }
      }
      if (current !== activeSection) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isManualScroll]);

  const scrollToSection = (id) => {
    setIsManualScroll(true);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => setIsManualScroll(false), 1000);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* --- HERO HEADER (SAME TO SAME) --- */}
      <div className="relative bg-gradient-to-br from-emerald-800 to-teal-700 text-white pb-24 pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>
        <div className="px-4 relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tight uppercase">
            Privacy Policy
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
        <div className="flex flex-col lg:flex-row lg:gap-4 xl:gap-8 items-start relative">
          {/* --- SIDEBAR (SAME TO SAME) --- */}
          <aside className="hidden lg:block lg:w-1/4 sticky top-28 self-start h-fit">
            <div className="bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-white border-b border-emerald-100">
                <h3 className="font-bold text-emerald-800 uppercase text-xs tracking-wider flex items-center gap-2">
                  Quick Navigation
                </h3>
              </div>
              <nav className="max-h-[70vh] overflow-y-auto">
                <ul className="py-2">
                  {termsData.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 border-l-4 flex items-center
                          ${activeSection === item.id ? "border-emerald-600 text-emerald-800 bg-emerald-50/50" : "border-transparent text-gray-500 hover:text-emerald-600 hover:bg-emerald-50"}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-2 ${activeSection === item.id ? "bg-emerald-600" : "bg-gray-300"}`}
                        ></span>
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* --- CONTENT (SAME TO SAME) --- */}
          <div className="w-full lg:w-3/4">
            {termsData.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-7 mb-6 scroll-mt-36"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4 flex-shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 uppercase">
                    {section.title}
                  </h2>
                </div>

                {section.content && (
                  <div className="text-gray-600 leading-relaxed">
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
                      <li key={i} className="flex items-start">
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
                        <div className="text-gray-600 leading-relaxed">
                          {point.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <div>
                    <p className="text-gray-700 font-medium mt-4">
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

export default PrivacyPolicy;
