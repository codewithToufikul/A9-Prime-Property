import Navbar from "../Shared/Navbar";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div className="md:h-[100px] h-[70px]"><Navbar></Navbar></div>
            <div className=" max-w-[1440px] mx-auto">
                <div>
                    {
                        blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;