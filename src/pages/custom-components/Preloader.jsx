import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo3.webp";

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 3000);
    const hideTimer = setTimeout(() => setShow(false), 3000);
    
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 flex flex-col justify-center items-center bg-white z-50 transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <div className="relative w-48 sm:w-72 md:w-96 mb-6 animate-pulse-slow">
        <img 
          src={logo} 
          className="w-full h-full object-contain" 
          alt="OWNiFiE Logo" 
        />
        {/* <div className="absolute inset-0 rounded-full border-4 border-[#FF9933] border-t-transparent animate-spin-slow"></div> */}
      </div>
      
      <div className="text-center space-y-3">
        <p className="text-base sm:text-lg md:text-xl text-[#122F6B] font-medium tracking-wider animate-slide-up delay-100">
          Redefine Ownership . Redesign Life
        </p>
        <p className="text-sm sm:text-base text-[#122F6B]/80 font-light tracking-widest animate-slide-up delay-200">
          Powered by <span className="font-semibold text-[#972608]">BUILDiFIE</span>
        </p>
      </div>
      
      <div className="absolute bottom-8 w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#972608] rounded-full animate-progress" 
          style={{ animationDuration: '2.8s' }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;