import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    return (
        <div className="min-h-screen flex items-center justify-center p-4   font-sans">
            <div className="w-full max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">
                    <span className="text-black">Get in </span>
                    <span className="text-sky-500">Touch</span>
                </h1>
                <p className="text-center text-gray-600 mb-8 text-sm">
                    Contact us anytime, and one of our support team members will get back to you as soon as possible.
                </p>
                <form className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
                    <h2 className="text-lg font-semibold text-center mb-6">Fill in your details</h2>

                    {/* Name Input */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    className="block w-full pl-10 pr-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 text-gray-700"
                                    required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Phone Input */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="Your Phone Number"
                                    className="block w-full pl-10 pr-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 text-gray-700"
                                    required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaPhone className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Your Email"
                                className="block w-full pl-10 pr-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-[#7C3AED] text-gray-700"
                                required
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdMailOutline className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Enter your message and how we can assist you..."
                            className="block w-full px-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-[#7C3AED] text-gray-700"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-3 border-none rounded-full shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-150 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
