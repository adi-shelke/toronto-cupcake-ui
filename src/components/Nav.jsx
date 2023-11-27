"use client";
import Link from "next/link";
import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiYoutube } from "react-icons/tfi";
const Nav = ({ toggle, settoggle }) => {
  const handleClick = () => {
    if (!toggle) {
      document.getElementById("side-nav").style.left = "0%";
    } else {
      document.getElementById("side-nav").style.left = "-70%";
    }
    settoggle(!toggle);
  };
  return (
    <div id="home" className=" nav-wrapper flex justify-center items-center sticky top-0">
      <Link href="/">
      <div className="flex items-center h-full yt-logo">
      <TfiYoutube className="text-[40px] text-red-700"/>
      </div>
      </Link>
      
      <div className=" items-center bg-[*]  flex justify-center ">
        <div className="lg:text-[20px] text-white md:text-[16px]">
          <Link href="/" className="mx-[3rem] nav-link">
            Home
          </Link>
          {/* <Link href="/#event-section" className="mx-[3rem] nav-link">
            Events
          </Link> */}
          <Link href="/team" className="mx-[3rem] nav-link">
            Team
          </Link>
          <Link href="#about" className="mx-[3rem] nav-link">
            About
          </Link>
          <Link href="#contact" className="mx-[3rem] nav-link">
            Contact
          </Link>
        </div>
        <div
          className="flex justify-center items-center text-white menu-icon hidden"
          onClick={handleClick}
        >
          <TfiMenuAlt />
        </div>
      </div>
    </div>
  );
};

export default Nav;
