import { Link } from 'react-router-dom';
import error from '../assets/404.png'
const ErrorPage = () => {
    return (
        <div className=' flex justify-center items-center flex-col'>

            <img src={error} alt="" />
            <h1 className=' text-xl'>Go to <Link className=' font-bold text-orange-400 underline' to="/">Home</Link></h1>
        </div>
    );
};

export default ErrorPage;