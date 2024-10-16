 import { useEffect } from "react";
import { gsap } from "gsap";

const HeroHeading = () => {
    useEffect(() => {
        gsap.from(".hero-heading", { y: -50, opacity: 0, duration: 1, ease: "power3.out", delay: 1 });
        gsap.from(".hero-text", { opacity: 0, duration: 1, delay: 1.5 });
    }, []);

    return (
        <div className="max-w-lg text-center z-50 md:text-left">
            <h2 className="hero-heading text-5xl font-extrabold mb-4 text-gray-800 ">
                Unified one <span className="text-sky-500 font-extrabold">solution</span> for any device
            </h2>
            <p className="hero-text text-xl text-gray-600  mb-8">
                We help businesses deliver digital customer experiences that are personalized, optimized, and synchronized.
            </p>
        </div>
    );
};

export default HeroHeading;
