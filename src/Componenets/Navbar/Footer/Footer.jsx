import React from 'react';
import f1 from '../../../assets/footer/1.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside className='items-center ' >

                    <p className='text-2xl font-extrabold flex items-center gap-2 '>
                        <img src={f1} alt="" />   <span className='text-[#F7A582]'> Doc</span> House

                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br />since the printer took.
                    </p>
                    <button className='btn border-[#F7A582] bg-transparent text-[#F7A582]'>Appointment</button>

                </aside>

                <nav>
                    <h6 className="text-xl text-black font-extrabold">Quick Links</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">Departments</a>
                    <a className="link link-hover">Online Payment</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">My Account</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-black font-extrabold">Doc House Services</h6>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Diagnosis Clinic </a>
                    <a className="link link-hover">Cardiac Clinic</a>
                    <a className="link link-hover">Laboratory Analysis </a>
                    <a className="link link-hover">Gynecological Clinic </a>
                    <a className="link link-hover">Personal Counselin </a>
                    <a className="link link-hover">Dental Clinic</a>
                </nav>
                <nav>
                    <h6 className="text-xl text-black font-extrabold">Working Hours</h6>
                    <a className="link link-hover">Monday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                    <a className="link link-hover">Friday - 10 am to 7 pm</a>
                    <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                    <a className="link link-hover">Sunday - 10 am to 7 pm</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by CaptainBoogey</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;