
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SomeProperty from "../SomeProperty/SomeProperty";
import { useLoaderData } from "react-router-dom";
import Property from "../Property/Property";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import CommonQs from "../CommonQs/CommonQs";



const Home = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    useEffect(()=>{
        document.title= 'Home'
    },[])
    const propertys = useLoaderData();
    return (
        <div className="">
            <div className="relative">
            <div className=" ">
            <Navbar></Navbar>
            </div>
            <Banner></Banner>
        </div>
        <SomeProperty></SomeProperty>
        <div className=" max-w-[1440px] mx-auto mt-20 px-2">
            <h1 className=" text-3xl md:text-5xl text-center mb-14">Select <span className=" font-semibold text-orange-400">Home</span></h1>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 overflow-x-hidden">
        {
            propertys.map(property => <Property key={property.id} property={property}></Property>)
        }
        </div>
        <div className=" mt-24">
        <h1 className=" text-3xl md:text-5xl text-center mb-14">Our <span className=" font-semibold text-orange-400">Team</span></h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <img className=" rounded-2xl" src={'https://i.ibb.co/zXc3mCB/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash-1.jpg'} alt="" />
                <h1 className=" text-2xl lg:text-3xl font-medium">Nathan Thompson</h1>
                <p className=" text-xl">CEO</p>
                <div className=" gap-3 flex">
                    <h1>Contract:</h1>

                    <div className=" gap-2 flex">
                    <p className=" text-2xl cursor-pointer"><FaFacebook /></p>
                    <p className="text-2xl cursor-pointer"><IoLogoLinkedin /></p>
                    </div>
                </div>
            </div>
            <div>
                <img className=" rounded-2xl" src={'https://i.ibb.co/FDvqpwY/meritt-thomas-ao-Q4-DYZLE-E-unsplash-1.jpg'} alt="" />
                <h1 className=" text-2xl lg:text-3xl font-medium"> Emily Anderson</h1>
                <p className=" text-xl">Leed Interior Design</p>
                <div className=" gap-3 flex">
                    <h1>Contract:</h1>
                    <div className=" gap-2 flex">
                    <p className=" text-2xl cursor-pointer"><FaFacebook /></p>
                    <p className="text-2xl cursor-pointer"><IoLogoLinkedin /></p>
                    </div>
                </div>
            </div>
            <div>
                <img className=" rounded-2xl" src={'https://i.ibb.co/xhcvsfc/janko-ferlic-G-jo31-ESu-RE-unsplash-1.jpg'} alt="" />
                <h1 className="text-2xl lg:text-3xl font-medium">Ryan Mitchell</h1>
                <p className=" text-xl">Co Founder</p>
                <div className=" gap-3 flex">
                    <h1>Contract:</h1>
                    <div className=" gap-2 flex">
                    <p className=" text-2xl cursor-pointer"><FaFacebook /></p>
                    <p className="text-2xl cursor-pointer"><IoLogoLinkedin /></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className=" mt-12 md:mt-24">
            <h1 className="text-center md:text-4xl text-3xl lg:text-5xl">Common <span className=" font-semibold text-orange-400">Question</span></h1>
            <CommonQs></CommonQs>
        </div>
        </div>
        
        <div className=" mt-10">
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Home;