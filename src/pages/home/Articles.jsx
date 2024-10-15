// import React from 'react'

const articles = [
    {
        title: "Completely unstyled, fully accessible UI components",
        subtitle: "Headless UI",
        description: "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
        link: "https://tailwindcss.com/",
        imgSrc: "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
        imgAlt: "Headless UI",
        color: "text-indigo-500"
    },
    {
        title: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
        subtitle: "Heroicons",
        description: "A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.",
        link: "https://tailwindcss.com/",
        imgSrc: "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
        imgAlt: "Heroicons",
        color: "text-purple-500"
    },
    {
        title: "Seamless SVG background patterns by the makers of Tailwind CSS.",
        subtitle: "Hero Patterns",
        description: "A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web projects.",
        link: "https://tailwindcss.com/",
        imgSrc: "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg",
        imgAlt: "Hero Patterns",
        color: "text-cyan-500"
    }
];

const ArticleCard = ({ title, subtitle, description, link, imgSrc, imgAlt, color }) => (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
                <span className={`mb-1 block text-sm leading-6 ${color}`}>{subtitle}</span>{title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
                <p>{description}</p>
            </div>
            <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href={link}>Learn more
                <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg>
            </a>
        </div>
        <img src={imgSrc} alt={imgAlt} className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" />
    </li>
);

export default function Articles() {
    return (
        <div className="mt-28">
            <div className="text-center">
                <h1 className="text-3xl font-bold">احدث المقالات</h1>
            </div>
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </ul>
        </div>
    );
}
