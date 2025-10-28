import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook.webp";
import instagramIcon from "../../assets/images/instagram.webp";
import linkedInIcon from "../../assets/images/linkedin.webp";
import twitterIcon from "../../assets/images/twitter.webp";
import threadsIcon from "../../assets/images/threads.webp";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/images/logo3.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-16 py-12">
        {/* Brand Section */}

        <div className="flex flex-col justify-center items-center mb-8">
          <img src={logo} alt="Ownifie Logo" className="h-10 w-auto mb-2" />
          <p className="text-gray-400 text-sm text-center"> 
            Transforming digital experiences with innovative solutions and
            cutting-edge technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 x gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold md:mb-2">Company</h3>
              <Link
                to="/about-us"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                Contacts
              </Link>
              {/* <Link
                to="/blog"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                Blog
              </Link> */}
            </div>
          </div>

          {/* Policies Section */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-2 md:mb-6">Policies</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/refund-policy"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                Refund Policy
              </Link>
              <Link
                to="/disclaimer"
                className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
              >
                Disclaimer
              </Link>
            </div>
          </div> */}

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 md:mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <IoMdMail className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@ownifie.com"
                  className="text-gray-400 hover:text-[#972608] transition-colors duration-200 break-words"
                >
                  info@ownifie.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919119897770"
                  className="text-gray-400 hover:text-[#972608] transition-colors duration-200"
                >
                  +91 9119897770
                </a>
              </div>
              <div className="flex items-start">
                <FaLocationDot className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Lucknow</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 md:mb-6">Follow Us</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Stay connected with us on social media for updates and news.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/share/1Cv6ypeZj9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookIcon}
                  loading="lazy"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </Link>
              <Link
                to="https://x.com/OWNiFiE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitterIcon}
                  loading="lazy"
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/company/ownifie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedInIcon}
                  loading="lazy"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </Link>
              <Link
                to="https://www.instagram.com/ownifie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  loading="lazy"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </Link>
              <Link
                to="https://www.threads.com/@ownifie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={threadsIcon}
                  loading="lazy"
                  alt="Threads"
                  className="w-8 h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-3 text-center text-gray-400">
        <p>
          © 2025 Ownifie |{" "}
          <span>Developed by NeuroCort. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
