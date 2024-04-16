import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className=" min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-[50px] md:w-[100px] text-orange-400"></span>
        </div>
    }
    
    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }
};

export default PrivetRoute;