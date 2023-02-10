import React from 'react';
import CountUp from 'react-countup';

const Figures = () => {

    let data = [
        {
            figure: '49',
            unit: 'k',
            text: 'users'
        },
        {
            figure: '2.2',
            unit: 'k',
            text: 'enterprise subscribers'
        },
        {
            figure: '17',
            unit: '',
            text: 'countries'
        },
        {
            figure: '96',
            unit: '%',
            text: 'success rate'
        },
    ]
    return (
        <div className='w-full pt-24 pb-14'>
            <div className="mxw-sm flex items-center gap-8 flex-wrap justify-evenly">
                {
                    data?.map(i => (
                        <div className='text-center space-y-3'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:font-black text-gray-100'>
                                <CountUp start={0} end={i?.figure} />
                                {i?.unit}
                            </h2>
                            <p className='text-gray-50 font-thin text-lg md:text-xl'>{i.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Figures;
