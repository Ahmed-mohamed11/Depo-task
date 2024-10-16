import HeroHeading from "./HeroHeading";
import HeroButton from "./HeroButton";
import HeroBackground from "./HeroBackground";

const Hero = () => {
    return (
        <div className="relative flex justify-between items-center">
            
            <HeroBackground>
                <div className="relative top-24 w-full flex items-center justify-start px-6 md:px-12 lg:px-24">
                    <HeroButton />
                </div>
            </HeroBackground>
            <HeroHeading /> 
        </div>
    );
};

export default Hero;
