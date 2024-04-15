import Navbar from "../Shared/Navbar";
import profile from "../../assets/profile.png";
import Footer from "../Footer/Footer";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
    const {updateUser} = useContext(AuthContext);
    useEffect(()=>{
        document.title= 'profile update'
    },[]);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        updateUser(data.name, data.photo, data.email)
        .then(() => {
            toast.success("Success Notification !");
          }).catch((error) => {
            // An error occurred
            // ...
          });
      }
  return (
    <div>
      <div className="md:h-[100px] h-[70px]">
        <Navbar></Navbar>
      </div>
      <div className=" text-center mt-6 " data-aos="flip-up">
        <h1 className=" text-5xl">Update <span className=" font-medium text-orange-300">Your Profile</span></h1>
      </div>
      <div className=" max-w-[1440px] mx-auto grid grid-cols-2 justify-center
       items-center">
        <div data-aos="fade-right">
          <img src={profile} alt="" />
        </div>
        <div data-aos="fade-left">
          <div className="mx-10 ">
            <div className="">
              
              <div className="card shadow-2xl  bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium">Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Enter Your Name"
                      className="input input-bordered"
                      {...register("name", { required: true })} 
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="input input-bordered"
                      {...register("email", { required: true })} 
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium">PhotoURL</span>
                    </label>
                    <input
                      type="url"
                      placeholder="Enter Photo URL"
                      className="input input-bordered"
                      {...register("photo", { required: true })} 
                    />
                    {errors.photo && <span>This field is required</span>}
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-orange-400 text-xl text-white">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;