import React from 'react';

const Navbar = () => {
    return (
        <div className='py-6 w-full bg-black'>
            <nav className='mxw flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <a className='text-gray-100 hover:text-white hover:font-medium' href="#">Features</a>
                    <a className='text-gray-100 hover:text-white hover:font-medium' href="#">Pricing & Plans</a>
                </div>
                <div id="logo" className='text-xl md:text-2xl text-gray-200 font-bold capitalize'>
                    mng.
                </div>
                <div className="flex items-center gap-5">
                    <a className='text-gray-100 hover:text-white hover:font-medium' href="#">English</a>
                    <a href="#" className='inline-block py-3 px-5 border-2 border-white text-white'>Sign Up</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
