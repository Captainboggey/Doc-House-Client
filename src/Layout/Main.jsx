import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componenets/Navbar/Navbar';
import Footer from '../Componenets/Navbar/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;