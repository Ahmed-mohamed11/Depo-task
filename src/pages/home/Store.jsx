import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import google1 from '../../images/gfx/google1.webp';
import google2 from '../../images/gfx/apple1.webp';
import mainImage from '../../images/gfx/app-mokup.webp';

gsap.registerPlugin(ScrollTrigger);

export default function Store() {
    useEffect(() => {
        gsap.fromTo(
            ".store-heading",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-heading",
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".store-paragraph",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-paragraph",
                    start: "top 75%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".store-buttons img",
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                stagger: 0.2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-buttons",
                    start: "top 70%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".store-image",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-image",
                    start: "top 65%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#f0f0f0] to-gray-50 flex flex-col items-center justify-center p-4 md:pt-12">
            <div className="w-full text-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-4 store-heading">Our Solutions</h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 store-paragraph">
                    Your digital journey is as unique as your vision, and we are ready
                    <br />
                    to remove any obstacles along the way
                </p>
                <div className="flex justify-center gap-5 mb-4 store-buttons">
                    <img
                        src={google1}
                        alt="Get it on Google Play"
                        width={165}
                        height={40}
                        className="h-10 w-auto"
                    />
                    <img
                        src={google2}
                        alt="Download on the App Store"
                        width={165}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>
                <div className="relative max-w-3xl mx-auto store-image">
                    <img
                        src={mainImage}
                        alt="App interface on various devices"
                        width={800}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
