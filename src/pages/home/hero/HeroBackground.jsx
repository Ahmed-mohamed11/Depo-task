// HeroBackground.jsx
import { useEffect } from "react";
import { gsap } from "gsap";
import HeroImage from "../../../images/gfx/original-1dee8bfca65f223e60c259b7a32c6aad.png";

const HeroBackground = () => {
    useEffect(() => {
        gsap.fromTo(
            ".hero-background",
            { scale: 0.95, opacity: 0.5 },
            { scale: 1, opacity: 1, duration: 3, ease: "power3.out" }
        );
    }, []);

    return (
        <div
            className="w-full min-h-screen relative bg-cover z-10 bg-center hero-background"
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        ></div>
    );
};

export default HeroBackground;
