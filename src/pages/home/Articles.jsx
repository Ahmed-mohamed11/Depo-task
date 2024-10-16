import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const articlesData = [
    {
        id: 1,
        title: "Community Forum",
        description: "Expand your knowledge and learn from the experiences of other users.",
        details: "Designed to integrate beautifully with Tailwind CSS.",
        linkText: "Learn more",
        linkUrl: "#",
        bgColor: "text-indigo-500",
        imageUrl: "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
        altText: "Community Forum",
    },
    {
        id: 2,
        title: "Website Analytics",
        description: "You get full information about the visitors and users of your site",
        details: "Available as basic SVG icons and via first-party React and Vue libraries.",
        linkText: "Learn more",
        linkUrl: "#",
        bgColor: "text-purple-500",
        imageUrl: "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
        altText: "Heroicons",
    },
    {
        id: 3,
        title: "Educational Insights",
        description: "Our courses are developed in collaboration with industry leaders.",
        details: "A collection of over 100 free MIT-licensed high-quality SVG patterns for your web projects.",
        linkText: "Learn more",
        linkUrl: "#",
        bgColor: "text-cyan-500",
        imageUrl: "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg",
        altText: "Hero Patterns",
    },
];

function ArticleItem({ title, description, details, linkText, linkUrl, bgColor, imageUrl, altText }) {
    return (
        <li className="relative flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden transform transition article-card">
            <img
                src={imageUrl}
                alt={altText}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    <span className={`block text-sm leading-6 ${bgColor}`}>{title}</span>
                    {description}
                </h3>
                <p className="text-slate-600 mb-4">{details}</p>
                <a
                    href={linkUrl}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    {linkText}
                    <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </li>
    );
}

export default function Articles() {
    useEffect(() => {
        // GSAP ScrollTrigger Animation with rotation and scale effect for article cards
        gsap.from('.article-card', {
            scrollTrigger: {
                trigger: '.article-card',
                start: 'top 90%',
                end: 'top 40%',
                scrub: 1,
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            rotation: -30, // Starts slightly rotated
            scale: 0.8, // Starts slightly scaled down
            duration: 1.5,
            ease: 'power2.out',
        })
    }, [])

    return (
        <div className="mt-28 py-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-12">
                    Speedy Digital <br />Experience Creation
                </h1>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6 md:px-12">
                {articlesData.map((article) => (
                    <ArticleItem key={article.id} {...article} />
                ))}
            </ul>
        </div>
    );
}
