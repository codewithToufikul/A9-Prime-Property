import Navbar from "./Shared/Navbar";
import { FaGoogle, FaGithub  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {loginUser, googleLogin} = useContext(AuthContext);
    useEffect(()=>{
        document.title= 'Login'
    },[])
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {
      loginUser(data.email, data.password)
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.error(error);
      })
    }
    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result=>{
      })
      .catch(error=>{
        console.error(error);
      })
    }
  return (
    <div className=" min-h-screen">
      <div className=" md:h-[100px] h-[70px]">
        <Navbar></Navbar>

      </div>
      <div className=" max-w-[600px] m-auto glass p-10 md:mt-[100px] lg:mt[300px]">
        
      <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0">
            <h1 className=" text-center text-4xl font-medium">Please <span className=" text-orange-500">Login</span></h1>
        <div className="form-control">
          <label className="label text-lg">
            Email
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="Enter Your Email" className="input input-bordered"  />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label text-lg">
            Password
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered"  />
          {errors.password && <span>This field is required</span>}
          <label className="label">
            <div className=" flex items-center gap-1">
            <input type="checkbox" name="check" id="" />
            <p className="">Remember Me!</p>
            </div>
            <a href="" className="  underline">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-500 border-none text-xl text-white">Login</button>
        </div>
        <div className=" grid grid-cols-3 items-center my-5">
            <hr className=" grid-cols-1" />
        <p className=" grid-cols-1 text-red-500 font-semibold  mx-auto w-fit">Or Login With</p>
        <hr className=" grid-cols-1" />
        </div>
        
      </form>
      <div className=" flex justify-center gap-8 mt-5">
            <button onClick={handleGoogleLogin} className=" flex">
                <div>
                <p className=" p-4 bg-red-600 text-white"><FaGoogle /></p>
                </div>
                <p className="  btn border-none rounded-none">Google</p>
            </button>
            <button className=" flex">
                <div>
                <p className=" p-4 bg-slate-600 text-white"><FaGithub /></p>
                </div>
                <p className="  btn border-none rounded-none">GitHub</p>
            </button>
        </div>
        <p className=" mt-6 text-base text-center">Don't have an account ! <Link to="/register" className=" text-orange-500">Register here...</Link></p>
      </div>
     
    </div>
  );
};

export default Login;
