import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const imageApi = import.meta.env.VITE_image_api

const imageUploader = `https://api.imgbb.com/1/upload?key=${imageApi}`

const AddDoctor = () => {
    const axiosSecure=useAxiosSecure()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit =async (data) => {
        const image ={image: data.image[0]}
       const imageResult= await axios.post(imageUploader,image,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(imageResult.data)
        if(imageResult.data.success){
            const docInfo={
                image: imageResult.data.data.display_url,
                name: data.name,
                email: data.email,
                specialization: data.specialization
            }
            // console.log(docInfo)
            const result = await axiosSecure.post('/doctors',docInfo)
            console.log(result.data)
            if(result.data.insertedId){
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
                    title: "Doctor added successfully"
                  });
            }
        }
        
      }
    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-10">Add A New Doctor</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="Enter Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="Enter Email" className="input input-bordered" required />

                    </div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Specialty</span>

                        </div>
                        <select {...register('specialization')} className="select select-bordered">
                            <option disabled selected>OralSurgeon</option>
                            <option>CosmeticDentist</option>
                            <option>PediatricDentist</option>
                            <option>OralSurgeon</option>
                            <option>OralSurgeon</option>
                            <option>Orthodontist</option>
                            <option>GeneralDentist</option>

                        </select>

                    </label>
                    <div className='from-control'>
                        <label>
                            <span>Add A Photo</span>
                        </label>
                        <input {...register('image')} type="file" className="file-input file-input-ghost w-full max-w-xs" />
                    </div>
                    <div className="form-control mt-6 w-full">
                        
                        <input type="submit" className='btn  w-full text-white bg-[#07332F]' value="Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;