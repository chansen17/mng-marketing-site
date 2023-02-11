import React from 'react';

const Partnerships = () => {

    return (
        <div className='w-full py-24'>
            {/* section title */}
            <div className='py-6 space-y-6 text-center text-gray-100'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>The Power of Collabs</h3>
                <p className='text-lg md:text-xl font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="mxw grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
                <div className='md:col-span-1 relative group overflow-hidden'>
                    {/* corner */}
                    <div className="h-10 w-10 bg-gray-300 absolute -top-5 -left-5 z-20 rotate-45" />
                    <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black via-transparent group-hover:to-black z-10 opacity-50 group-hover:opacity-100 duration-500'/>
                    <img className='w-full h-[60vh] object-cover grayscale' src="https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    {/* circles */}
                    <div className='absolute -bottom-8 -right-8 rotate-45 z-10 h-12 w-12 bg-gray-300'/>
                    {/* end circles */}
                    <div className='absolute bottom-0 right-0 p-5 z-10 opacity-0 group-hover:opacity-100 delay-200 duration-500'>
                        <p className='text-white font-bold text-md md:text-lg'>Check it out {'->'}</p>
                    </div>
                </div>
                <div className='md:col-span-2 relative group overflow-hidden'>
                    {/* corner */}
                    <div className="h-10 w-10 bg-gray-300 absolute -top-5 -left-5 z-20 rotate-45" />
                    <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black via-transparent group-hover:to-black z-10 opacity-50 group-hover:opacity-100 duration-500'/>
                    <img className='w-full h-[60vh] object-cover object-center grayscale' src="https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    {/* circles */}
                    <div className='absolute -bottom-8 -right-8 rotate-45 z-10 h-12 w-12 bg-gray-300'/>
                    {/* end circles */}
                    <div className='absolute bottom-0 right-0 p-5 z-10 opacity-0 group-hover:opacity-100 delay-200 duration-500'>
                        <p className='text-white font-bold text-md md:text-lg'>Check it out {'->'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partnerships;
