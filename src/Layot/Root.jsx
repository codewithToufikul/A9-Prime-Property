import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className=" sans">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;