import React from "react";
import ImageModel3 from "../assets/images/co-owner.webp";
import ImageModel2 from "../assets/images/fractional-owner.webp";
import ImageModel1 from "../assets/images/sole-owner.webp";
import humanImage from "../assets/images/human.webp";

import soleOwnership from "../assets/images/sole.webp";
import soleOwnershipSide from "../assets/images/soleSide.webp";
import coOwnership from "../assets/images/co.webp";
import coOwnershipSide from "../assets/images/coSide.webp";
import fractionalOwnership from "../assets/images/fractional.webp";
import fractionalOwnershipSide from "../assets/images/fractionalSide.webp";
import OurProjectsSlider from "./custom-components/OurProjectsSlider";

const BusinessModel = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
      <section className="px-6 sm:px-16 py-10">
        <div data-aos="zoom-in" className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Business Model
          </h1>
          <div className="w-[200px] sm:w-96 h-[1.5px] bg-[#122F6B] mx-auto mt-2" />
        </div>
      </section>

      {/* Image Models */}
      <section className="px-6 sm:px-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <div
            data-aos="zoom-in-right"
            className="flex justify-center md:block"
          >
            <img
              src={ImageModel1}
              loading="lazy"
              alt="Sole Owner"
              onClick={() => {
                const element = document.getElementById("sole-ownership");
                if (element) {
                  const yOffset = -60; // Adjust offset as needed
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="w-[300px] md:w-full object-cover cursor-pointer hover:opacity-90 transition"
            />
          </div>

          <div data-aos="zoom-in" className="flex justify-center md:block">
            <img
              src={ImageModel3}
              loading="lazy"
              alt="Co Owner"
              onClick={() => {
                const element = document.getElementById("co-ownership");
                if (element) {
                  const yOffset = -60;
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="w-[300px] md:w-full object-cover cursor-pointer hover:opacity-90 transition"
            />
          </div>

          <div data-aos="zoom-in-left" className="flex justify-center md:block">
            <img
              src={ImageModel2}
              loading="lazy"
              alt="Fractional Owner"
              onClick={() => {
                const element = document.getElementById("fractional-ownership");
                if (element) {
                  const yOffset = -60; // Adjust offset as needed
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="w-[300px] md:w-full object-cover cursor-pointer hover:opacity-90 transition"
            />
          </div>
        </div>
      </section>

      {/* Sole Ownership Model Section */}
      <section id="sole-ownership" className="px-6 sm:px-16 py-10 ">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div data-aos="zoom-in-left" className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#122F6B]">
              Sole-Ownership Model
            </h2>
            <div className="">
              <p className="text-lg font-semibold">
                Full Control · Full Title · Full Value
              </p>
              <p className="text-gray-700">
                The buyer purchases 100% ownership of a property—whether it's
                residential, commercial, agricultural, or farmland. The title is
                registered solely in the investor's name, offering complete
                autonomy over use, lease, development, or resale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Ideal for</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Long-term investors</li>
                <li>End-users seeking private use</li>
                <li>Institutional buyers</li>
                <li>Land banking and development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Full asset control</li>
                <li>Direct appreciation & rental income</li>
                <li>Customization & construction freedom</li>
              </ul>
            </div>
          </div>

          {/* Image Gallery */}
          <div data-aos="zoom-in-right" className="grid grid-cols-2">
            <img
              src={soleOwnershipSide}
              loading="lazy"
              alt="Sole Ownership Side"
              className="w-full h-full object-cover"
            />
            <img
              src={soleOwnership}
              loading="lazy"
              alt="Sole Ownership"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="w-full border-t border-gray-400 my-6" />

{/* Co-Ownership Model Section */}
      <section id="co-ownership" className="px-6 sm:px-16 py-10 ">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div data-aos="zoom-in-left" className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#122F6B]">
              Co-Ownership Model
            </h2>
            <div className="">
              <p className="text-lg font-semibold">
                Shared Ownership . Defined Usage . Mutual Growth
              </p>
              <p className="text-gray-700">
                In Co-Ownership model, two or more parties jointly own a
                property with clearly defined usage rights, cost-sharing
                agreements, and legal documentation. Unlike fractional
                ownership, this model often includes physical usage rotations
                and joint decision-making.
                <br />
                Co-Ownership is popular for vacation homes, retreats, or
                lifestyle properties where usage is seasonal, and costs are
                shared.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Ideal for</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Friends, families, or partners investing together</li>
                <li>Lifestyle investors (hill homes, farm stays)</li>
                <li>Community-backend assets holders</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Shared cost of premium assets</li>
                <li>Personalized usage schedules</li>
                <li>Structured agreements with exit clauses</li>
              </ul>
            </div>
          </div>

          {/* Image Gallery */}
          <div data-aos="zoom-in-right" className="grid grid-cols-2">
            <img
              src={coOwnership}
              alt="Sole Ownership Side"
              className="w-full h-full object-cover"
            />
            <img
              src={coOwnershipSide}
              loading="lazy"
              alt="Sole Ownership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="w-full border-t border-gray-400 my-6" />

      {/* Fractional Ownership Model Section */}
      <section id="fractional-ownership" className="px-6 sm:px-16 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Gallery */}
          <div
            data-aos="zoom-in-left"
            className="grid grid-cols-2 order-2 md:order-1"
          >
            <img
              src={fractionalOwnership}
              loading="lazy"
              alt="Sole Ownership"
              className="w-full object-cover"
            />
            <img
              src={fractionalOwnershipSide}
              loading="lazy"
              alt="Sole Ownership Side"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div
            data-aos="zoom-in-right"
            className="space-y-6  order-1 md:order-2"
          >
            <h2 className="text-3xl font-semibold text-[#122F6B]">
              Fractional-Ownership Model
            </h2>
            <div className="">
              <p className="text-lg font-semibold">
                Own a Piece . Earn the Potential
              </p>
              <p className="text-gray-700">
                <span className="text-black font-semibold">OWNiFiE's</span>{" "}
                flagship model allows multiple investors to own fractions or
                shares of a high-value property, dividing capital investment and
                ownership rights. Income, appreciation, and resale value are
                distributed proportionally. <br />
                Each investor receives a digitally tracked and legally
                recognized share in the asset, with transparent performance
                dashboards and flexible exit options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Ideal for</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>First-time investors</li>
                <li>HNIs seeking diversified exposure</li>
                <li>Passive income seekers</li>
                <li>Vacation or luxury property investors</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Low entry barrier</li>
                <li>Diversification across properties</li>
                <li>Regular returns (rental/dividends)</li>
                <li>Professionally managed assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="px-6 sm:px-16 py-6">
        <img
          src={humanImage}
          data-aos="zoom-in-up"
          loading="lazy"
          className="w-full rounded-lg object-cover"
          alt="Human Model"
        />
      </section>

      <OurProjectsSlider />
    </div>
  );
};

export default BusinessModel;
