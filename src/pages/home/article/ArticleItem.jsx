export default function ArticleItem({ title, description, details, linkText, linkUrl, bgColor, imageUrl, altText }) {
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
