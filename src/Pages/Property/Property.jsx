import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";

const Property = ({property}) => {
    const {id, estate_title, segment_name, description, price, status, area, location, facilities, image} = property;
  return (
    <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-left" data-aos-delay="300">
      <figure className="p-3 relative">
        <img
        className=" min-w-full h-[250px] rounded-xl"
          src={image}
          alt="Shoes"
        />
        <h1 className=" absolute bg-orange-400 top-0 left-0 p-2 text-lg text-white rounded-full">for {status}</h1>
      </figure>
      <div className="card-body px-4">
        <div>
        <h2 className="card-title">{segment_name}</h2>
        </div>
        <p className=" text-xl">{estate_title}</p>
        <div className=" mt-3 border-t-2 border-dashed pt-3">
          <p className="flex gap-1 text-lg items-center"> <span className=" text-red-600 text-xl"><FaLocationDot></FaLocationDot></span> <span>{location}</span></p>
        </div>
        <div className=" ">
          <p className="flex items-center gap-2 pl-1 text-lg"> <span className=" text-red-400"><FaChartArea/></span>{area}</p>
        </div>
        <div className="card-actions justify-between border-t-2 pt-3 border-dashed">
          <button className=" btn bg-orange-500 text-white"><Link to={`/details/${id}`}>View Property</Link></button>
          <h1 className=" text-2xl font-medium">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Property;
