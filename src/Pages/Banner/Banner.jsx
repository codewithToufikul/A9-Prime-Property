import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide id='slide1'><div     data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" className='flex justify-center h-full items-center'>
                <div className=' border-l-4 pl-6 border-orange-500' style={{zIndex: 1}}>
                    <p className=' text-slate-200 font-semibold pb-5'>Welcome To Prime Property</p>
                <h1 className=' font-semibold text-white text-6xl ' >Discover Your<br /> Dream <span className=' text-orange-400'>Home</span></h1>
                <button className=' text-white btn bg-transparent rounded-none block mt-3'>Discover Now</button>
                </div>
                
                
            </div></SwiperSlide>
          <SwiperSlide id='slide2'><div className='flex justify-center h-full items-center'>
                <div className=' border-l-4 pl-6 border-orange-500' style={{zIndex: 1}}>
                <h1 className=' font-semibold text-white text-6xl ' >Modern Home Our <br /> Modern <span className=' text-orange-400'>Quarters</span></h1>
                <button className=' text-white btn bg-transparent rounded-none block mt-3'>Discover Now</button>
                </div>
                
                
            </div></SwiperSlide>
          <SwiperSlide id='slide3'><div className='flex justify-center h-full items-center'>
                <div className=' border-l-4 pl-6 border-orange-500' style={{zIndex: 1}}>
                <h1 className=' font-semibold text-white text-6xl ' >Discover Our <br /> Modern <span className=' text-orange-400'>Villa</span></h1>
                <button className=' text-white btn bg-transparent rounded-none block mt-3'>Discover Now</button>
                </div>
                
                
            </div></SwiperSlide>
          <SwiperSlide id='slide4'><div className='flex justify-center h-full items-center'>
                <div className=' border-l-4 pl-6 border-orange-500' style={{zIndex: 1}}>
                <h1 className=' font-semibold text-white text-6xl ' >Own The Home <br /> Just <span className=' text-orange-400'>For You</span></h1>
                <button className=' text-white btn bg-transparent rounded-none block mt-3'>Discover Now</button>
                </div>
                
                
            </div></SwiperSlide>
        </Swiper>
      </>
    );
};

export default Banner;