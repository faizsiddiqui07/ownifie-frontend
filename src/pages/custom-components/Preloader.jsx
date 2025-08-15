// import React, { useEffect, useState } from "react";
// import { Typewriter } from "react-simple-typewriter";

// const Preloader = () => {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShow(false), 2800);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-[#dce6f5] via-[#f5f0e3] to-[#fbe7d3] text-[#122F6B] z-50">
//       <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#122F6B] via-[#d08e02] to-[#972608] tracking-wide animate-fadeIn">
//         <Typewriter words={["OWNiFiE"]} loop={1} cursor={false} />
//       </h1>
//       <p className="mt-4 text-sm sm:text-lg text-[#122F6B]/70 tracking-widest animate-fadeIn delay-500">
//         Redefine Ownership. Redesign Life.
//       </p>
//     </div>
//   );
// };

// export default Preloader;

// import React, { useEffect, useState } from "react";
// import { Typewriter } from "react-simple-typewriter";

// const Preloader = () => {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShow(false), 2800);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-400 text-[#FF9933] z-50">
//       <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808] tracking-wide animate-fadeIn">
//         <Typewriter words={["OWNiFiE"]} loop={1} cursor={false} />
//       </h1>
//       <p className="mt-4 text-sm sm:text-lg text-[#122F6B]/70 tracking-widest animate-fadeIn delay-500">
//         Redefine Ownership. Redesign Life.
//       </p>
//     </div>
//   );
// };

// export default Preloader;

import React, { useEffect, useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Preloader = () => {
  const [show, setShow] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log("Play error:", err));
      }
      // Remove listener so it runs only once
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    // Wait for first user interaction
    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    const timeout = setTimeout(() => {
      setShow(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 5800);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50 overflow-hidden">
      {/* Background music */}
      <audio ref={audioRef} src="/demo.mpeg" preload="auto" />

      {/* Tiranga stripes */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/3 bg-[#ff9933cd] flex items-end justify-center pb-2">
          <p className="text-xl sm:text-3xl font-bold text-white">Launching</p>
        </div>
        <div className="h-1/3 bg-white flex justify-center items-center" />
        <div className="h-1/3 bg-[#138808d4] flex items-start justify-center pt-2">
          <div className="flex flex-col items-center">
            <p className="text-lg sm:text-xl font-bold text-white">Celebrating</p>
            <p className="text-lg sm:text-5xl font-bold text-blue-700">
              Independence Day
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808] tracking-wide">
          <Typewriter words={["OWNiFiE"]} loop={1} cursor={false} />
        </h1>
        <p className="mt-4 text-sm sm:text-lg font-medium text-[#000080] tracking-widest bg-white/80 px-2 rounded">
          Redefine Ownership. Redesign Life.
        </p>
        <span className="text-xl sm:text-3xl px-3 text-[#000080] font-semibold bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
          <span className="text-lg">A Unit of</span> BUILDiFIE
        </span>
      </div>
    </div>
  );
};

export default Preloader;
