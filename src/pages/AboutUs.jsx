import React from "react";
import aboutImage from "../assets/images/snow14.webp";
import OurProjectsSlider from "./custom-components/OurProjectsSlider";

const AboutUs = () => {
  return (
    <div className="w-full space-y-10 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">

      <section className="px-6 sm:px-16 py-6 sm:py-10">
        {/* Hero Section */}
        <div className="text-center space-y-2">
          <h1 data-aos="zoom-in" className="text-4xl sm:text-5xl font-bold text-gray-800">
            About Us
            <span className="block w-60 h-[2px] bg-[#122F6B] mx-auto mt-4"></span>
          </h1>
          <div>
            <p data-aos="zoom-in-right" className="text-lg text-[#4072d5]">
              <span className="text-[#122F6B]">O</span>wn{" "}
              <span className="text-[#122F6B]">W</span>ealth{" "}
              <span className="text-[#122F6B]">N</span>ow
            </p>
            <p data-aos="zoom-in-left" className="text-lg text-[#972608]">
              <span className="text-[#122F6B]">I</span>nvest for a{" "}
              <span className="text-[#122F6B]">F</span>uturistic &{" "}
              <span className="text-[#122F6B]">I</span>mpactful{" "}
              <span className="text-[#122F6B]">E</span>state
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-16 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-center">
          <p data-aos="zoom-in" className="text-gray-700">
            <span className="text-black font-semibold">OWNiFiE</span> is a
            neo-era real estate wealth platform powered by{" "}
            <span className="text-black font-semibold">BUILDIFIE</span>, India's
            pioneering EcoTech Realty venture.{" "}
            <span className="text-black font-semibold">OWNiFiE</span> enables
            individuals and institutional investors to access curated real
            estate assets across residential, commercial, agricultural, and farm
            property segments-through both complete ownership and innovative
            shared ownership models.
          </p>
          <p data-aos="zoom-in" className="text-gray-700">
            Built to democratize access to high-value real estate,{" "}
            <span className="text-black font-semibold">OWNiFiE</span> offers a
            seamless, tech-enabled solution for Fractional-Ownership, and
            Sole-Ownership across residential, commercial, agricultural, and
            eco-retreat properties. <br />
            Our mission is simple: turn property into liquid, livable, and
            lucrative assets-accessible to anyone, from first-time investors to
            seasoned wealth builders.
          </p>

          <p data-aos="zoom-in" className="text-[#972608] font-semibold">
            <span className="text-[#122F6B]">OWNiFiE</span> isn't a real estate
            or proptech company. <br />
            It's a movement to unlock ownership for all.
            <br />
            <br />
            Because the future isn't just bought - <br />
            It's co-owned. It's curated. It's{" "}
            <span className="text-[#122F6B]">OWNiFiE</span>
          </p>

          <p data-aos="zoom-in" className="text-gray-700">
            We're not just selling land or homes - we're offering a smarter way
            to own the world, fraction by fraction, foundation by foundation.
            <br />
            <span className="text-black font-semibold">OWNiFiE</span> is a
            gateway to Fractional and co-ownership of premium real estate -
            villas on mountain ridges, serene farm lands, stylish city
            apartments, and eco-reteats - all verified, transparent, and
            accessible from fingertips.
          </p>
        </div>
        <img
          src={aboutImage}
          data-aos="zoom-in"
          loading="lazy"
          alt="Our Mission"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* Our Values Section */}
      <section className="space-y-8 mb-12 pb-8 px-6 sm:px-16 cursor-default">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-aos="zoom-in-right" className="p-6 border border-[#d08e02] rounded-lg text-center shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
            <p className="text-gray-600 mt-2">
              We act with honesty, transparency, and unwavering ethical
              standards in everything we do.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="p-6 border border-[#d08e02] rounded-lg text-center shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
            <p className="text-gray-600 mt-2">
              Creativity fuels us. Progress drives us. We innovate to lead, not
              follow.
            </p>
          </div>
          <div data-aos="zoom-in-left" className="p-6 border border-[#d08e02] rounded-lg text-center shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
            <p className="text-gray-600 mt-2">
              We don’t settle for average — we craft excellence into everything
              we do.
            </p>
          </div>
        </div>
      </section>
      <OurProjectsSlider />
    </div>
  );
};

export default AboutUs;
