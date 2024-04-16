import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
const Root = () => {
    return (
        <div className=" sans">
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;