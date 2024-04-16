import Navbar from "../Shared/Navbar";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import { FaHandPointRight } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="">
            <div className="md:h-[100px] h-[70px]"><Navbar></Navbar></div>
            <div className=" max-w-[1040px] mx-auto">
                <h1 className=" flex gap-2 my-5 text-4xl">Some <span  className=" gap-3 flex font-semibold text-orange-400">Blogs <FaHandPointRight/></span></h1>
                <div className=" space-y-8">
                    {
                        blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
            </div>
            <div className=" mt-6">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;