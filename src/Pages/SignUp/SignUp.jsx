import React from 'react';
import l1 from "../../assets/login/login.png"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import toast, { Toaster } from 'react-hot-toast';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {
    const { signUp, updateInfo, signInWithGoogle } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        signUp(data.email, data.password)
            .then((res) => {
                updateInfo(data.name)
                    .then(res => {
                        const userInfo = {
                            email: data.email,
                            name: data.name
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
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

                                    navigate('/')
                                }
                            })

                    })





                // console.log(result.data)




                // if(res.user){

                // }


            })
    }
    const handleGoogle = () => {
        signInWithGoogle()
            .then(async (res) => {
                console.log(res.user.email)
                const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName
                }
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

                navigate('/')
                const result = await axiosPublic.post('/users', userInfo)

                // console.log(res.data)


                if (result) {
                    // console.log(res.data)
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

                    navigate('/')
                }



            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col mx-auto  lg:flex-row">
                <div className="text-center lg:text-right w-1/2">

                    <img src={l1} className=' mx-auto' alt="" />
                </div>

                <div className="card bg-base-200  justify-start flex w-full p-10 max-w-sm shrink-0 shadow-2xl">
                    <p className='text-center text-2xl font-bold'>Sign Up to Doc House</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Username</span>
                            </label>
                            <input {...register('username')} type="text" placeholder="username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input {...register('name')} type="text" placeholder="name" className="input input-bordered" required />
                        </div>


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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control w-full mt-6">
                            <button className="btn  w-full border-none text-white bg-[#F7A582]">Create Account</button>
                        </div>
                    </form>
                    <div className='my-10 text-center'>
                        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                    </div>
                    <p>Please register at first. Go to <Link to={'/login'}><span className='text-[#F7A582]'> SIGN IN</span></Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;