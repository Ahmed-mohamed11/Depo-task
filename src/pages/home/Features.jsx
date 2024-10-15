import { ChevronDown, BarChart2, Code, Move } from 'lucide-react'
import { useState } from 'react'

export default function Features() {
    const features = [
        { icon: BarChart2, name: "AI Optimization", summary: "Our AI-powered optimization ensures peak performance and efficiency in all modules." },
        { icon: Code, name: "Code Module", summary: "This module provides you with a streamlined, developer-friendly environment to craft custom solutions." },
        { icon: Move, name: "Drag and Drop", summary: "Effortlessly move and rearrange components on the canvas with our intuitive drag-and-drop system." }
    ]

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFeature = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <div className="container mx-auto px-4 my-12 py-16">
            <div className="flex flex-col lg:flex-row min-h-screen gap-10 items-start justify-between">
                {/* Features List */}
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-4xl font-bold mb-10 text-gray-800">Website Features</h2>
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 rounded-lg shadow-lg p-5 cursor-pointer transition duration-300 hover:bg-gray-200"
                                onClick={() => toggleFeature(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <feature.icon className="w-6 h-6 text-blue-500 mr-3" />
                                        <span className="font-semibold text-gray-700">{feature.name}</span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Dropdown Content */}
                                {activeIndex === index && (
                                    <div className="mt-3 text-gray-600 text-sm">
                                        {feature.summary}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Feature Preview Card */}
                <div className="w-full lg:w-2/3 bg-blue-500 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="bg-gray-900 text-white p-4">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4 bg-gray-900 text-white p-6">
                            <ul className="space-y-2 text-gray-400">
                                <li className="hover:text-white cursor-pointer">Design</li>
                                <li className="hover:text-white cursor-pointer">All Screens</li>
                                <li className="hover:text-white cursor-pointer">Neutral</li>
                                <li className="hover:text-white cursor-pointer">Settings</li>
                            </ul>
                        </div>
                        <div className="w-3/4 bg-white p-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Feature Preview</h3>
                            <div className="bg-yellow-200 rounded-lg p-6 mb-6 shadow-md">
                                <div className="flex justify-center space-x-4 mb-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-12 h-12 bg-yellow-400 rounded-lg shadow-lg transform rotate-45"></div>
                                    ))}
                                </div>
                                <p className="text-gray-600">
                                    This section provides a sneak peek into the key capabilities of our modules.
                                </p>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-gray-800">Expand Your Website’s Potential</h4>
                            <p className="text-gray-600">
                                Discover how our features can transform your website into a powerful, responsive platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
