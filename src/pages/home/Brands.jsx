import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
    const brands = [
        { name: "Kindle Fire", logo: "kindle fire" },
        { name: "Donnelly", logo: "Donnelly" },
        { name: "Imation", logo: "imation" },
        { name: "Motul", logo: "MOTUL" },
        { name: "Omom", logo: "omom" },
        { name: "Les Echos", logo: "les Echos" },
        { name: "Vueling", logo: "vueling" },
        { name: "Indeed", logo: "indeed" },
        { name: "Omron", logo: "OMRON" },
        { name: "Brembo", logo: "brembo" },
        { name: "Prime Video", logo: "prime video" },
        { name: "Viesmann", logo: "VIESMANN" },
    ];

    useEffect(() => {
        gsap.fromTo(
            ".brand-logo",
            { opacity: 0, x: 100, rotate: 10 }, // Start state: invisible, slide from right, slight rotation
            {
                opacity: 1,
                x: 0,
                rotate: 0, // End state: fully visible, normal position
                ease: "power1.out",
                duration: 2,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".brand-logo",
                    start: "top 85%",
                    end: "bottom 60%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="relative  py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-700">
                    Trusted by Leading Brands
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 brand-logo"
                        >
                            <span className="text-blue-600 font-bold text-xl">{brand.logo}</span>
                        </div>
                    ))}
                </div>
            </div>

             <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-200 to-purple-300 w-96 h-96 rounded-full absolute top-10 left-10 opacity-30 blur-3xl"></div>
                <div className="bg-gradient-to-r from-green-200 to-blue-300 w-72 h-72 rounded-full absolute bottom-0 right-0 opacity-40 blur-3xl"></div>
            </div>
        </div>
    );
}
