import React from 'react'
import Image from '../banner.png'
function Banner() {
    return (
        <div className={`bg-[url(${Image})] h-[60vh] bg-center bg-cover flex items-end`}>
            <div className='text-3xl text-white p-3 bg-orange-200 bg-opacity-50 w-full flex justify-center'>Spider-Man: No Way Home</div>
        </div>
    )
}

export default Banner