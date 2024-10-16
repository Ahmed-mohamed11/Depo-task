import { InstagramLogo, FacebookLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
  
export default function Footer() {
    return (
        <footer className="bg-gray-200   py-16 px-4">
            <div className=" max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Programs</h2>
                        <ul className="space-y-3 text-gray-800">
                            <li className="hover:text-white transition-colors">Corporate</li>
                            <li className="hover:text-white transition-colors">One to One</li>
                            <li className="hover:text-white transition-colors">Consulting</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Service</h2>
                        <ul className="space-y-3 text-gray-800">
                            <li className="hover:text-white transition-colors">Training</li>
                            <li className="hover:text-white transition-colors">Coaching</li>
                            <li className="hover:text-white transition-colors">Consulting</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
                        <ul className="space-y-3 text-gray-800">
                            <li className="hover:text-white transition-colors">Home</li>
                            <li className="hover:text-white transition-colors">About</li>
                            <li className="hover:text-white transition-colors">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Newsletter</h2>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-gray-100 text-black placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md py-2">
                                Subscribe
                            </button>
                        </form>
                        <div className="flex gap-6 mt-6">
                            <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
                                <WhatsAppIcon />
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                                <YoutubeLogo className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                                <InstagramLogo className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
                                <FacebookLogo className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-blue-700 hover:text-blue-600 transition-colors">
                                <LinkedinLogo className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                                <TwitterLogo className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-md text-gray-900">
                    <p>Mobile: +201032210349</p>
                 </div>
                <hr className="border-gray-700 my-8" />
               
            </div>
        </footer>
    );
}

// Example WhatsAppIcon component
function WhatsAppIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 0C5.371 0 0 5.371 0 12c0 2.109.548 4.104 1.591 5.897L0 24l6.324-1.618C8.106 23.451 10.054 24 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm5.888 16.171c-.244.685-1.421 1.338-2.019 1.413-.513.064-1.204.117-3.498-1.059-2.947-1.591-4.848-5.687-4.996-5.947-.145-.253-1.187-1.563-1.187-2.984 0-1.424.752-2.129 1.021-2.422.269-.294.593-.363.791-.363.198 0 .396.002.568.01.185.009.431-.07.674.525.243.598.829 2.07.902 2.216.073.146.121.33.027.532-.097.203-.145.33-.291.508-.147.176-.307.391-.439.526-.146.145-.297.304-.131.593.167.294.744 1.241 1.594 2.012 1.1.981 2.024 1.285 2.318 1.426.294.143.466.121.636-.072.174-.192.748-.872.948-1.172.199-.303.398-.246.673-.147.271.098 1.708.806 1.996.952.294.145.489.221.56.343.072.121.072.707-.172 1.391z" />
        </svg>
    );
}
