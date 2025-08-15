import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FreeMode, Autoplay } from "swiper/modules";
import Card from "./Card";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import axios from "axios";
import { base_url } from "@/config/config";

const OurProjectsSlider = ({ excludeProjectId }) => {
  const [allProjects, setAllProjects] = useState([]);

  const get_projects = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/allProjects`);

      const filteredProjects = excludeProjectId
        ? data.data.filter((project) => project._id !== excludeProjectId)
        : data.data;

      const reversedProjects = [...filteredProjects].reverse();

      setAllProjects(reversedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_projects();
  }, [excludeProjectId]);

  return (
    <section className="w-full px-4 sm:px-16 pt-2 pb-6 sm:py-8">
      <h2 className=" text-3xl sm:text-4xl font-semibold mb-6 relative">
        Our Projects
        {/* <div className="w-40 sm:w-[200px] h-[1.5px] bg-[#122F6B] mx-auto mt-1" /> */}
      </h2>
      <div className="mx-auto">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {allProjects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <Card data={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to="/projects"
          onClick={ScrollToTop}
          className="bg-[#122F6B]  hover:bg-[#12306bf2] transition-all uppercase text-white px-6 py-3 rounded-lg shadow-md"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default OurProjectsSlider;
