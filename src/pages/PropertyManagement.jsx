import React from "react";
// import image2 from "../assets/images/2.webp";
import CountUp from "react-countup";

const PropertyManagement = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <img
          src={image2}
          loading="lazy"
          className="w-full h-full object-cover brightness-75"
          alt="Hero Background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 sm:px-16 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
              Unlock the Potential of Your Property
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Discover how we maximize rental income while providing an
              effortless management experience. Join hundreds of satisfied
              owners achieving outstanding results with our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full px-6 sm:px-16 py-12 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              BRIK itt’s end-to-end vacation rental management services provide
              convenience, expertise, and efficient operations. Maximize your
              rental earnings while minimizing the stress of property
              management.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: 99.9, label: "Client Satisfaction", suffix: "%" },
              { value: 15, label: "Team Members", suffix: "+" },
              { value: 50, label: "Rental Marketplaces", suffix: "+" },
              { value: 1400, label: "Happy Owners", suffix: "+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#d08e02]">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2} // Animation duration in seconds
                    suffix={stat.suffix}
                    decimals={stat.suffix === "%" ? 1 : 0} // Show decimals only for percentage
                  />
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="w-full px-6 sm:px-16 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={image2}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              alt="Practices"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Our Best Practices to Earn You More Rentals
            </h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              {[
                "High-quality Listing",
                "Competitive Pricing",
                "Online Presence and Marketing",
                "Positive Reviews and Guest Satisfaction",
                "Targeted Advertising",
                "Enhance Guest Experience",
                "Partnering with Local Businesses",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-800"
                >
                  <span className="inline-block w-2 h-2 bg-[#d08e02] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-16 py-12 bg-[#d08e02] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
            Ownifie Offerings
          </h2>
          <p className="text-center text-lg sm:text-xl mb-10">
            Your time is valuable. Here’s how we make your experience smooth
            from end to end.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-default">
            {[
              {
                title: "Onboarding made easy",
                points: [
                  "Homeowner-driven onboarding system",
                  "3D virtual home tours",
                  "Custom copywriting",
                  "High-definition photography",
                ],
              },
              {
                title: "Optimized Marketing",
                points: [
                  "Search engine optimization",
                  "Professional listings",
                  "Social media outreach",
                  "Targeted advertising",
                ],
              },
              {
                title: "Streamlined Operations",
                points: [
                  "24/7 support services",
                  "Seamless booking management",
                  "Dedicated property managers",
                  "Regular maintenance checks",
                ],
              },
              {
                title: "Maximized Returns",
                points: [
                  "Dynamic pricing models",
                  "Revenue tracking tools",
                  "Financial insights and reports",
                  "Effortless rent collection",
                ],
              },
            ].map((offering, idx) => (
              <div
                key={idx}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{offering.title}</h3>
                <ul className="space-y-2">
                  {offering.points.map((point, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#d08e02] mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyManagement;
