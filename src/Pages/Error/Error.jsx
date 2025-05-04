import React from 'react';
import e1 from "../../../src/assets/error/Screenshot 2025-05-04 153016.png"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img src={e1} alt="" />
            <div className='text-center'>
            <Link to={'/'}><button className='btn bg-[#F7A582] text-white text-2xl p-4 px-4 rounded-lg'>Back To Home</button></Link>
            </div>
            
        </div>
    );
};

export default Error;