import React from "react";
import problemWeSolve from "../assets/images/problem-we-solve.webp";
import whoWeServe from "../assets/images/who-we-serve.webp";
import howWeWork from "../assets/images/how-we-work.webp";
import propertyCategories from "../assets/images/property-categories.webp";
import liquidityOptions from "../assets/images/liquidity-options.webp";
import teamBehind from "../assets/images/team-behind.webp";
import expertise from "../assets/images/expertise.webp";
import OurProjectsSlider from "./custom-components/OurProjectsSlider";
import { Helmet } from "react-helmet-async";

const CoreFunctionality = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Core Functionality | Unlocking Real Estate for All – OWNiFiE
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="OWNiFiE tech-enabled platform of fractional & tokenized-ownership models, allows everyone to invest in curated, high-value properties securely & affordably"
        />

        {/* Canonical URL to prevent Duplicate Content */}
        <link rel="canonical" href="https://ownifie.com/core-functionality" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="OWNiFiE expertise, OWNiFiE services, fractional ownership, co-ownership, tokenized real estate, blockchain property platform, real estate portfolio management, holiday home investment, eco-tech real estate, OWNiFiE BIT"
        />

        {/* Open Graph Metadata */}
        <meta property="og:url" content="https://ownifie.com/core-functionality" />
        <meta
          property="og:title"
          content="Core Functionality | Unlocking Real Estate for All – OWNiFiE"
        />
        <meta
          property="og:description"
          content="OWNiFiE tech-enabled platform of fractional & tokenized-ownership models, allows everyone to invest in curated, high-value properties securely & affordably"
        />
      </Helmet>
      <div className="w-full space-y-10 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
        {/* Section Header */}
        <section className="px-6 sm:px-16 py-6 sm:py-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#122F6B]">
            OWN<span className="text-[#972608]">iFiE</span>
          </h1>
          <div className="w-36 sm:w-48 h-[2px] bg-[#122F6B] mx-auto my-2" />
          <h2 className="text-[#122F6B] text-xl sm:text-2xl font-semibold">
            CORE FUNCTIONALITY
          </h2>
        </section>

        {/* Grid Blocks */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-16 pb-10">
            {/* Block */}
            <div
              data-aos="zoom-in-right"
              className="bg-[#9eb0c137] w-full max-w-[550px] rounded-lg shadow-md p-6 space-y-4"
            >
              <img
                src={problemWeSolve}
                loading="lazy"
                alt="Problem We Solve"
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-xl font-semibold text-[#122F6B]">
                Unlocking Real Estate for All
              </h3>
              <p className="text-gray-700 text-sm">
                Traditionally, real estate investment has been limited to those
                with substantial capital and legal knowledge. The market suffers
                from:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>High entry costs</li>
                <li>Limited liquidity</li>
                <li>Legal complexities</li>
                <li>Lack of transparency</li>
              </ul>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">OWNiFiE</span> removes these
                barriers through tech-enabled, fractional and co-ownership
                models, allowing anyone to invest in curated, high-value
                properties securely and affordably.
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              className="bg-[#e9d1874c] w-full max-w-[550px] rounded-lg shadow-md p-6 space-y-4"
            >
              <img
                src={whoWeServe}
                loading="lazy"
                alt="Who We Serve"
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-xl font-semibold text-[#122F6B]">
                Built for Modern Investors
              </h3>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">OWNiFiE</span> is designed for a
                wide spectrum of investors:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>First-time investors looking for low-risk entry points</li>
                <li>NRIs wanting a secure and managed presence in India</li>
                <li>
                  HNIs & family offices seeking diversified property portfolios
                </li>
                <li>Institutions & trusts exploring high-yield real assets</li>
                <li>
                  Tech-savvy millennials who want flexibility and control
                  through a digital platform
                </li>
              </ul>
            </div>

            <div
              data-aos="zoom-in-right"
              className="bg-[#3ebd2d2f] w-full max-w-[550px] rounded-lg shadow-md p-6 space-y-4"
            >
              <img
                src={howWeWork}
                loading="lazy"
                alt="How We Work"
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-xl font-semibold text-[#122F6B]">
                Simple . Smart . Structured
              </h3>
              <p className="text-sm text-gray-700">
                OWNiFiE makes investing easy through a streamlined 5-step
                process:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Choose from verified properties listed on the platform</li>
                <li>
                  Select Ownership Model – full, fractional, or co-ownership
                </li>
                <li>Digitally Sign Agreements with full legal backing</li>
                <li>
                  Track your property shares, returns, and usage via your
                  dashboard
                </li>
                <li>
                  Exit or Sell your share anytime through resale or exit support
                </li>
              </ul>
            </div>

            <div
              data-aos="zoom-in-left"
              className="bg-[#bfb6bf4f] w-full max-w-[550px] rounded-lg shadow-md p-6 space-y-4"
            >
              <img
                src={propertyCategories}
                loading="lazy"
                alt="Property Categories"
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-xl font-semibold text-[#122F6B]">
                Curated Assets for Every Vision
              </h3>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">OWNiFiE</span> connects
                investors to diverse property types:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  Studio Apartments – perfect for urban professionals & rental
                  yields
                </li>
                <li>
                  Luxury Villas – high-end retreats for lifestyle and returns
                </li>
                <li>
                  Commercial Units – offices and retail spaces in growth zones
                </li>
                <li>
                  Agricultural & Farm Lands – for ecoconscious, long-hold
                  investments
                </li>
                <li>
                  Boutique Retreats – wellness resorts, co-owned vacation homes
                </li>
              </ul>
            </div>

            <div
              data-aos="zoom-in-right"
              className="bg-[#e98b2146] w-full max-w-[550px] rounded-lg shadow-md p-6 space-y-4"
            >
              <img
                src={liquidityOptions}
                loading="lazy"
                alt="Liquidity Options"
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-xl font-semibold text-[#122F6B]">
                Your Wealth . Your Terms
              </h3>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">OWNiFiE</span> allows seamless
                exits, unlike traditional property holding:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  Resale Marketplace – Internal matching with incoming investors
                </li>
                <li>
                  Resale Marketplace – Internal matching with incoming investors
                </li>
                <li>
                  Ownership Swap Options – Move from one asset to another
                  in-network
                </li>
                <li>
                  Appreciation-Linked Exits – Sell once a property hits your
                  target price
                </li>
              </ul>
            </div>

            <div
              data-aos="zoom-in-left"
              className="bg-[#d9d9d951] w-full max-w-[550px] rounded-lg shadow-md p-6 space-y-4"
            >
              <img
                src={teamBehind}
                loading="lazy"
                alt="Team Behind"
                className="rounded-md w-full h-auto"
              />
              <h3 className="text-xl font-semibold text-[#122F6B]">
                Visionaries . Builders . Experts
              </h3>
              <p className="text-sm text-gray-700">
                Powered & Backed by Professional Experts including Architects,
                Legal Consultants & Financial Experts:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  Founders – Background in architecture, real estate &
                  technology
                </li>
                <li>
                  Legal & Compliance Experts – Ensuring all models are
                  RERA/SEBI-compliant
                </li>
                <li>
                  Tech Architects – Building secure and scalable platforms
                </li>
                <li>
                  Project Partners – Through BUILDiFiE, including architects and
                  developers
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <section className="px-6 sm:px-16 h-[600px]">
        <img src={expertise} className="w-full h-full object-cover object-top" alt="" />
      </section> */}

        <OurProjectsSlider />
      </div>
    </>
  );
};

export default CoreFunctionality;
