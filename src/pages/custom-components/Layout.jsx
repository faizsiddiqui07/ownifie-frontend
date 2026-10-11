import React from "react";
import Header from "./Header";
import PixelPageView from "./PixelPageView";

const Layout = ({ children }) => {
  return (
    <div className="w-full font-sans bg-white">
      <PixelPageView />
      <Header />
      <main className="pt-[75px]">{children}</main>
    </div>
  );
};

export default Layout;
