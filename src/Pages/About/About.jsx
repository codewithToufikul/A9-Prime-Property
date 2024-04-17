import { useEffect } from "react";
import about from "../../assets/about.png";
import Navbar from "../Shared/Navbar";
import Footer from '../../Pages/Footer/Footer'
const About = () => {
  useEffect(()=>{
    document.title= 'About Us'
},[])
  return (
    <div>
      <div className="  md:h-[100px] h-[70px]">
        <Navbar></Navbar>
      </div>
      <div className=" px-2 md:min-h-screen max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <div className="">
          <img className="" src={about} alt="" />
        </div>
        <div>
          <h1 className=" mb-5 text-4xl font-semibold">About Us</h1>
          <p>
            Welcome to Your Company <span className=" text-orange-400 font-semibold">Prime Property</span>, where we turn your dreams of finding
            the perfect home into reality. With a passion for exceptional
            service and a commitment to excellence, we strive to exceed your
            expectations at every turn. At Your Company Name, we understand
            that buying or selling a home is more than just a transaction; its
            a significant milestone in your life. Thats why we prioritize
            personalized attention, guiding you through every step of the
            process with care and expertise. Our team of experienced real estate
            professionals is dedicated to providing you with the support and
            resources you need to make informed decisions.
          </p>
        </div>
      </div>
      <div className=" mt-6"><Footer></Footer></div>
    </div>
  );
};

export default About;
