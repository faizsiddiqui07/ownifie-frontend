import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/effect-cards";
import { EffectCube, Pagination } from "swiper/modules";
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

const HomePage = () => {
  const slides = [bannerImage1, bannerImage2, bannerImage3];
  const [allProjects, setAllProjects] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

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

  const Loader = () => (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-[#122F6B] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <>
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
          // <p>styrth</p>
        ) : (
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
              <img
                src={item.icon}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt={item.title}
              />
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

      <section className="relative flex items-center justify-center pt-6 md:pt-12 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500">
            {/* Video Container with Gradient Overlay */}
            <div className="relative w-full aspect-video h-auto ">
              <video
                src={video6}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Play/Pause Button (visible on hover) */}
              <button
                className="absolute inset-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 m-auto bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white/30 hover:border-white/50"
                onClick={(e) => {
                  const video =
                    e.currentTarget.parentElement.querySelector("video");
                  video.paused ? video.play() : video.pause();
                }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 12L6 5v14l12-7Z"
                  />
                </svg>
              </button>
            </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 cursor-default">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform  hover:shadow-xl"
            >
              <img
                src={icon4}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="Easy To Buy"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Easy To OWN
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform  hover:shadow-xl"
            >
              <img
                src={icon5}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="Fully Furnished & Professionally Managed"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Well-Furnished & Expertly Managed
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform  hover:shadow-xl"
            >
              <img
                src={icon6}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="Low Maintenance Cost"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Cost-Efficient Maintenance
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform  hover:shadow-xl"
            >
              <img
                src={icon7}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="Premium and Exclusive Inventory"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Elite & Curated Inventory
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform hover:shadow-xl"
            >
              <img
                src={icon8}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="Risk Free and Diversified Investment"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Secure & Diversified Investment
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform  hover:shadow-xl"
            >
              <img
                src={icon9}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="High Returns With High Capital Gains"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Capital Growth & Wealth Creation
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform  hover:shadow-xl"
            >
              <img
                src={icon10}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="Unlimited Holidays With Unique Exchange"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Your key to Limitless Experiences
              </span>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl transition duration-300 transform  hover:shadow-xl"
            >
              <img
                src={icon11}
                loading="lazy"
                className="w-12 sm:w-16 mb-4"
                alt="Easy To Liquidate"
              />
              <span className="text-gray-800 font-semibold text-lg">
                Flexible OWNership & Easy Exit
              </span>
            </div>
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
