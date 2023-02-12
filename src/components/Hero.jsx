import React from 'react';

const Hero = () => {
    return (
        <div className='h-[70vh] w-full bg-black relative flex justify-end'>
            <img className='h-full object-cover sm:w-1/2 grayscale' src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='absolute -bottom-14 left-1/2 -translate-x-1/2 z-10 scale-75 md:scale-90' src="/circle-asset.png" alt="" />
            <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-black via-black/80'>
                <div className="mxw pt-16 sm:pt-24 lg:pt-28 flex items-center">
                    <div className=" text-gray-100 space-y-6">
                        <h2 className='text-[7vw] sm:text-5xl lg:text-7xl xl:text-[5vw] font-black uppercase bg-gradient-to-l from-blue-600  to-white bg-clip-text text-transparent'>Team Management meets modern teams</h2>
                        <p className='max-w-xl text-xl md:text-2xl font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel accusantium expedita?</p>
                        <div className='inline-flex items-center gap-5 group cursor-pointer'>
                            <button type="button" className='bg-none outline-none border-none text-xl md:text-2xl lg:text-3xl'>Get Started</button>
                            <div className='h-10 w-10 md:h-12 md:w-12 bg-blue-600 relative rounded-full overflow-hidden group-hover:scale-110 duration-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-10 w-10 md:w-12 md:h-12 absolute -left-2 top-1/2 -translate-y-1/2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
