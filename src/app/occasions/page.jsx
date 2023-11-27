import OffTheShelf from '@/components/OffTheShelf'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* ******************************************************************** */}
            <div className='flex justify-center h-[90vh]'>
                <div className='flex flex-col justify-center items-center w-[30%]'>
                    <span className='text-black'>
                        A celebration of life, love, and all of life's memorable events
                    </span>
                    <span className='text-black'>
                        occasions
                    </span>
                    <span className='text-black'>
                        ......................
                    </span>
                    <span className='text-black'>
                        Toronto Cupcake would love to help make your special occasion one to remember.
                    </span>
                    <span className='text-black'>
                        Wedding and Engagement - we have over 1500 different combinations with our standard offerings but if you want something special we would love to make it happen. We have many different sized and shaped cupcake stands available for your use or we can design and make one just for you.
                    </span>
                    <span className='text-black'>
                        Birthdays/Anniversaries - Themed birthdays or anniversaries are all the rage. From Cookie Monster to The Bachelorette we have done them all.
                    </span>
                    <span className='text-black'>
                        ......................
                    </span>
                </div>

                <div className='flex justify-center'>
                    <img src="/assets/images/wedding.webp" color='white' />
                </div>
            </div>
            {/* **************************************************** */}
            <div className='flex '>
            <OffTheShelf/>

            </div>
        </div>
    )
}

export default page