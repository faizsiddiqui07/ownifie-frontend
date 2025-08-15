import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook.webp";
import instagramIcon from "../../assets/images/instagram.webp";
import linkedInIcon from "../../assets/images/linkedin.webp";
import twitterIcon from "../../assets/images/twitter.webp";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <ul>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-white"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li>
                <a
                  href="mailto:info@ownifie.com"
                  className="text-gray-400 hover:text-white transition flex items-center gap-x-2"
                >
                  <IoMdMail /> info@ownifie.com
                </a>
              </li>
              <li className="flex items-center gap-x-2">
                <FaPhone className="text-gray-400 hover:text-white transition" />
                <a
                  href="tel:+919119897770"
                  className="text-gray-400 hover:text-whit w-6esm: transition"
                >
                  +91 9119897770
                </a>
              </li>
              <li>
                <span className="text-gray-400 flex items-center gap-x-2">
                  <FaLocationDot /> Lucknow
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10 ">
                <img src={facebookIcon} loading="lazy" alt="facebook" />
              </Link>
              <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10">
                <img src={twitterIcon} loading="lazy" alt="twitter" />
              </Link>
              <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10">
                <img src={linkedInIcon} loading="lazy" alt="linkedIn" />
              </Link>
              <Link to="#" className="w-8 sm:w-10 h-8 sm:h-10">
                <img src={instagramIcon} loading="lazy" alt="instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 py-3 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Ownifie |{" "}
          <span>Developed by NeuroCort. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
