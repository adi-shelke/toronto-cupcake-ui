import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section flex justify-center items-center'>
        <div className="hero-text w-[50%]  h-[100%] flex items-center text-black flex justify-center flex-col">
            <div className="text w-[85%] flex justify-center text-[22px] font-black	 flex-col items-center">
             <span>Toronto Cupcakes</span>  <span>Crafting Sweet Memories, One Bite at a Time!</span>
            </div>
            <div className="explore-btn mt-[1rem]">
                <button className="bg-[#d441ed] hover:bg-[#f00] text-white font-bold py-2 px-4 rounded-full mt-[0.6rem]">
                    Explore Delicious Cup-Cakes!
                </button>
            </div>
        </div>
        <div className="hero-logo w-[50%]  h-[100%]"></div>
    </div>
  )
}

export default Hero