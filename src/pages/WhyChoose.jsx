import React from "react";
import multimodelImage from "../assets/images/multi-model-flexibility.webp";
import techDrivenImage from "../assets/images/tech-driven.webp";
import lowEntryBarrierImage from "../assets/images/low-entry-barrier.webp";
import wealthUtilityImage from "../assets/images/wealth-utility.webp";
import legalFirstStructureImage from "../assets/images/legal-first-structure.webp";
import curatedAssetImage from "../assets/images/curated-assets-section.webp";
import FullyManagedImage from "../assets/images/fully-managed-ownership.webp";
import OurProjectsSlider from "./custom-components/OurProjectsSlider";

const WhyChoose = () => {
  return (
    <div className="w-full space-y-10 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
      <section className="px-6 sm:px-16 py-6 sm:py-10">
        {/* Hero Section */}
        <div className="text-center space-y-2">
          <div className="flex justify-center items-center flex-wrap gap-1">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800 leading-snug">
              Why Choose
            </h1>
            <span className="text-3xl sm:text-5xl font-bold text-[#122F6B]">
              OWN
            </span>
            <span className="text-3xl sm:text-5xl font-bold text-[#972608]">
              iFiE
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug">
              ?
            </h1>
          </div>
          <div className="w-72 sm:w-[420px] h-[1.5px] bg-[#122F6B] mx-auto mt-1" />
        </div>
      </section>

      <section className="w-full px-6 sm:px-16 pb-6 sm:pb-10">
        <div className="flex flex-col justify-center items-center gap-x-3 gap-y-8">
          <div  className="w-full flex flex-col md:flex-row justify-center items-center gap-x-8">
            <div data-aos="zoom-in-left" className="w-full xs:w-[85%] md:w-[50%] flex justify-center md:justify-end">
              <img
                src={multimodelImage}
                loading="lazy"
                className="max-w-full"
                alt="sustainable real estate"
              />
            </div>

            <div data-aos="zoom-in-right" className="w-full xs:w-[65%] md:w-[50%]">
              <p className="text-center md:w-[100%] lg:w-[90%] xl:w-[70%] text-lg">
                From Sole Ownership to Fractional and Co-Ownership, <span className="font-semibold">OWNiFiE</span>
                offers structured models tailored to every budget and investment
                strategy.
              </p>
            </div>
          </div>

          <div  className="w-full flex flex-col md:flex-row justify-center items-center  gap-x-8">
            <div data-aos="zoom-in-left" className="w-full xs:w-[65%] md:w-[50%] flex justify-end order-2 md:order-1">
              <p className="text-center md:w-[100%] lg:w-[90%] xl:w-[70%] text-lg">
                OWNiFiE offers a secure, digital dashboard to track ownership
                shares, rental returns, property appreciation, and investment
                documents — all in real time.
              </p>
            </div>

            <div data-aos="zoom-in-right" className="w-full xs:w-[85%] md:w-[50%] flex justify-center md:justify-start order-1 md:order-2">
              <img
                src={techDrivenImage}
                loading="lazy"
                className="max-w-full"
                alt="eco-friendly development"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-x-8">
            <div data-aos="zoom-in-left" className="w-full xs:w-[85%] md:w-[50%] flex justify-center md:justify-end">
              <img
                src={lowEntryBarrierImage}
                loading="lazy"
                className="max-w-full"
                alt="real estate innovation"
              />
            </div>

            <div data-aos="zoom-in-right" className="w-full xs:w-[65%] md:w-[50%]">
              <p className="text-center md:w-[100%] lg:w-[90%] xl:w-[70%] text-lg">
                Invest in premium real estate starting from a fraction of
                traditional costs, and gain access to properties previously
                available only to high-net-worth investors.
              </p>
            </div>
          </div>

          <div  className="w-full flex flex-col md:flex-row justify-center items-center gap-x-8">
            <div data-aos="zoom-in-left" className="w-full xs:w-[65%] md:w-[50%] flex justify-end order-2 md:order-1">
              <p className="text-center md:w-[100%] lg:w-[90%] xl:w-[70%] text-lg">
                Enjoy returns while also gaining access to properties for
                personal use (in select co-ownership models) — blending passive
                income with lifestyle benefits.
              </p>
            </div>

            <div data-aos="zoom-in-right" className="w-full xs:w-[85%] md:w-[50%] flex justify-center md:justify-start order-1 md:order-2">
              <img
                src={wealthUtilityImage}
                loading="lazy"
                className="max-w-full"
                alt="Eco-Conscious Design"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-x-8">
            <div data-aos="zoom-in-left" className="w-full xs:w-[85%] md:w-[50%] flex justify-center md:justify-end">
              <img
                src={legalFirstStructureImage}
                loading="lazy"
                className="max-w-full"
                alt="Expert-Driven Approach"
              />
            </div>

            <div data-aos="zoom-in-right" className="w-full xs:w-[65%] md:w-[50%]">
              <p className="text-center md:w-[100%] lg:w-[90%] xl:w-[70%] text-lg">
                Every deal is built on RERA-compliant, titlesecured frameworks,
                supported by proper agreements, due diligence, and seamless
                resale options.
              </p>
            </div>
          </div>

          <div  className="w-full flex flex-col md:flex-row justify-center items-center  gap-x-8">
            <div data-aos="zoom-in-left" className="w-full xs:w-[65%] md:w-[50%] flex justify-end order-2 md:order-1">
              <p className="text-center md:w-[100%] lg:w-[90%] xl:w-[70%] text-lg">
                From farmland to luxury retreats, every property is handpicked
                for location, legal soundness, ROI potential, and alignment with
                modern investor goals.
              </p>
            </div>

            <div data-aos="zoom-in-right" className="w-full xs:w-[85%] md:w-[50%] flex justify-center md:justify-start order-1 md:order-2">
              <img
                src={curatedAssetImage}
                loading="lazy"
                className="max-w-full"
                alt="Diversified Investment Options"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-x-8">
            <div data-aos="zoom-in-left" className="w-full xs:w-[85%] md:w-[50%] flex justify-center md:justify-end">
              <img
                src={FullyManagedImage}
                loading="lazy"
                className="max-w-full"
                alt="Buildifie’s mission"
              />
            </div>

            <div data-aos="zoom-in-right" className="w-full xs:w-[65%] md:w-[50%]">
              <p className="text-center md:w-[100%] lg:w-[90%] xl:w-[70%] text-lg">
                No hassles — <span className="font-semibold">OWNiFiE</span> handles maintenance, tenancy,
                documentation, taxation, and even exit support, so you focus on
                wealth, not paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

       <section data-aos="zoom-in-up" className="px-6 sm:px-16">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
          We’re not just selling land or homes — we’re offering a smarter way to
          own the world, fraction by fraction, foundation by foundation.{" "}
          <span className="font-semibold">OWNiFiE</span> is a
          gateway to fractional and co-ownership of premium real estate —
          villas on mountain ridges, serene farmlands, stylish city apartments,
          and eco-retreats — all verified, transparent, and accessible from your
          fingertips.
        </p>
      </section>

      <section className="w-full px-6 sm:px-16 py-10">
        <div data-aos="zoom-in-up" className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#122F6B] leading-snug">
            Own with Clarity . Grow with Confidence
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl">
            <span className="font-semibold">OWNiFiE</span> puts the future of
            property ownership in your hands — shared or solo, smart and
            sustainable.
          </p>
        </div>
      </section>

      <OurProjectsSlider />
    </div>
  );
};

export default WhyChoose;
