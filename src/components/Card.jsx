import React from "react";

const Card = () => {
  return ( 
    <div className="flex justify-center item-center mb-[2rem]">
      <div className='flex items-center mx-[2rem] w-[450px] h-[300px] border card rounded-[30px] bg-[url("https://m.media-amazon.com/images/I/81nBRF1g4mS._SX679_.jpg")] bg-cover'>
        <h1 className="text-[50px]">Holiday</h1>
      </div>
      <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aggiesbakery.com%2Fproduct%2Fretirement-cake-3%2F&psig=AOvVaw2B9j8qzZ-R8VISD4tRq-HY&ust=1701170616451000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjD18SI5IIDFQAAAAAdAAAAABAu")] bg-contain'>
        <h1 className="text-[50px]">Special Events</h1>
      </div>
      <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("/assets/images/hero-giftboxwebp.webp")] bg-contain'>
        <h1 className="text-[50px]">Festivals</h1>
      </div>
    </div>
  );
};

export default Card;
