import React, { useState } from "react";
import image4 from "../assets/images/snow01.webp";
import image1 from "../assets/images/snow06.webp";
import { IoMdArrowDropright } from "react-icons/io";

const FAQsSection = ({ image, isImageLeft, faqs }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <img
        src={image}
        alt="FAQ Section"
        loading="lazy"
        className={`w-full md:w-[45%] rounded-xl shadow-md object-cover ${
          isImageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      />

      <div
        className={`w-full md:w-1/2 space-y-5 ${
          isImageLeft ? "order-2 md:order-2" : "order-2 md:order-1"
        }`}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium transition-all duration-300 ${
                expanded === index
                  ? "bg-indigo-100 text-indigo-800"
                  : "bg-white text-gray-800"
              }`}
            >
              <span>{faq.question}</span>
              <IoMdArrowDropright
                className={`text-2xl transition-transform duration-300 ${
                  expanded === index ? "rotate-90 text-indigo-600" : "rotate-0"
                }`}
              />
            </button>
            {expanded === index && (
              <div className="px-5 py-4 bg-gray-50 text-gray-700 text-base leading-relaxed border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQs = () => {
  const section1FAQs = [
    {
      question: "How is OWNiFiE different from other real estate companies?",
      answer:
        "We combine traditional real estate expertise with PropTech innovations like digital listings, virtual tours, secure transactions, and fractional ownership models.",
    },
    {
      question: "Is OWNiFiE only for high-end properties?",
      answer:
        "No, we have a wide portfolio ranging from affordable homes to luxury villas and premium investments.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking link provided in your confirmation email.",
    },
  ];

  const section2FAQs = [
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' at the login page and follow the instructions to reset your password.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "You can cancel your order within 24 hours of placing it. Contact our support team for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, PayPal, and other online payment methods.",
    },
  ];

  return (
    <div className="px-6 sm:px-16 py-12 space-y-16 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
        Frequently Asked Questions
        <span className="block w-32 h-[3px] bg-[#d08e02] mx-auto mt-2" />
      </h2>

      <FAQsSection image={image1} isImageLeft={true} faqs={section1FAQs} />
      <FAQsSection image={image4} isImageLeft={false} faqs={section2FAQs} />
    </div>
  );
};

export default FAQs;
