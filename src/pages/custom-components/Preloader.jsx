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

import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo3.webp";
import { Typewriter } from "react-simple-typewriter";

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white text-[#FF9933] z-50">
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808] tracking-wide animate-fadeIn">
        {/* <Typewriter words={["OWNiFiE"]} loop={1} cursor={false} /> */}
        <img src={logo} alt="" />
      </h1>
      <p className="mt-4 text-sm sm:text-lg text-[#122F6B]/70 tracking-widest animate-fadeIn delay-500">
        Redefine Ownership. Redesign Life.
      </p>
      <p className="mt-4 text-sm sm:text-lg font-semibold text-[#122F6B]/70 tracking-widest animate-fadeIn delay-500">
        Powered By BUILDiFIE
      </p>
    </div>
  );
};

export default Preloader;
