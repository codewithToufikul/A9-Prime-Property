import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo1.png'

const Navbar = () => {
    const navLink = <>
        <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? " text-orange-500 border-2 bg-transparent font-bold"
                        : isPending
                        ? "pending"
                        : ""
                    } to="/">Home</NavLink></li> 
        <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-500 border-2 bg-transparent font-bold"
                        : isPending
                        ? "pending"
                        : ""
                    } to="/update">Update Profile</NavLink></li> 
        <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-500 border-2 bg-transparent font-bold"
                        : isPending
                        ? "pending"
                        : ""
                    } to="user">User Profile</NavLink></li>
    
    </>
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
        <a data-aos="fade-left"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="btn  bg-orange-500 border-none text-xl text-white "><Link to="/login">Login</Link></a>
      </div>
    </div>
  );
};

export default Navbar;
