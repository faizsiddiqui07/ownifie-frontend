import React from "react";
// import image3 from "../assets/images/3.webp";

// import icon1 from "../assets/icons/insight.png";
// import icon2 from "../assets/icons/chair.png";
// import icon3 from "../assets/icons/police.png";
// import icon4 from "../assets/icons/user.png";
// import icon5 from "../assets/icons/building.png";
// import icon6 from "../assets/icons/exchange.png";
// import icon7 from "../assets/icons/like.png";

const HowItWorks = () => {
  return (
    <div className="w-full space-y-16">
      {/* Section 1: Introduction */}
      <section className="px-6 sm:px-16 py-10">
        <h1 className="text-center text-4xl sm:text-5xl font-bold mb-12">
          How It Works
          <span className="block w-24 h-[3px] bg-[#d08e02] mx-auto mt-2"></span>
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              What is Ownifie?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              1/11th Fraction of Premium and Luxurious real estate assets
              through which every BRIK—the owner—is benefitted from income
              generated, value appreciation, and enjoys exclusive usage and
              exchange rights!
            </p>
          </div>
          <img
            src={image3}
            loading="lazy"
            className="w-full lg:w-[500px] rounded-lg shadow-lg object-cover"
            alt="Ownifie Introduction"
          />
        </div>
      </section>

      {/* Section 2: Ownifie Model */}
      <section className="bg-gray-50 px-6 sm:px-16 py-12">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            The Ownifie Model
          </h2>
          <p className="text-gray-600 text-lg">
            Smooth, Transparent & Secure Way of Owning Properties
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: icon1,
              title: "High-End Analytics",
              description:
                "With highly curated data, we value the listed property and divide it into 11 units, with each unit termed as a BRIK.",
            },
            {
              icon: icon2,
              title: "Secure Ownership",
              description:
                "A transparent process ensures the safety and authenticity of your property ownership rights.",
            },
            {
              icon: icon3,
              title: "Seamless Experience",
              description:
                "Enjoy hassle-free property management and gain benefits like income, value appreciation, and usage rights.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={item.icon} loading="lazy" className="w-16 h-16 mb-4" alt={item.title} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="px-6 sm:px-16 py-12">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            How Does It Work
          </h2>
          <p className="text-gray-600 text-lg">
            We have a very innovative business model to support our vision and
            boost your net worth.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 cursor-default">
          {[
            {
              icon: icon4,
              title: "Organic Acquisition",
              description:
                "Every offering goes through a detailed process, ensuring the most genuine and worthy property buying opportunities.",
            },
            {
              icon: icon6,
              title: "Modification",
              description:
                "Our in-house services ensure that every listing meets modern-day standards for higher rental yields and growth.",
            },
            {
              icon: icon5,
              title: "Professional Management",
              description:
                "Our team manages your investments and offers an investor dashboard for easy monitoring and secure redemption.",
            },
            {
              icon: icon1,
              title: "Due Diligence",
              description:
                "We perform thorough due diligence, analyzing property documentation and financials for secure investments.",
            },
            {
              icon: icon7,
              title: "Financials",
              description:
                "Our waterfall structure ensures your preferred returns are prioritized before we reap any benefits.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white p-6 border-l-4 border-[#d08e02] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={item.icon} loading="lazy" className="w-12 h-12 mb-4" alt={item.title} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
