
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import SomeProperty from "../SomeProperty/SomeProperty";
// ..
AOS.init();

const Home = () => {
    return (
        <div className="">
            <div className="relative">
            <div className=" ">
            <Navbar></Navbar>
            </div>
            <Banner></Banner>
        </div>
        <SomeProperty></SomeProperty>
        </div>
    );
};

export default Home;