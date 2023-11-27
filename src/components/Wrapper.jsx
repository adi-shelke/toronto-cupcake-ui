"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import SideNav from "./SideNav";
import Footer from "./Footer";
const Wrapper = ({ children }) => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="h-screen">
      <Nav toggle={toggle} settoggle={settoggle} />
      {children}
      <SideNav toggle={toggle} settoggle={settoggle} />
    <Footer/>
    </div>
  );
};

export default Wrapper;
