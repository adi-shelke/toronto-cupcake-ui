import React from 'react'

const page = () => {
  return (
    <div className='cupcake-wrapper'>
        <div className="cupcake-header text-black flex justify-center mt-[2rem] text-[3rem] font-black">
            <span>Explore Wide varities of cup-cakes!</span>
        </div>
        <div className="categories flex flex-col justify-center items-center">
            <div className="chocolate"></div>
            <div className="vanilla"></div>
            <div className="redvelvet"></div>
            <div className="fudge"></div>
        </div>
    </div>
  )
}

export default page