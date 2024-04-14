
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SomeProperty from "../SomeProperty/SomeProperty";
import { useLoaderData } from "react-router-dom";
import Property from "../Property/Property";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
AOS.init();

const Home = () => {
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
        <div className=" max-w-[1440px] mx-auto mt-20">
            <h1 className=" text-5xl text-center mb-14">Select <span className=" font-semibold text-orange-400">Home</span></h1>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">
        {
            propertys.map(property => <Property key={property.id} property={property}></Property>)
        }
        </div>
        </div>
        <div className=" mt-10">
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Home;