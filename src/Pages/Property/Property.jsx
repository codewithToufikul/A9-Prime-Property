import { Link } from "react-router-dom";

const Property = ({property}) => {
    console.log(property);
    const {id, estate_title, segment_name, description, price, status, area, location, facilities, image} = property;
  return (
    <div className="card card-compact bg-base-100 shadow-xl " data-aos="fade-left" data-aos-delay="300">
      <figure className="p-3 relative">
        <img
        className=" min-w-full h-[250px] rounded-xl"
          src={image}
          alt="Shoes"
        />
        <h1 className=" absolute bg-blue-400 top-0 left-0 p-2 text-lg text-white rounded-full">{status}</h1>
      </figure>
      <div className="card-body px-4">
        <div>
        <h2 className="card-title">{segment_name}</h2>
        </div>
        <p className=" text-xl">{estate_title}</p>
        <div className="card-actions justify-between border-t-2 pt-3 border-dashed">
          <button className="btn bg-orange-500 text-white"><Link to={`/details/${id}`}>View Property</Link></button>
          <h1 className=" text-2xl font-medium">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Property;
