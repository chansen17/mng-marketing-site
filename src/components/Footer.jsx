import React from 'react';

const Footer = () => {
    return (
        <div className='w-full py-12'>
            <div className="mxw flex items-center justify-between gap-6">
                <div className='text-3xl md:text-4xl lg:text-5xl text-gray-100 font-bold'>mng.</div>
                <div className="hidden md:flex items-center gap-4">
                    <a className='text-gray-200 font-medium' href="#">Features</a>
                    <a className='text-gray-200 font-medium' href="#">Solutions</a>
                    <a className='text-gray-200 font-medium' href="#">Plans & Pricing</a>
                </div>
                <div className="flex items-center gap-4">
                    <a className='text-gray-200 font-medium' href="#">Features</a>
                    <a className='text-gray-200 font-medium' href="#">Plans & Pricing</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
