import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { pixelTrack } from "@/lib/metaPixel";

// SPA me route badalne par browser page reload nahi karta, isliye Meta ko
// har route change par PageView khud bhejna padta hai. Pehla PageView
// index.html ka snippet already bhej chuka hota hai, use dobara nahi bhejte.
const PixelPageView = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    pixelTrack("PageView");
  }, [pathname]);

  return null;
};

export default PixelPageView;
