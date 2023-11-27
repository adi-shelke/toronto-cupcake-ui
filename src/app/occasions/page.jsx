"use client";
import Custom from "@/components/Custom";
import OffTheShelf from "@/components/OffTheShelf";
import React, { useState } from "react";

const page = () => {
  const [custom, setcustom] = useState(false);
  return (
    <div className="w-[100%]">
      {/* ******************************************************************** */}
      <div className="flex justify-center h-[90vh] items-center">
        <div className="flex flex-col justify-center items-center w-[30%]">
          <span className="text-black">
            A celebration of life, love, and all of life's memorable events
          </span>
          <span className="text-black">occasions</span>
          <span className="text-black">......................</span>
          <span className="text-black">
            Toronto Cupcake would love to help make your special occasion one to
            remember.
          </span>
          <span className="text-black">
            Wedding and Engagement - we have over 1500 different combinations
            with our standard offerings but if you want something special we
            would love to make it happen. We have many different sized and
            shaped cupcake stands available for your use or we can design and
            make one just for you.
          </span>
          <span className="text-black">
            Birthdays/Anniversaries - Themed birthdays or anniversaries are all
            the rage. From Cookie Monster to The Bachelorette we have done them
            all.
          </span>
          <span className="text-black">......................</span>
        </div>
        <div className="flex justify-center ">
          <div className="image w-[60%] ">
            <img
              src="/assets/images/wedding.webp"
              color="white"
              className="rounded-[30px]"
            />
          </div>
        </div>
      </div>
      {/* **************************************************** */}

      <div className="toggleStates flex justify-center items-center text-black  mb-[2rem]">
        <div className={`offshelf mx-[0.5rem] ${!custom ? 'underline' : ''}`} onClick={()=>setcustom(!custom)}>
          <span className="cursor-pointer text-[20px]">Off The Shelf</span>
        </div>
        <div className={`offshelf mx-[0.5rem] ${custom ? 'underline' : ''}`}onClick={()=>setcustom(!custom)}>
          <span className="cursor-pointer text-[20px]">Custom</span>
        </div>
      </div>
      <div className="flex">{custom ? <OffTheShelf /> : <Custom />}</div>
    </div>
  );
};

export default page;
