import { FaFacebook, FaInstagramSquare  } from "react-icons/fa";
import { FaGithub, FaTwitter  } from "react-icons/fa";
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <>
    <div className="bg-gray-100 pt-8">
      <div className="max-w-[1440px] px-4 sm:px-6 text-gray-800 grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-xl text-indigo-600">Company Name</h3>
          <img className=" mt-5" src={logo} alt="" />
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
          <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span></a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
          <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
          <a className="my-3 block" href="/#">Maple Avenue, Townsville, Floor 4 San Francisco, CA <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">primepropety@yahoo.com <span className="text-teal-600 text-xs p-1"></span></a>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 pt-2">
      <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="/#" className=" text-xl mx-1">
          <FaFacebook />
          </a>
          <a href="/#" className=" text-xl mx-1">
            <FaInstagramSquare />
          </a>
          <a href="/#" className=" text-xl mx-1">
            <FaGithub/>
          </a>
          <a href="/#" className=" text-xl mx-1">
            <FaTwitter />
          </a>
        </div>
        <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
      </div>
    </div>
  </>
  );
};

export default Footer;
