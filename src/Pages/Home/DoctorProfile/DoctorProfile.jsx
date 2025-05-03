import React from 'react';
import '../../../Componenets/Navbar/HomeBanner/Banner.css'
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { FaCalendar, FaLocationPin } from 'react-icons/fa6';

const DoctorProfile = () => {
    const { name, _id, specialization, rating, location, available_date, charge_amount, about, education, work_experience, services, awards, review, business_hour, image } = useLoaderData()
    console.log(name)
    return (
        <div>
            <div
                className="hero h-[500px] banner-img"

            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">

                        <p className="mb-5">
                            Home / Doctor Profile
                        </p>
                        <h1 className="mb-5 text-5xl font-bold">Doctor Profile</h1>

                    </div>
                </div>
            </div>
            <div className='lg:flex gap-5 my-10 p-10 bg-base-300'>
                <img src={image} alt="" />
                <div>
                    <h2 className="font-extrabold text-3xl">{name}</h2>
                    <h2>{specialization}</h2>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <div className='flex items-center gap-2 mt-5'>
                        <FaLocationPin className=''></FaLocationPin>
                        <p>{location}</p>
                    </div>
                    <div className='flex items-center gap-2 mt-10'>
                        <FaCalendar></FaCalendar>
                        <p>{available_date}</p>
                    </div>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box  justify-evenly my-10">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Overview" defaultChecked /><div className="tab-content border-base-300 bg-base-100 p-20">
                    <h2 className="text-xl font-bold">About Me</h2>
                    <p className='my-5'>{about}</p>
                    <div className='flex justify-between '>
                        {/* div1 */}
                        <div>
                            <h2 className='text-xl font-bold'>Education</h2>

                            <li><p className='my-5'>{education}</p></li>
                            <h2 className='text-xl font-bold'>Work & Experience</h2>

                            <li><p className='my-5'>{work_experience}</p></li>
                            <h2 className='text-xl font-bold my-5'>Services</h2>


                            {
                                services.map((service, i) => <li key={i}>{service}</li>)
                            }

                        </div>
                        {/* div 2 */}
                        <div>
                            <h2 className='text-xl font-bold my-5'>Awards</h2>
                            {
                                awards.map((award, i) => <li key={i}>{award}</li>)
                            }
                            <h2 className='text-xl font-bold my-5'>Specialization</h2>

                            <li><p className='my-5'>{specialization}</p></li>

                        </div>


                    </div>
                </div>
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Locations" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <h2 className='text-xl font-bold my-5'>Locations</h2>

                    <p>{location}</p>
                    <h2 className='text-xl font-bold my-5'>Charge</h2>
                    <p>{charge_amount} Taka</p>
                </div>
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Reviews" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <h2 className='text-xl font-bold my-5'>Reviews</h2>
                    <div className='flex items-center gap-4'>
                        Rating:

                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                        Count: {review.count}
                    </div>
                </div>
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Business Hour" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <h2 className='text-xl font-bold my-5'>Business Hour</h2>
                    <li><h2>Monday = {business_hour.Monday}</h2> </li>
                    <li> <h2>Tuesday = {business_hour.Tuesday}</h2></li>
                    <li><h2>Wednesday = {business_hour.Wednesday}</h2></li>

                    <li><h2>Thursday = {business_hour.Thursday}</h2></li>
                    <li> <h2>Friday = {business_hour.Friday}</h2></li>
                    <li><h2>Saturday = {business_hour.Saturday}</h2></li>
                    <li><h2>Sunday = {business_hour.Sunday}</h2></li>

                </div>
            </div>

        </div>
    );
};

export default DoctorProfile;