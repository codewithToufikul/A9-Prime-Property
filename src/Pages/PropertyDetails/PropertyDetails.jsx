import Navbar from "../Shared/Navbar";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const { id } = useParams();
    const propertys = useLoaderData();
    return (
        <div>
            <div><Navbar></Navbar></div>
        </div>
    );
};

export default PropertyDetails;