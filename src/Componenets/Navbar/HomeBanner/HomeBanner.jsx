import React from 'react';
import b1 from '../../../assets/banner/Rectangle 20075.svg'
import b2 from '../../../assets/banner/Rectangle 20076.png'
import b3 from '../../../assets/banner/Rectangle 20077.png'

const HomeBanner = () => {
    return (
        <div className="hero bg-[#07332F] min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse  ">
                <div className='flex    md:relative '>
                    <div className=''>
                        <img src={b3} className='md:absolute w-40 -top-20  ' alt="" />

                    </div>
                    <div>
                        <img src={b2} alt="" className='w-40 md:ml-24' />
                    </div>
                    <div className=''>
                        <img src={b1} alt="" className=' md:absolute -right-24 bottom-20' />
                    </div>

                </div>
                <div className='mr-10'>
                    <h1 className="text-5xl font-bold text-white">Your Best Medical <br /> Help Center</h1>
                    <p className="py-6 pr-10">
                    Lorem Ipsum is simply dummy text they are printing typesetting  has been the industry’s stardard.
                    </p>
                    <button className="btn btn-primary bg-[#F7A582] border-none p-6">All Service</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;