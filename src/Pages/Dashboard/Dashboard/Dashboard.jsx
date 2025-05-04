import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../../Componenets/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* <Navbar></Navbar> */}
            <div className='menu min-h-screen w-64 bg-green-950 text-white  '>
            <h2 className='text-center text-2xl font-extrabold'>Dashboard</h2>
                <Link to={'/'} className='mt-5 font-bold text-center '>Home</Link>
                <Link to={'/dashboard/myAppointments'} className='mt-5 font-bold text-center '>My Appointments</Link>
                
            </div>
            <div className='flex-1'>
            <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};

export default Dashboard;