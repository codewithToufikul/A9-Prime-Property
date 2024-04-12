import Navbar from "../Shared/Navbar";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const { id } = useParams();
    const propertys = useLoaderData();
    const property = propertys.find(property => property.id == id);
    const {estate_title, segment_name, description, price, status, area, location, facilities, image} = property;
    return (
        <div>
            <div className=" h-[100px]"><Navbar></Navbar></div>
            <div className=" grid grid-cols-2 max-w-[1440px] mx-auto">
            <div className=" col-span-1 h-[800px] ">
                <img className=" min-w-full border-2 h-full rounded-2xl" src={image} alt="" />
            </div>
            <div>
                <h1 className=" text-3xl">{estate_title}</h1>
                <p>{description}</p>
            </div>
            </div>
        </div>
    );
};

export default PropertyDetails;