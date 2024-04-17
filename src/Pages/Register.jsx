import Navbar from "./Shared/Navbar";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [passError, setPassError] = useState('')
  const {creatUser, updateUser} = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const navigete = useNavigate()
    useEffect(()=>{
        document.title= 'Register'
    },[])

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {
      console.log(data);
      if(data.password.length < 6){
        setPassError('please provide more then 6 character password');
        return;
    }
      if(!/[A-Z]/.test(data.password)){
        setPassError('please must contain at least one uppercase letter')
        return;
      }
      if(!/[a-z]/.test(data.password)){
        setPassError('please must contain at least one lowercase letter')
        return;
      }
      creatUser(data.email, data.password)
      .then(()=>{
        setPassError('')
        toast.success("Register Success",{
          position: "top-center",
        });
        navigete("/")
        updateUser(data.fullName, data.photoUrl)
        .then(() => {
        }).catch((error) => {
          console.log(error);
          toast.error(error.message, {
            position: "top-center",
          });
        });
      })
      .catch(error=>{
        toast.error(error.message, {
          position: "top-center",
        });
      })
    }
    const handlePasswordShow = () =>{
      setShow(!show)
    }

    return (
        <div className="min-h-screen">
          <div className="md:h-[100px] h-[70px]">
            <Navbar></Navbar>
          </div>
          <div className="max-w-[600px] m-auto glass p-10 lg:mt-20">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0">
              <h1 className="animate__animated animate__bounce text-center text-4xl font-medium">Please <span className="text-orange-500">Register</span></h1>
              <div className="form-control">
                <label className="label text-lg">Name</label>
                <input type="name" placeholder="Enter Your Name" className="input input-bordered" {...register("fullName", { required: true })} />
                {errors.fullName && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label text-lg">Email</label>
                <input type="email" placeholder="Enter Your Email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label text-lg">Photo URL</label>
                <input type="url" placeholder="Photo URL" className="input input-bordered" {...register("photoUrl", { required: true })} /> 
                {errors.photoUrl && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label text-lg">Password</label>
                <div className=" relative">
                <input type={show ? 'password' : 'text'} placeholder="Password" className=" w-full input input-bordered" {...register("password", { required: true })} />
                <p onClick={handlePasswordShow} className={`absolute top-3 right-3 text-2xl ${show ? 'hidden' : ''}`}><FaEye /></p>
                <p onClick={handlePasswordShow} className={`absolute top-3 right-3 text-2xl ${!show ? 'hidden' : ''}`}><FaEyeSlash /></p>
                </div>
                {errors.password && <span className="text-red-500">This field is required</span>}
                {
                  passError ? <span className=" text-[13px] text-red-500">{passError}</span> : ''
                }
              </div>
              <div className="form-control mt-6">
                <button className="animate__animated animate__flipInX btn bg-orange-500 border-none text-xl text-white">Register</button>
              </div>
            </form>
            <p className="mt-6 text-base text-center">Have an account! <Link to="/login" className="text-orange-500">Login here...</Link></p>
          </div>
        </div>
      );
};

export default Register;
