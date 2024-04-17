import Navbar from "../Shared/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { useEffect } from "react";
import Footer from "../Footer/Footer";


const PropertyDetails = () => {
    useEffect(()=>{
        document.title= 'Property Details'
    },[])
    const { id } = useParams();
    const propertys = useLoaderData();
    const property = propertys.find(property => property.id == id);
    const {estate_title, segment_name, description, price, status, area, location, facilities, image} = property;
    return (
        <div className=" overflow-x-hidden">
            <div className=" md:h-[100px] h-[70px] "><Navbar></Navbar></div>
            <div className="max-w-[1440px] mx-auto">
            <div className="hero h-[400px] rounded-3xl" style={{backgroundImage: `url(${image})`}}>
            <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl ">
                <h1 className="mb-5 text-5xl font-bold">{segment_name}</h1>
                </div>
            </div>
            </div>
            </div>
            <div>
                <h1 className=" text-4xl text-center mt-10">Property <span className=" font-semibold text-orange-400">Details</span></h1>
            </div>
            <div className=" grid md:gap-8 p-4 items-center grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto">
            <div data-aos="fade-up" className=" col-span-1 lg:h-[800px]">
                <img className=" min-w-full border-2 h-full rounded-2xl" src={image} alt="" />
            </div>
            <div  data-aos="fade-left" className="">
                <div className=" space-y-2 md:space-y-6 border-b-2 pb-5">
                <h1 className=" text-2xl md:text-3xl font-semibold">{estate_title}</h1>
                <p className=" text-base md:text-lg">{description}</p>
                </div>
                <div className=" mt-2 md:mt-6 space-y-1 md:space-y-2">
                <h2 className="border-b-2 pb-5 border-dashed"><span className="  text-xl md:text-2xl font-semibold text-orange-400">Price:    </span>    <span className=" md:text-xl text-base font-medium">{price}</span></h2>
                <h2 className="border-b-2 pb-5 border-dashed"><span className=" text-xl md:text-2xl font-semibold text-orange-400">Segment:    </span>    <span className=" md:text-xl text-base font-medium">{segment_name}</span></h2>
                <h2 className="border-b-2 pb-5 border-dashed"><span className=" text-xl md:text-2xl font-semibold text-orange-400">Location:    </span>    <span className=" md:text-xl text-base font-medium">{location}</span></h2>
                <h2 className=" flex gap-2 border-b-2 pb-5 border-dashed"><span className=" text-xl md:text-2xl font-semibold text-orange-400">Facilities:    </span>    <span className=" flex md:text-xl text-base font-medium">{
                    facilities.map(facility => <p key={facility} className=" p-1 rounded-md md:mr-4 bg-orange-200 text-gray-500">#{facility}</p>)
                }</span></h2>
                <h2 className="border-b-2 pb-5 border-dashed"><span className=" text-xl md:text-2xl font-semibold text-orange-400">Area:    </span>    <span className=" md:text-xl text-base font-medium">{area}</span></h2>
                <h2><span className=" text-xl md:text-2xl font-semibold text-orange-400">Status:    </span>    <span className=" md:text-xl text-base font-medium">for {status}.</span></h2>
                
                </div>
                <button className="btn text-lg md:mt-5 mt-2 lg:mt-10 w-full bg-orange-400 text-white"><span><FaPhone /></span> Contact Now</button>
            </div>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PropertyDetails;