import HeroHeading from "./HeroHeading";
import HeroButton from "./HeroButton";
import HeroBackground from "./HeroBackground";
 
const Hero = () => {
    return (
        <div className="relative">
             <HeroBackground />
          
            <div dir="rtl" className="absolute top-24 z-50 w-full flex flex-col items-end justify-end px-6 md:px-12 lg:px-24">
                <HeroHeading />
                <HeroButton />
            </div>
        </div>
    );
};

export default Hero;
