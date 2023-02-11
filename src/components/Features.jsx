import React from 'react';

const Features = () => {

    let items = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),

            title: 'We support your team',
            text: "Vero veniam harum culpa earum nulla a incidunt illum. Esse alias ratione.Optio dolore impedit ad rem ducimus ad."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>

            ),
            title: 'Integrate with the missing piece with ease',
            text: "Vero veniam harum culpa earum nulla a incidunt illum. Esse alias ratione.Optio dolore impedit ad rem ducimus ad."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            ),

            title: 'We organize the structure of your digital presence',
            text: "Vero veniam harum culpa earum nulla a incidunt illum. Esse alias ratione.Optio dolore impedit ad rem ducimus ad."
        },
    ]

    return (
        <div className='py-24 w-full bg-black'>
           <div className="mxw">
                {/* section title */}
                <div className='py-6 space-y-6 text-center text-gray-100'>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>What you get with mng.</h3>
                    <p className='text-lg md:text-xl font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className='mt-14 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8'>
                    {items?.map(i => (
                        <div className='py-6 px-3 bg-zinc-900 space-y-5 hover:-translate-y-1 transition-all border-b-4 border-b-zinc-700 hover:border-b-blue-600 duration-300 cursor-pointer'>
                            {i.icon}
                            <h2 className='text-lg lg:text-xl xl:text-2xl font-bold text-gray-300'>{i.title}</h2>
                            <p className='text-md lg:text-lg text-gray-100 font-thin'>{i.text}</p>
                        </div>
                    ))}
                </div>
           </div>
        </div>
    );
}

export default Features;
