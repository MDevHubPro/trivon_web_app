import Header from '@/components/Header';
import Image from 'next/image';
const HeroSection = ({ children }) => {

    return (

        <div className='relative  h-[619px] w-full '>
            <Header />
            {/* 1. Hero Section */}
            <div className='block  absolute z-[0] h-full  top-0 right-0 bottom-0 left-0 bg-[url("/assets/bg-5.png")] bg-cover bg-center bg-no-repeat'></div>

            {/* <div className=' absolute z-[0]  inset-0 bg-[url("/assets/bg-4.png")] bg-contain bg-center bg-no-repeat'></div> */}
            <div className="relative h-full w-full flex flex-col items-center gap-6 justify-start px-4 overflow-hidden">
                {/* Background overlay */}
                {/* <div className="absolute inset-0 bg-black/30"></div> */}

                {/* Main content */}

                {children}

            </div>



        </div>
    );
};
export default HeroSection;