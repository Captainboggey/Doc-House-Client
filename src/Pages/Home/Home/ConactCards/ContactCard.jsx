import React from 'react';
import { CiClock2, CiLocationOn, CiPhone } from 'react-icons/ci';

const ContactCard = () => {
    return (
        <div className='md:flex gap-10 justify-center my-10'>
            <div className='flex items-center justify-center gap-2 bg-[#07332F] p-10 text-white rounded-lg'>
                <div className=''>
                <CiClock2 className='text-4xl' />
                </div>
                <div className=''>
                    <h2 className="text-xl font-bold ">Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>

            </div>
            <div className='flex items-center justify-center gap-2 bg-[#F7A582] p-10 text-white rounded-lg'>
                <div className=''>
                <CiLocationOn className='text-4xl' />
                </div>
                <div className=''>
                    <h2 className="text-xl font-bold ">Our Location</h2>
                    <p>Dhanmondi 17, Dhaka -1200,<br /> Bangladesh</p>
                </div>

            </div>
            <div className='flex items-center justify-center gap-2 bg-[#07332F] p-10 text-white rounded-lg'>
                <div className=''>
                <CiPhone className='text-4xl' />
                </div>
                <div className=''>
                    <h2 className="text-xl font-bold ">Contact Us</h2>
                    <p>+88 01750 00 00 00 <br />
                    +88 01750 00 00 00</p>
                </div>

            </div>
            
        </div>
    );
};

export default ContactCard;