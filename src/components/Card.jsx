import React from "react";

const Card = () => {
  return ( 
    <div className="flex justify-center item-center mb-[2rem]">
      <div className='flex items-center mx-[2rem] w-[450px] h-[300px] border card rounded-[30px] bg-[url("https://m.media-amazon.com/images/I/81nBRF1g4mS._SX679_.jpg")] bg-cover'>
        <h1 className="text-[30px] mt-[15rem] pl-3 text-white  italic font-bold">Holiday</h1>
      </div>
      <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("/assets/images/events.avif")] bg-contain'>
        <h1 className="text-[30px] mt-[15rem] pl-3 text-white  italic font-bold">Special Events</h1>
      </div>
      <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("/assets/images/festivals.jpg")] bg-contain'>
        <h1 className="text-[30px] mt-[15rem] pl-3 text-white  italic font-bold">Festivals</h1>
      </div>
    </div>
  );
};

export default Card;
