import Navbar from "../Shared/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";


const PropertyDetails = () => {
    const { id } = useParams();
    const propertys = useLoaderData();
    const property = propertys.find(property => property.id == id);
    const {estate_title, segment_name, description, price, status, area, location, facilities, image} = property;
    return (
        <div>
            <div className=" md:h-[100px] h-[70px] "><Navbar></Navbar></div>
            <div className=" grid md:gap-8 p-4 items-center grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto">
            <div data-aos="fade-up" className=" col-span-1 lg:h-[800px]">
                <img className=" min-w-full border-2 h-full rounded-2xl" src={image} alt="" />
            </div>
            <div  data-aos="fade-left" className="">
                <div className=" space-y-2 md:space-y-6">
                <h1 className=" text-2xl md:text-3xl font-semibold">{estate_title}</h1>
                <p className=" text-base md:text-lg">{description}</p>
                </div>
                <div className=" mt-2 md:mt-6 space-y-2 md:space-y-4">
                <h2><span className=" text-xl md:text-2xl font-semibold text-orange-400">Price:    </span>    <span className=" md:text-xl text-base font-medium">{price}</span></h2>
                <h2><span className=" text-xl md:text-2xl font-semibold text-orange-400">Segment:    </span>    <span className=" md:text-xl text-base font-medium">{segment_name}</span></h2>
                <h2><span className=" text-xl md:text-2xl font-semibold text-orange-400">Location:    </span>    <span className=" md:text-xl text-base font-medium">{location}</span></h2>
                <h2 className=" flex gap-2"><span className=" text-xl md:text-2xl font-semibold text-orange-400">Facilities:    </span>    <span className=" flex md:text-xl text-base font-medium">{
                    facilities.map(facility => <p className=" md:mr-2">{facility},</p>)
                }</span></h2>
                <h2><span className=" text-xl md:text-2xl font-semibold text-orange-400">Area:    </span>    <span className=" md:text-xl text-base font-medium">{area}</span></h2>
                <h2><span className=" text-xl md:text-2xl font-semibold text-orange-400">Status:    </span>    <span className=" md:text-xl text-base font-medium">for {status}.</span></h2>
                
                </div>
                <button className="btn text-lg md:mt-5 mt-2 lg:mt-10 w-full bg-orange-400 text-white"><span><FaPhone /></span> Contact Now</button>
            </div>
            
            </div>
        </div>
    );
};

export default PropertyDetails;