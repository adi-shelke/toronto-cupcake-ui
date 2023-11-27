import React from 'react'

const page = () => {
  return (
    
    <div className="max-w-md h-[55%] rounded-xl  text-black mx-auto my-7  bg-[#d6be97] p-8 shadow-md rounded-md ">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {/* Sample Cart Items */}
      <div className="mb-4 h-[300]">
        {/* Sample Item 1 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            
            <div className="ml-2">
              <h3 className="text-sm font-semibold">Product Name</h3>

              <p className="text-xs text-gray-600">Price: $19.99</p>
            </div>
          </div>    
          <span className="text-xs">Qty: 2</span>
        </div>

        {/* Sample Item 2 */}
        <div className="flex items-center justify-between mb-2">
          {/* ... */}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="flex justify-between items-center border-t pt-4">
        <p className="text-sm text-gray-600">Total Items: 3</p>
        <p className="text-lg font-semibold">$59.97</p>
      </div>

      {/* Checkout Button */}
      <button className="w-full mt-4 bg-[#967357] text-white py-2 rounded-3xl hover:bg-[#e7b86b] focus:outline-none focus:ring focus:border-blue-300">
        Checkout
      </button>
    </div>
  );
};


export default page