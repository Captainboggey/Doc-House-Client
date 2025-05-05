import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic.jsx';
import useAxiosSecure from './useAxiosSecure.jsx';

const useDoctors = () => {
    const axiosSecure =useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const{data:doctors=[],refetch}=useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/doctors')
            return res.data
        }
    })
    return [doctors,refetch]
};

export default useDoctors;