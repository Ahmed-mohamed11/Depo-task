"use client"

import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

const faqs = [
    {
        question: "كيف تنظم اقسام فريق العمل في بروجكتو ؟",
        answer: "يمكنك تنظيم أقسام فريق العمل في بروجكتو من خلال إنشاء مجموعات وتعيين الأعضاء إليها. يمكنك أيضًا تحديد الأدوار والصلاحيات لكل مجموعة لضمان سير العمل بشكل فعال."
    },
    {
        question: "كيف يمكن ان يساعدك مخطط جانت Gantt Charts في إدارة الجدول الزمني للمشروع؟",
        answer: "يساعد مخطط جانت في إدارة الجدول الزمني للمشروع من خلال عرض المهام والأنشطة على جدول زمني مرئي. يمكنك رؤية تواريخ البدء والانتهاء، والعلاقات بين المهام، والتقدم المحرز بسهولة."
    },
    {
        question: "كيف أقوم بتعيين مدير مشروع على تطبيق بروجكتو ؟",
        answer: "لتعيين مدير مشروع في بروجكتو، انتقل إلى إعدادات المشروع، ثم اختر قسم 'الأعضاء والأدوار'. من هناك، يمكنك تحديد عضو وتغيير دوره إلى 'مدير المشروع'. تأكد من منح الصلاحيات المناسبة."
    }
]

export default function CommonQuestions() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className='bg-gray-50 py-20'> 
            <div className="max-w-3xl mx-auto p-4 rounded-lg  ">
                <h2 className="text-3xl font-bold text-right mb-6 text-gray-800">الأسئلة الشائعة</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                className="w-full text-right p-4 focus:outline-none hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                                onClick={() => toggleQuestion(index)}
                            >
                                <ChevronDownIcon
                                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                                <span className="font-medium text-gray-800">{faq.question}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-blue-50 text-right animate-fadeIn">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
     </div>
    )
}