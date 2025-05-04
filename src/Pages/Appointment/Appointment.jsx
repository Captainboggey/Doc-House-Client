import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import c1 from "../../assets/appointment/chair 1.png"
import useDoctors from '../../Hooks/useDoctors';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import p1 from "../../../src/assets/appointment/006-broken-tooth.png"
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic.jsx';
import Swal from 'sweetalert2';


const Appointment = () => {
    const [open, setOpen] = React.useState(false);
    const axiosPublic = useAxiosPublic()
    const {user}=useAuth()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [value, onChange] = useState('');
    const [doctors] = useDoctors()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const {
        register,
        handleSubmit,
        watch,reset,
        formState: { errors },
      } = useForm()
      const onSubmit =async (data) => {
        const appointInfo ={
            name : data.name,
            date: data.date,
            time: data.time,
            email: data.email,
            phone: data.phone,
            service: data.service
        }
        const result = await axiosPublic.post('/appointments',appointInfo)
        if(result.data.insertedId){
            reset()
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
                title: "Appointment added Successfully"
              });
        }
      }

    // console.log(value)
    return (
        <div>
            <div
                className="hero h-[500px] banner-img"

            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">

                        <p className="mb-5">
                            Home / Appointment
                        </p>
                        <h1 className="mb-5 text-5xl font-bold">Appointment</h1>

                    </div>
                </div>
            </div>
            <div className='my-20 flex justify-center gap-20'>
                <div className=''>
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div>
                    <img src={c1} alt="" />
                </div>
            </div>
            <div className='grid gap-10 md:grid-cols-3 my-20'>
                {
                    doctors.map(doctor => <React.Fragment key={doctor._id}>
                        <div variant="outlined" onClick={handleClickOpen} className="card card-side bg-base-200 p-4 shadow-sm">
                            <figure>
                                <img
                                    src={p1}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{doctor.specialization}</h2>

                                <div className="card-actions justify-end">

                                </div>
                            </div>
                        </div>




                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogTitle id="responsive-dialog-title">
                                {doctor.specialization}
                            </DialogTitle>
                            <DialogContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                        
                                        <input {...register('service')} type="text" placeholder="Service" className="input input-bordered" defaultValue={doctor.specialization} required />
                                    </div>
                                <div className="form-control">
                                        
                                        <input {...register('date')} type="text" placeholder="date" className="input input-bordered" defaultValue={value?value:'please set date from calender'} required />
                                    </div>
                                    <div className="form-control">
                                        
                                        <input type="text" {...register('time')} placeholder="time" className="input input-bordered"  required />
                                    </div>
                                    <div className="form-control">
                                       
                                        <input type="text" {...register('name')} placeholder="First Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        
                                        <input type="text" {...register('phone')} placeholder="Phone Number" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        
                                        <input type="email" {...register('email')} placeholder="email" className="input input-bordered" defaultValue={user?.email} required />
                                    </div>
                                    
                                    <DialogActions>
                                        <input autoFocus onClick={handleClose} type="submit" className='btn' value={'Submit'} />
                                       

                                    </DialogActions>

                                </form>
                            </DialogContent>

                        </Dialog>
                    </React.Fragment>)
                }
            </div>

        </div>
    );
};

export default Appointment;