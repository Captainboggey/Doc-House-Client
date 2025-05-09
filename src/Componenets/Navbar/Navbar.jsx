import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Group 1.png"
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const {user,logOut}=useAuth()
    const navOptions =
    <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/appointment'}>Appointment</Link></li>
            {
                user?<li><button onClick={()=>logOut()}>Logout</button></li>:<li><Link to={'/login'}>Login</Link></li>
            }
            {
                user?<li><Link to={'/dashboard'}>Dashboard</Link></li>:''
            }
            
    </>
    return (
        <div className="navbar max-w-7xl mx-auto  bg-[#07332F] py-4 fixed z-10 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                       
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-white items-center flex "><img src={logo} alt="" /><span className='text-[#F7A582] '>Doc</span> House</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;