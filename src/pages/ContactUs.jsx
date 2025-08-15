import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Form from "./custom-components/Form";

const ContactUs = () => {
  return (
    <div className="w-full space-y-16 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 sm:px-16 py-12">
        <div data-aos="zoom-in" className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <div className="w-44 sm:w-64 h-[2px] bg-[#122F6B] mx-auto" />
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Explore our Mission, our Principles and the Passion behind what we do 
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div data-aos="zoom-in-right" className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">
                Reach Out
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your journey starts here. Get in touch with our team to learn more—we’re just a message away.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 text-gray-700">
                <MdEmail className="text-2xl text-[#122F6B]" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a
                    href="mailto:info@ownifie.com"
                    className="text-indigo-500 hover:underline text-sm"
                  >
                    info@ownifie.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <MdPhone className="text-2xl text-[#122F6B]" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <a
                    href="tel:+919119897770"
                    className="text-indigo-500 hover:underline text-sm"
                  >
                    +91 9119897770
                  </a>
                </div>
              </div>

              <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl border mt-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.6092564937308!2d81.00190507522203!3d26.848142976685764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be396867ab099%3A0x7207c96620a37c1f!2sBuildifie!5e1!3m2!1sen!2sin!4v1750832740819!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div data-aos="zoom-in-left" className="p-8 bg-white shadow-xl rounded-xl border border-gray-100">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Enquiry Now
            </h2>
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;