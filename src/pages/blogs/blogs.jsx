// import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

const Blogs = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col items-center p-10 min-h-screen">
            {/* Card Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 w-full">
                <div className="mb-6 text-right">
                    <h3 className="text-lg font-semibold text-gray-800">
                        من التواصل إلى المرونة: إتقان إدارة الفريق الحديثة
                    </h3>
                </div>
                <div className="flex flex-col items-center text-right">
                    <div className="mb-6">
                        <img
                            src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
                            alt="Team Icon"
                            className="w-full max-w-md"
                        />
                    </div>
                    <div className="mb-6 text-right">
                        <h2 className="text-3xl font-bold text-purple-600 mb-6">
                            المهارات الأساسية التي يحتاجها كل مدير
                        </h2>
                        <p className="text-gray-800 mb-6">
                            تطوّر مهارات واستراتيجيات إدارة الفريق بسرعة. سواء كنت مديرًا
                            متمرسًا أو بدأت للتو، فإن البقاء على اطلاع بأحدث الاستراتيجيات
                            والمهارات أمر بالغ الأهمية.
                        </p>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full hover:opacity-90 transition duration-200">
                            متابعة قراءة
                        </button>
                    </div>
                    <div className="w-full mt-6 text-gray-800 text-sm flex justify-end gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-medium">إدارة المشاريع، إدارة فريق العمل</span>
                            <FaTag />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-medium">إدارة المشاريع، إدارة فريق العمل</span>
                            <FaFolder />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-medium">بروجكتو</span>
                            <FaUser />
                        </div>
                    </div>
                </div>
                {/* Pagination Section */}
            </div>
            <div className="w-full flex justify-end items-center mt-8 gap-4 text-gray-800 text-lg font-semibold">
                <span className="cursor-pointer hover:text-blue-600 transition">1</span>
                <span className="cursor-pointer hover:text-blue-600 transition">2</span>
                <span className="cursor-pointer hover:text-blue-600 transition">3</span>
                <span className="cursor-pointer text-blue-600 hover:text-blue-800 transition">مقالات أقدم</span>
            </div>
        </div>

    );
};

export default Blogs;
