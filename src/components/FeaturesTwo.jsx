import React from 'react';

const FeaturesTwo = () => {
    return (
        <div className='py-24 w-full bg-black'>
            <div className="mxw">
                <div className='flex flex-col md:flex-row items-center justify-center py-6 md:py-12 gap-6 md:gap-12 lg:gap-24 text-gray-100'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold'>Personal.</h2>
                    <p className='text-md md:text-lg font-thin text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aspernatur ullam voluptas sunt impedit cum iusto accusamus delectus, laborum fugiat facilis. Ut praesentium deserunt adipisci iusto voluptas maxime, a est!</p>
                    <button className='h-12 w-12 rounded-full bg-none border-2 border-gray-200 shrink-0'>go</button>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center py-6 md:py-12 gap-6 md:gap-12 lg:gap-24 text-gray-100'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold'>Teams.</h2>
                    <p className='text-md md:text-lg font-thin text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aspernatur ullam voluptas sunt impedit cum iusto accusamus delectus, laborum fugiat facilis. Ut praesentium deserunt adipisci iusto voluptas maxime, a est!</p>
                    <button className='h-12 w-12 rounded-full bg-none border-2 border-gray-200 shrink-0'>go</button>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center py-6 md:py-12 gap-6 md:gap-12 lg:gap-24 text-gray-100'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold'>Enteprise.</h2>
                    <p className='text-md md:text-lg font-thin text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aspernatur ullam voluptas sunt impedit cum iusto accusamus delectus, laborum fugiat facilis. Ut praesentium deserunt adipisci iusto voluptas maxime, a est!</p>
                    <button className='h-12 w-12 rounded-full bg-none border-2 border-gray-200 shrink-0'>go</button>
                </div>
            </div>
        </div>
    );
}

export default FeaturesTwo;
