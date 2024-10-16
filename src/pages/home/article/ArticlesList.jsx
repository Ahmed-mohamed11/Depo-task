import ArticleItem from './ArticleItem';

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

export default function ArticlesList() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6 md:px-12">
            {articlesData.map((article) => (
                <ArticleItem key={article.id} {...article} />
            ))}
        </ul>
    );
}
