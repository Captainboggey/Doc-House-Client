import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import l1 from "../../assets/login/login.png"
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const location = useLocation();
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const moveTo =location?.state?.from.pathname || '/'
    // console.log(location)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data.password)
        signIn(data.email, data.password)
            .then(res => {
                // console.log(res)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });

                navigate(moveTo)
            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col mx-auto  lg:flex-row">
                <div className="text-center lg:text-right w-1/2">

                    <img src={l1} className=' mx-auto' alt="" />
                </div>

                <div className="card bg-base-200  justify-start flex w-full p-10 max-w-sm shrink-0 shadow-2xl">
                    <p className='text-center text-2xl font-bold'>Sign in to Doc House</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Username or Email Address</span>
                            </label>
                            <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input {...register('password')} type="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control w-full mt-6">
                            <button className="btn  w-full border-none text-white bg-[#F7A582]">Login</button>
                        </div>
                    </form>
                    <p>Please register at first. Go to <Link to={'/signup'}><span className='text-[#F7A582]'> SIGN UP</span></Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;