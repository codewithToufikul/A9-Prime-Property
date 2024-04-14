import Navbar from "./Shared/Navbar";
import { FaGoogle, FaGithub  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const {creatUser} = useContext(AuthContext);
    useEffect(()=>{
        document.title= 'Register'
    },[])

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {
      creatUser(data.email, data.password)
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.error(error);
      })
}
    return (
        <div className=" min-h-screen" >
          <div className=" md:h-[100px] h-[70px]">
            <Navbar></Navbar>
    
          </div>
          <div className=" max-w-[600px] m-auto glass p-10 lg:mt-20">
            
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0">
                <h1 className=" text-center  text-4xl font-medium">Please <span className=" text-orange-500">Register</span></h1>
            <div className="form-control">
              <label className="label text-lg">
                Name
              </label>
              <input  type="name" placeholder="Enter Your Name" className="input input-bordered" {...register("fullName", { required: true })} />
              {errors.fullName && <span className=" text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label text-lg">
                Email
              </label>
              <input  type="email" placeholder="Enter Your Email" className="input input-bordered" {...register("email", { required: true })} />
              {errors.email && <span className=" text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label text-lg">
                Photo URL
              </label>
              <input  type="url" placeholder="Photo URL" className="input input-bordered" {...register("photoUrl", { required: true })} /> 
             {errors.photoUrl && <span className=" text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label text-lg">
                Password
              </label>
              <input  type="password" placeholder="Password" className="input input-bordered" {...register("password", { required: true })} />
              {errors.password && <span className=" text-red-500">This field is required</span>}
              
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-500 border-none text-xl text-white">Register</button>
            </div>
            
            
          </form>
        
            <p className=" mt-6 text-base text-center">Have an account ! <Link to="/login" className=" text-orange-500">Login here...</Link></p>
          </div>
         
        </div>
      );
};

export default Register;