"use client";
import React from "react";
import data from "../../app/categories/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const page = () => {
  return (
    <div className="cupcake-wrapper pt-[2rem]">
      <div className="cupcake-header text-black flex justify-center  text-[3rem] font-black">
        <span>Explore Wide varities of cup-cakes!</span>
      </div>
      <div className="categories flex flex-col justify-center items-center mt-[2rem]">
        <div className="chocolate text-black mt-[1rem] text-[2rem]">
          <span>Chocolate</span>
        </div>
        <Swiper
          breakpoints={{
            1400: {
              // width: 768,

              slidesPerView: 3,
            },
            900: {
              // width: 768,
              slidesPerView: 2,
            },
            500: {
              // width: 768,
              slidesPerView: 1,
            },
          }}
          style={{ paddingBottom: "30px" }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {data[0].chocolate.map((card, index) => (
            <SwiperSlide className="flex justify-center" key={index}>
              <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="pw flex flex-col items-center pb-10">
                  <Image
                    loading="lazy"
                    src={card.img}
                    width={160}
                    height={160}
                    alt="chocolate"
                    className="rounded-full shadow-lg"
                  />
                  <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <div className="s-handles flex mt-4 space-x-3 md:mt-6 text-black">
                    <div onClick={()=>{alert("Added to card")}}>
                      <ShoppingCartIcon/>
                    </div>
                
                    <span>${card.price}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="vanilla text-black mt-[1rem] text-[2rem]">
          <span>Vanilla</span>
        </div>
        <Swiper
          breakpoints={{
            1400: {
              // width: 768,

              slidesPerView: 3,
            },
            900: {
              // width: 768,
              slidesPerView: 2,
            },
            500: {
              // width: 768,
              slidesPerView: 1,
            },
          }}
          style={{ paddingBottom: "30px" }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {data[0].vanilla.map((card, index) => (
            <SwiperSlide className="flex justify-center" key={index}>
              <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="pw flex flex-col items-center pb-10">
                  <Image
                    loading="lazy"
                    src={card.img}
                    width={160}
                    height={160}
                    alt="chocolate"
                    className="rounded-full shadow-lg"
                  />
                  <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <div className="s-handles flex mt-4 space-x-3 md:mt-6 text-black">
                  <div onClick={()=>{alert("Added to card")}}>
                      <ShoppingCartIcon/>
                    </div>
                    <span>${card.price}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="vanilla text-black mt-[1rem] text-[2rem]">
          <span>Red Velvet</span>
        </div>
        <Swiper
          breakpoints={{
            1400: {
              // width: 768,

              slidesPerView: 2,
            },
            900: {
              // width: 768,
              slidesPerView: 2,
            },
            500: {
              // width: 768,
              slidesPerView: 1,
            },
          }}
          style={{ paddingBottom: "30px" }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {data[0].redvelvet.map((card, index) => (
            <SwiperSlide className="flex justify-center" key={index}>
              <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="pw flex flex-col items-center pb-10">
                  <Image
                    loading="lazy"
                    src={card.img}
                    width={160}
                    height={160}
                    alt="chocolate"
                    className="rounded-full shadow-lg"
                  />
                  <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <div className="s-handles flex mt-4 space-x-3 md:mt-6 text-black">
                  <div onClick={()=>{alert("Added to card")}}>
                      <ShoppingCartIcon/>
                    </div>
                    <span>${card.price}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="vanilla text-black mt-[1rem] text-[2rem]">
          <span>Fudge</span>
        </div>
        <Swiper
          breakpoints={{
            1400: {
              // width: 768,

              slidesPerView: 2,
            },
            900: {
              // width: 768,
              slidesPerView: 2,
            },
            500: {
              // width: 768,
              slidesPerView: 1,
            },
          }}
          style={{ paddingBottom: "30px" }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {data[0].fudge.map((card, index) => (
            <SwiperSlide className="flex justify-center" key={index}>
              <div className="main w-[300px] h-[300px] mt-[2rem] bg-white flex justify-center items-center border border-gray-200 pt-[1rem] rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="pw flex flex-col items-center pb-10">
                  <Image
                    loading="lazy"
                    src={card.img}
                    width={160}
                    height={160}
                    alt="chocolate"
                    className="rounded-full shadow-lg"
                  />
                  <h5 className="title mb-1 text-xl font-large text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <div className="s-handles flex mt-4 space-x-3 md:mt-6 text-black">
                  <div onClick={()=>{alert("Added to card")}}>
                      <ShoppingCartIcon/>
                    </div>
                    <span>${card.price}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="vanilla"></div>
        <div className="redvelvet"></div>
        <div className="fudge"></div>
      </div>
    </div>
  );
};

export default page;
