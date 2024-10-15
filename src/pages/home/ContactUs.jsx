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
    })




    return (
        <div className=" min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="">
                <h1 className="text-4xl font-bold text-center mb-2">
                    <span className="text-black">تواصل </span>
                    <span className="text-[#7C3AED]">معنا</span>
                </h1>
                <p className="text-center text-gray-600 mb-8 text-sm">
                    راسلنا في أي وقت وسيقوم أحد أعضاء الدعم الفني في الرد عليكم في أقرب وقت ممكن
                </p>
                <form
                    className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl w-full space-y-6">
                    <h2 className="text-lg font-semibold text-center mb-4">قم بتعبئة البيانات</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3 text-right">الاسم</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    placeholder='الاسم'
                                    // onChange={handleChange}
                                    className="block w-full pr-10 pl-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-right"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <FaUser className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3 text-right ">رقم الهاتف</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder='رقم الهاتف'
                                    value={formData.phone}
                                    // onChange={handleChange}
                                    className="block w-full pr-10 pl-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-right"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <FaPhone className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-right">البريد الإلكتروني</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='البريد الإلكتروني'
                                    value={formData.email}
                                    // onChange={handleChange}
                                    className="block w-full pr-10 pl-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-right"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <MdMailOutline className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-right">الرسالة</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            // onChange={handleChange}
                            className="block w-full px-3 py-2 bg-[#F8F7FF] border-none rounded-lg shadow-sm focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-right"
                            placeholder="أدخل تفاصيل رسالتك وكيف نقدر نساعدك..."
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-2 border-none rounded-full shadow-sm text-white bg-[#7C3AED] hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C3AED] transition duration-150 ease-in-out"
                        >
                            إرسال
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}