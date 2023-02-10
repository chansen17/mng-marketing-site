import React from 'react';

const BigCTA = () => {
    return (
        <div className='relative w-full h-[50vh] md:h-[70vh] grid place-items-center bg-gradient-to-r from-blue-600 to-blue-600/80'>
            <img className='h-full w-full absolute object-cover inset-0 object-bottom -z-10' src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="mxw-sm">
                <div className='flex flex-wrap items-center gap-12'>
                    <h2 className='text-4xl md:text-5xl lg:text-7xl text-gray-100 font-bold'>More Features added as your team grows</h2>
                    <div className='flex items-center gap-4'>
                        <span className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-100'>Don't Wait</span>
                        <div className='h-14 w-14 md:h-20 md:w-20 rounded-full relative bg-gray-100 shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-14 w-14 absolute top-1/2 -left-3 -translate-y-1/2 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigCTA;
