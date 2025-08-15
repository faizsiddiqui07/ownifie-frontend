import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { IoMdCall, IoIosMail } from "react-icons/io";
// import User from "../assets/images/UserImage.jpg";

const ChannelPartner = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#f9fafc] to-[#e8f0fb] py-16">
      <section className="px-6 sm:px-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#122F6B] mb-4">
          Connect With Your Agent Today
        </h2>
        <p className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          Find a dedicated agent near you to help with your needs. Reach out via email or phone — we're here to guide you.
        </p>

        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {[...Array(9)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="group bg-white rounded-2xl p-6 mx-2 mb-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="w-28 h-28 mx-auto mb-4">
                  <img
                    src={User}
                    loading="lazy"
                    alt="Agent"
                    className="w-full h-full object-cover rounded-full border-4 border-[#d08e02] shadow-sm"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Khaan Aamir</h3>
                <p className="text-sm text-gray-500 mb-4">Lucknow</p>
                <div className="flex justify-center gap-6">
                  <a
                    href="mailto:info@ownifie.com"
                    className="text-[#d08e02] text-3xl hover:text-[#b57402] transition"
                  >
                    <IoIosMail />
                  </a>
                  <a
                    href="tel:+919119897776"
                    className="text-[#d08e02] text-3xl hover:text-[#b57402] transition"
                  >
                    <IoMdCall />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ChannelPartner;
