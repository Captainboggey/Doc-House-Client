import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic.jsx';
import useAxiosSecure from './useAxiosSecure.jsx';

const useDoctors = () => {
    const axiosSecure =useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const{data:doctors=[]}=useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/doctors')
            return res.data
        }
    })
    return [doctors]
};

export default useDoctors;