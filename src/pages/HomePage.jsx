import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import video6 from "../assets/demo.mp4";

import { EffectFade, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";

import bannerImage1 from "../assets/images/snow14.webp";
import bannerImage2 from "../assets/images/snow01.webp";
import bannerImage3 from "../assets/images/snow10.webp";

import icon1 from "../assets/icons/Choose.webp";
import icon2 from "../assets/icons/Own.webp";
import icon3 from "../assets/icons/Enjoy.webp";

import icon4 from "../assets/icons/easyToBuy.webp";
import icon5 from "../assets/icons/fully-Furnished.webp";
import icon6 from "../assets/icons/lowMaintenanceCost.webp";
import icon7 from "../assets/icons/premiumIcon.webp";
import icon8 from "../assets/icons/RiskFree.webp";
import icon9 from "../assets/icons/insight.webp";
import icon10 from "../assets/icons/chair.webp";
import icon11 from "../assets/icons/police.webp";

import { Link } from "react-router-dom";
import Card from "./custom-components/Card";
import BlogCard from "./custom-components/BlogCard";
import ScrollToTop from "./custom-components/ScrollToTop";
import axios from "axios";
import { base_url } from "@/config/config";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const slides = [bannerImage1, bannerImage2, bannerImage3];
  const [allProjects, setAllProjects] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const get_projects = async () => {
    try {
      setLoadingProjects(true);
      const { data } = await axios.get(`${base_url}/api/allWebsiteProjects`);
      setAllProjects(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProjects(false);
    }
  };

  const get_Blogs = async () => {
    try {
      setLoadingBlogs(true);
      const { data } = await axios.get(`${base_url}/api/allWebsiteBlog`);
      setAllBlogs(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingBlogs(false);
    }
  };

  useEffect(() => {
    get_projects();
    get_Blogs();
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const Loader = () => (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-[#122F6B] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          OWNiFiE | Own Wealth Now - Invest for a Futuristic & Impactful Estate
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="OWNiFiE is a gateway to Fractional-Ownership, Sole-Ownership & Tokenized-Ownership of luxury & premium real estate properties & assets"
        />

        {/* Canonical URL to prevent Duplicate Content */}
        <link rel="canonical" href="https://ownifie.com" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="OWNiFiE, sustainable real estate, eco-tech projects, real estate investment, fractional ownership, investment plan, property, real asset ownership, luxury property"
        />

        {/* Open Graph Metadata */}
        <meta property="og:url" content="https://ownifie.com" />
        <meta
          property="og:title"
          content="OWNiFiE | Own Wealth Now - Invest for a Futuristic & Impactful Estate"
        />
        <meta
          property="og:description"
          content="OWNiFiE is a gateway to Fractional-Ownership, Sole-Ownership & Tokenized-Ownership of luxury & premium real estate properties & assets"
        />
      </Helmet>

      {/* Banner Section */}
      <section className="w-full relative">
        {/* Swiper for sliding images only */}
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                loading="lazy"
                alt={`Banner Img ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/40 to-transparent z-10"></div> */}

        {/* Fixed Text Content in Bottom-Left */}
        <div
          data-aos="zoom-in-right"
          className="absolute bottom-20 left-4 sm:left-16 z-20 max-w-[90%] sm:max-w-[70%]"
        >
          <h1 className="text-xl sm:text-4xl text-[#4072d5] font-semibold">
            <span className="text-[#122F6B]">O</span>wn{" "}
            <span className="text-[#122F6B]">W</span>ealth{" "}
            <span className="text-[#122F6B]">N</span>ow
          </h1>
          <h1 className="text-xl sm:text-4xl mt-2 font-semibold text-[#972608]">
            <span className="text-[#122F6B]">I</span>nvest for a{" "}
            <span className="text-[#122F6B]">F</span>uturistic &{" "}
            <span className="text-[#122F6B]">I</span>mpactful{" "}
            <span className="text-[#122F6B]">E</span>state
          </h1>
          {/* <div className="w-56 sm:w-[650px] h-[2.5px] bg-black mx-auto mt-3" /> */}

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              to="/projects"
              className="bg-[#122F6B] hover:bg-[#12306be9] transition-all text-white px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg"
            >
              Explore Projects
            </Link>
            <Link
              to="/contact-us"
              className="bg-[#122F6B] hover:bg-[#12306be9] text-white transition-all px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="w-full px-4 sm:px-16 py-8">
        <h2 className=" text-3xl sm:text-4xl font-semibold mb-6 relative">
          All Projects
          {/* <div className="w-40 sm:w-[200px] h-[1.5px] bg-[#122F6B] mx-auto mt-1" /> */}
        </h2>
        {loadingProjects ? (
          <Loader />
        ) : (
          // <p>styrth</p>
          <div className="mx-auto">
            <Swiper
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              freeMode={true}
              modules={[Autoplay]}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {allProjects.map((data, idx) => (
                <SwiperSlide key={data._id || idx}>
                  <Card data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        <div className="flex justify-center mt-6">
          <Link
            to="/projects"
            onClick={ScrollToTop}
            className="bg-[#122F6B] hover:bg-[#12306be9] uppercase text-white px-6 py-3 rounded-lg shadow-md"
          >
            View More
          </Link>
        </div>
      </section>

      <section className="w-full px-4 sm:px-16 pb-10 bg-white">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Subtitle */}
          <h3
            data-aos="zoom-in"
            className="text-lg sm:text-xl font-medium tracking-wide mb-2"
          >
            Micro Buy · Mega Vision
          </h3>
          <div className="w-4/5 sm:w-full max-w-[700px] h-[4px] bg-[#122F6B] mx-auto mb-2 rounded-full" />

          {/* Main Headline */}
          <h2
            data-aos="zoom-in-right"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4072d5] leading-snug mb-2"
          >
            <span className="text-[#122F6B]">O</span>wn{" "}
            <span className="text-[#122F6B]">W</span>ealth{" "}
            <span className="text-[#122F6B]">N</span>ow
            <br />
            <p data-aos="zoom-in-left" className="text-[#972608]">
              <span className="text-[#122F6B]">I</span>nvest for a{" "}
              <span className="text-[#122F6B]">F</span>uturistic &{" "}
              <span className="text-[#122F6B]">I</span>mpactful{" "}
              <span className="text-[#122F6B]">E</span>state
            </p>
          </h2>
          <div className="w-4/5 sm:w-full max-w-[700px] h-[4px] bg-[#122F6B] mx-auto mt-2 rounded-full" />

          {/* Bottom Tagline */}
          <h3
            data-aos="zoom-in"
            className="text-lg sm:text-xl  font-semibold mt-2  tracking-wide"
          >
            From Soil to Shareholder
          </h3>
        </div>
      </section>

      {/* Newly Projects Section */}
      <section className="w-full px-4 sm:px-16 py-8 bg-gray-100">
        <h2 className=" text-3xl sm:text-4xl font-semibold mb-6 relative">
          Newly Launched
          {/* <div className="w-[220px] sm:w-[260px] h-[1.5px] bg-[#122F6B] mx-auto mt-1" /> */}
        </h2>
        <div className="mx-auto">
          <Swiper
            loop={true}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            freeMode={true}
            modules={[Autoplay, FreeMode]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {allProjects
              .filter((proj) => proj.projectStatus === "Newly Launched")
              .map((data, idx) => (
                <SwiperSlide key={data._id || idx}>
                  <Card data={data} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full px-4 sm:px-16 py-12">
        <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
          Redefine OWNership...Redesign Life...with{" "}
          <span className="font-bold text-[#122F6B]">OWN</span>
          <span className="font-bold text-[#972608]">iFiE</span>
          {/* <div className="w-[280px] sm:w-[480px] lg:w-[880px] mx-auto h-[2px] bg-[#122F6B] mt-2" /> */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mx-auto max-w-6xl">
          {[
            {
              icon: icon1,
              title: "Discover & Decide",
              aos: "zoom-out-right",
              description:
                "Explore properties, choose your dream destination, and determine the number of BIT that align with your vision of OWNership.",
            },
            {
              icon: icon2,
              title: "OWN",
              aos: "zoom-in",
              description:
                "With clarity and confidence, step into OWNership of your dream getaway. We handle the details — you enjoy the rewards.",
            },
            {
              icon: icon3,
              title: "OWN the Moment",
              aos: "zoom-out-left",
              description:
                "Celebrate the lifestyle you’ve earned — with every visit bringing you closer to your perfect getaway.",
            },
          ].map((item, index) => (
            <div
              data-aos={item.aos}
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 group-hover:bg-gray-200 transition-colors">
                <img src={item.icon} className="w-8 h-8" alt={item.title} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="mt-7 flex justify-center">
          <Link
            to="/how-it-works"
            onClick={ScrollToTop}
            className="bg-[#122F6B] hover:bg-[#12306be9] text-white uppercase px-8 py-3 rounded-lg shadow-md transition-colors"
          >
            Get Started
          </Link>
        </div> */}
      </section>

      <section className="py-6 xxs:py-8 xs:py-10 sm:py-16 bg-gray-900">
        <div className="px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src={video6}
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={toggleVideoPlay}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30 hover:border-white/50 transition-all"
                >
                  {isVideoPlaying ? (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* <div className="text-center mt-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Experience the OWNiFiE Difference</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Watch how we're transforming real estate investment through technology, transparency, and innovative ownership models.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-16 pb-12 pt-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 my-6">
            Why <span className="font-bold text-[#122F6B]">OWN</span>
            <span className="font-bold text-[#972608]">iFiE</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We’re not just selling land or homes — we’re offering a smarter way
            to OWN the world, fraction by fraction, foundation by foundation.{" "}
            <br />
            OWNiFiE is a gateway to fractional and co-ownership of premium real
            estate — villas on mountain ridges, serene farm lands, stylish city
            apartments, and eco-retreats — all verified, transparent, and
            accessible from fingertips.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: icon4, title: "Easy To OWN" },
              { icon: icon5, title: "Well-Furnished & Expertly Managed" },
              { icon: icon6, title: "Cost-Efficient Maintenance" },
              { icon: icon7, title: "Elite & Curated Inventory" },
              { icon: icon8, title: "Secure & Diversified Investment" },
              { icon: icon9, title: "Capital Growth & Wealth Creation" },
              { icon: icon10, title: "Your key to Limitless Experiences" },
              { icon: icon11, title: "Flexible OWNership & Easy Exit" },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                
                <div  className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                    <img src={item.icon} className="w-8 h-8" alt={item.title} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="w-full px-4 sm:px-16 py-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6 relative">
          Blogs
        </h2>
        {loadingBlogs ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
              {allBlogs.slice(0, 6).map((project, index) => (
                <BlogCard key={index} blog={project} />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Link
                to="/blog"
                onClick={ScrollToTop}
                className="bg-[#122F6B] hover:bg-[#12306be9] uppercase text-white px-6 py-3 rounded-lg shadow-md"
              >
                View More
              </Link>
            </div>
          </>
        )}
      </section> */}
    </>
  );
};

export default HomePage;
