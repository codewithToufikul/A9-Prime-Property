import { useEffect } from 'react';
import property1 from '../../assets/property1.jpg'
import property2 from '../../assets/property2.jpg'
import property3 from '../../assets/property3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SomeProperty = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className=" mt-14 mx-2 overflow-x-hidden">
            <h1 className=" mb-4 text-3xl md:text-5xl text-center">Property <span className=" font-semibold text-orange-400">Highlight</span></h1>
            <div className='flex justify-center items-center lg:flex-row flex-col md:mt-7 gap-6'>
                <img data-aos="fade-right" className=' md:mt-12 w-[400px] rounded-xl transition-all hover:scale-105' src={property1} alt="" />
                <img  data-aos="flip-right" className=' w-[400px] rounded-xl transition-all hover:scale-105' src={property2} alt="" />
                <img data-aos='fade-left' className=' md:mt-12 w-[400px] rounded-xl transition-all hover:scale-105' src={property3} alt="" />
            </div>
        </div>
    );
};

export default SomeProperty;