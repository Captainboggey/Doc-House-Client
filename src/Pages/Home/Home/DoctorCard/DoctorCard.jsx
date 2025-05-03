import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaCalendar, FaLocationArrow, FaLocationPin } from 'react-icons/fa6';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';



const DoctorCard = () => {
    const axiosPublic = useAxiosPublic()
    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const result = await axiosPublic.get('/doctors/CosmeticDentist')
            return result.data
        }
    })
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className="text-4xl font-extrabold my-10">Our Expert Doctors</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className='grid md:grid-cols-3 justify-center my-10'>
                {
                    doctors.map(doctor => <div key={doctor._id} className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={doctor.image}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body  ">
                            <h2 className="card-title text-left">{doctor.name}</h2>
                            <p>Specialization: {doctor.specialization}</p>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={doctor.rating}
                                readOnly
                            />
                            <div className='flex items-center gap-2 mt-5'>
                                <FaLocationPin className=''></FaLocationPin>
                                <p>{doctor.location}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaCalendar></FaCalendar>
                                <p>{doctor.available_date}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                            <TbCoinTakaFilled className='text-xl' />
                                <p>{doctor.charge_amount}</p>
                            </div>
                            <div className="card-actions w-full mt-5">
                                <Link to={`/doctorProfile/${doctor._id}`}><button className="btn  bg-white hover:text-white hover:bg-[#F7A582] border-[#F7A582] text-[#F7A582] w-full">View Profile</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default DoctorCard;