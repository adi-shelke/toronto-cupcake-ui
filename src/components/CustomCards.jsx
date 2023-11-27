import React from "react";

const CustomCards = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-around mb-[2rem]">
        <div className='flex items-center mx-[2rem] w-[450px] h-[300px] border card rounded-[30px] bg-[url("https://static.toiimg.com/thumb/86936449.cms?width=680&height=512&imgsize=57148")] bg-cover'>
          <h1 className="text-[30px] mt-[15rem] pl-5 text-white  italic font-bold">Birthday</h1>
        </div>
        <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("https://www.togetherv.com/blog/wp-content/uploads/2021/11/1-1.jpeg")] bg-contain'>
          <h1 className="text-[30px] mt-[15rem] pl-3 text-white  italic font-bold">Anniversary</h1>
        </div>
        {/* <div className='flex items-center px-[1rem] w-[500px] h-[300px] border card rounded-[30px] bg-[url("/assets/images/hero-giftboxwebp.webp")] bg-contain'>
          <h1 className="text-[50px]">Festivals</h1>
        </div> */}
      </div>
    </div>
  );
};

export default CustomCards;
