import React from "react";

const CustomCards = () => {
  return (
    <div>
      <div className="flex justify-around px-[1rem] mb-[2rem]">
        <div className='flex items-center px-[1rem] w-[450px] h-[300px] border card rounded-[30px] bg-[url("https://t3.ftcdn.net/jpg/02/98/33/44/360_F_298334427_qZaWJGKDgvXsohim4ZdJESpbGnJzuNEa.jpg")] bg-cover'>
          <h1 className="text-[50px]">Holiday</h1>
        </div>
        <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("https://i.insider.com/5c1c3a2a01c0ea25fe026175?width=700")] bg-contain'>
          <h1 className="text-[50px]">Special Events</h1>
        </div>
        {/* <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("/assets/images/hero-giftboxwebp.webp")] bg-contain'>
          <h1 className="text-[50px]">Festivals</h1>
        </div> */}
      </div>
    </div>
  );
};

export default CustomCards;
