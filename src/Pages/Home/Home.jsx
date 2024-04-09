
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div className="">
            <div className="relative">
            <div className=" z-10">
            <Navbar></Navbar>
            </div>
            <Banner></Banner>
        </div>
        </div>
    );
};

export default Home;