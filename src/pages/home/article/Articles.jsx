import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ArticlesList from './ArticlesList';

gsap.registerPlugin(ScrollTrigger);

export default function Articles() {
    useEffect(() => {
        gsap.from('.article-card', {
            scrollTrigger: {
                trigger: '.article-card',
                start: 'top 90%',
                end: 'top 40%',
                scrub: 1,
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            rotation: -30,
            scale: 0.8,
            duration: 1.5,
            ease: 'power2.out',
        });
    }, []);

    return (
        <div className="mt-28 py-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-12">
                    Speedy Digital <br />Experience Creation
                </h1>
            </div>
            <ArticlesList />
        </div>
    );
}
