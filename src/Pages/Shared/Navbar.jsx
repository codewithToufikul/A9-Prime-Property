import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo1.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";




const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);
    const navLink = <>
        <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? " text-orange-500 border-2 border-orange-500 border-b-4 border-0 mr-3 font-bold shadow-xl"
                        : isPending
                        ? "pending"
                        : "border-2 mr-3 "
                    } to="/">Home</NavLink></li> 
        <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? " text-orange-500 border-2 border-orange-500 border-b-4 border-0 mr-3 font-bold shadow-xl"
                        : isPending
                        ? "pending"
                        : "border-2 mr-3 "
                    } to="/blog">Blog</NavLink></li> 
        
        {
          user ? <li><NavLink className={({ isActive, isPending }) =>
          isActive
            ? "text-orange-500 border-2 mr-3 border-b-4 border-0 border-orange-500 bg-transparent font-bold shadow-xl"
            : isPending
            ? "pending"
            : "border-2 mr-3"
        } to="/update">Update Profile</NavLink></li>  : ''
        }
        {
          user ? <li><NavLink className={({ isActive, isPending }) =>
          isActive
            ? "text-orange-500 border-2 mr-3 border-orange-500 border-b-4 border-0 bg-transparent font-bold shadow-xl"
            : isPending
            ? "pending"
            : "border-2 mr-3"
        } to="/user">Profile</NavLink></li> : ''
        }
        <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-500 border-2 mr-3 border-b-4 border-0 border-orange-500 bg-transparent font-bold shadow-xl"
                        : isPending
                        ? "pending"
                        : "border-2 mr-3"
                    } to="/about">About Us</NavLink></li>
        
    
    </>
    const handleLogOut = () =>{
      logOutUser()
      .then(() => {
      }).catch(() => {
      });
    }
  return (
    <div className="navbar bg-transparent absolute z-10 md:px-8 glass rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-xl"><img className=" w-[200px]" src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-rose-300 text-lg menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className=" flex items-center gap-2">
            <div className="dropdown dropdown-hover flex justify-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-full  rounded-full border-2 border-orange-400">
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content top-14 right-0 mg:top-12 md:right-0 z-[1] menu shadow bg-base-100 rounded-box w-32 md:w-52">
            
            <li className=" flex justify-center font-bold text-orange-400 md:text-xl">{user.displayName}</li>
            
          </ul>
          </div>
          <a onClick={handleLogOut} className="btn  bg-orange-500 border-none text-lg md:text-xl text-white "><Link >LogOut </Link> <FaArrowRightFromBracket /></a>
          </div> 
          : <a data-aos="fade-left"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" className="btn  bg-orange-500 border-none text-lg md:text-xl text-white "><BiLogIn /><Link to="/login">Login</Link></a>
        }
      </div>
    </div>
  );
};

export default Navbar;
