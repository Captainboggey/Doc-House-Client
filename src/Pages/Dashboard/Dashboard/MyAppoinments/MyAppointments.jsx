import React from 'react';

import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';

const MyAppointments = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { data: appointments = [] } = useQuery({
        queryKey: ['appointments'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/appointments/${user.email}`)
            return result.data
        }
    })
    return (
        <div>
            <h2 className="text-3xl font-bold mt-10 ml-10">My Appointments: </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                            appointments.map((appointment,i)=><tr key={appointment._id}>
                                <th>{i+1}</th>
                                <td>{appointment.name}</td>
                                <td>{appointment.service}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.date}</td>
                            </tr>)
                        }
                  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;