import Image from "next/image";
import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div className="about-head flex justify-center items-center mt-[2rem] text-[3rem] text-[#967357]">About Us</div>
      <div className="about-wrapper flex justify-center items-center h-[90vh]">
        <div className="about-left w-[50%] text-[#967357] px-[2.5rem] text-[1.2rem]">
          <span>
            Welcome to Toronto Cupcake, where sweetness meets perfection! With a
            passion for baking, we've been crafting delectable cupcakes for over
            a decade. Our dedication to quality shines in every bite, making us
            a go-to for weddings, birthdays, and all your special moments.
            Explore our extensive menu or collaborate with us to create a
            personalized treat that truly reflects your celebration. Join us on
            a journey of irresistible flavors and unforgettable memories at
            Toronto Cupcake.
          </span>
        </div>
        <div className="about-right w-[50%] flex justify-center items-center ">
          <div className="bgDiv bg-[#fcba03] rounded-[300px] h-[100%]">
            <Image src="/assets/images/about.png" height={300} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
