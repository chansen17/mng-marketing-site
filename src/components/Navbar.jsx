'use client';
import React, { useState } from 'react';

const Navbar = () => {
    
    const [toggled, setToggled] = useState(false);

    const navToggled = () => setToggled(!toggled);

    return (
        <div className='relative'>
        <div className='py-6 w-full bg-black'>
            <nav className='mxw flex items-center justify-between'>
                <div className='hidden md:flex items-center gap-5'>
                    <a className='text-gray-100 hover:text-white hover:font-medium' href="#">Features</a>
                    <a className='text-gray-100 hover:text-white hover:font-medium' href="#">Pricing & Plans</a>
                </div>
                <div id="logo" className='text-2xl md:text-3xl text-gray-200 font-bold capitalize'>
                    mng.
                </div>
                <div className="hidden md:flex items-center gap-5">
                    <a className='text-gray-100 hover:text-white hover:font-medium' href="#">English</a>
                    <a href="#" className='inline-block py-3 px-5 border-2 border-white text-white'>Sign Up</a>
                </div>
                <button onClick={navToggled} className="inline-block md:hidden bg-none border-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
                </button>
            </nav>
        </div>
        {toggled && (
            <div className="animate animate__animated animate__fadeInRight animate__faster h-screen fixed w-3/4 md:w-1/3 top-0 right-0 bg-black/90 backdrop-blur-sm border-l-2 border-l-gray-200 shadow-2xl shadow-black z-20">
                <div className="w-full px-5">
                    <button onClick={navToggled} className='group inline-flex items-center justify-between py-4 gap-5 text-xl sm:telg-2xl md:text-3xl text-gray-200 font-black hover:text-blue-600 duration-300' href="">
                        <span>Close</span>
                        <span className="duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-7 h-7 md:w-9 md:h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </span>
                    </button>
                </div>
                <div className="w-full h-full flex flex-col space-y-2 py-10 px-5 divide-y-2">
                    <a className='group inline-flex items-center justify-between py-4 gap-5 text-xl sm:text-2xl lg:text-3xl text-gray-200 font-black hover:text-blue-600 duration-300' href="">
                        <span>Home</span>
                        <span className="duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </a>
                    <a className='group inline-flex items-center justify-between py-4 gap-5 text-xl sm:text-2xl lg:text-3xl text-gray-200 font-black hover:text-blue-600 duration-300' href="">
                        <span>Features</span>
                        <span className="duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </a>
                    <a className='group inline-flex items-center justify-between py-4 gap-5 text-xl sm:text-2xl lg:text-3xl text-gray-200 font-black hover:text-blue-600 duration-300' href="">
                        <span>Pricing & Plans</span>
                        <span className="duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </a>
                    <a className='group inline-flex items-center justify-between py-4 gap-5 text-xl sm:text-2xl lg:text-3xl text-gray-200 font-black hover:text-blue-600 duration-300' href="">
                        <span>Sign up</span>
                        <span className="duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </a>
                    <a className='group inline-flex items-center justify-between py-4 gap-5 text-xl sm:text-2xl lg:text-3xl text-gray-200 font-black hover:text-blue-600 duration-300' href="">
                        <span>English</span>
                        <span className="duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        )}
        </div>
    );
}

export default Navbar;
