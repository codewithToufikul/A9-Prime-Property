import property1 from '../../assets/property1.jpg'
import property2 from '../../assets/property2.jpg'
import property3 from '../../assets/property3.jpg'

const SomeProperty = () => {
    return (
        <div className=" mt-14">
            <h1 className=" text-5xl text-center">Property <span className=" font-semibold text-orange-400">Highlight</span></h1>
            <div className='flex justify-center items-center md:flex-row flex-col mt-7 gap-6'>
                <img className=' w-[400px] rounded-xl transition-all hover:scale-105' src={property1} alt="" />
                <img className=' w-[400px] rounded-xl transition-all hover:scale-105' src={property2} alt="" />
                <img className=' w-[400px] rounded-xl transition-all hover:scale-105' src={property3} alt="" />
            </div>
        </div>
    );
};

export default SomeProperty;