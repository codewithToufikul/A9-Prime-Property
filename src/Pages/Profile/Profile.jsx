import { useContext } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [text] = useTypewriter({
        words: [user.displayName],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className=" max-w-[1440px] mx-auto">
                <div className=" flex flex-col justify-center items-center gap-3 h-screen">
                <div data-aos="fade-down" className=" w-[200px] border-4 rounded-full border-orange-400">
                <img className=" w-full rounded-full" src={user.photoURL} alt="" />
                </div>
                <div className=" space-y-3">
                    <h1 className=" text-3xl font-semibold text-orange-400">Name: <span className=" text-black font-normal">{text}</span>
                    <Cursor cursorColor='orange' />
                    </h1>
                    <h1 className=" text-lg"><span className=" text-xl font-semibold text-orange-400">Email:</span> {user.email}</h1>
                </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Profile;