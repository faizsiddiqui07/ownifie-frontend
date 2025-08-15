import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full font-sans bg-white">
      <Header />
      <main className="pt-[75px]">{children}</main>
    </div>
  );
};

export default Layout;
