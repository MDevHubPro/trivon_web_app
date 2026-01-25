import Header from '@/components/Header';
import Image from 'next/image';
import BrandMarquee from '@/components/BrandMarquee';
import Maincontent from './Maincontent';
const HeroSection = () => {
    const brands = [
        'winikon', 'temenos', 'SOFTWARE GROUP', 'winikon', 'Abler', 'avanza', 'temenos'
    ];
    return (
        <>
            <div className='relative  h-[619px]  w-full bg-cover bg-center bg-no-repeat'>
                <Header />
                {/* 1. Hero Section */}
                <div className='md:block hidden absolute z-[0] h-full top-6 inset-0 bg-[url("/assets/bg-image.png")] bg-cover bg-center bg-no-repeat'></div>

                <div className='absolute z-[10]  inset-0 bg-[url("/assets/bg-5.png")] bg-cover bg-center bg-no-repeat'></div>



                {/* Hero Secti
      on */}
                <Maincontent heading_one={"About Us"} heading_two={"Trivon Digital"} text={"Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering and DeFi innovation for more inclusive, reliable and sustainable systems"} main_heading={"About Us"} brands={brands} />


            </div>

        </>
    );

};
export default HeroSection;