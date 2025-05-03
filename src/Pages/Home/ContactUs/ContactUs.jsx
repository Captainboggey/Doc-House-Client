import React from 'react';
import { FaLocationPin, FaPhone } from 'react-icons/fa6';

const ContactUs = () => {
    return (
        <div className="hero bg-[#07332F] md:h-[520px] rounded-lg text-white my-20">
            <div className="hero-content flex-col lg:justify-between lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact With Us</h1>
                    <p className="py-6">
                    Sed ut perspiciatis unde omnis iste natus error sit  voluptatem accusantium doloremque laudantium,<br /> totam rem aperiam, eaque ipsa quae ab illo inve ntore <br />veritatis et quasi.
                    </p>
                    <p className='text-xl flex gap-2 items-center mt-10'><FaPhone></FaPhone> +88 01750 14 14 14</p>
                    <p className='text-xl flex gap-2 items-center mt-10'><FaLocationPin></FaLocationPin> Dhanmondi, Dhaka, Bangladesh</p>
                </div>
                <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl text-white">
                    <div className="card-body ">
                        <fieldset className="fieldset">
                            <div className='flex gap-4'>
                                <div>
                                
                                <input type="text" className="input bg-transparent border-2 border-white" placeholder="name" />
                                </div>
                            
                            <div>
                            
                            <input type="email" className="input bg-transparent border-2 border-white" placeholder="email" />
                            </div>
                            </div>
                            <div className='flex gap-4'>
                                <div>
                                
                                <input type="text" className="input bg-transparent border-2 border-white" placeholder="Mobile Number" />
                                </div>
                            
                            <div>
                           
                            <input type="text" className="input bg-transparent border-2 border-white" placeholder="Doctor Name" />
                            </div>
                            </div>
                            <div className='flex gap-4'>
                                <div>
                                
                                <input type="text" className="input bg-transparent border-2 border-white" placeholder="Date" />
                                </div>
                            
                            <div>
                           
                            <input type="text" className="input bg-transparent border-2  border-white" placeholder="Time" />
                            </div>
                            </div>
                            
                            <button className="btn btn-neutral bg-[#F7A582] mt-4">Book Now</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;