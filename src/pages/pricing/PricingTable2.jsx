import { CheckIcon } from 'lucide-react'

export default function PricingTable2() {
    const features = [
        "مضاعف المشاريع",
        "التقويم",
        "لوح كانبان",
        "تعدد مدراء المشاريع",
        "المشاريع الخاصة",
        "تصدير ملف اكسل",
        "تنبيهات البريد الإلكتروني",
        "التنبيهات",
        "الدعم",
        "أرشفة المشاريع",
        "جداول خاصة",
        "معلم (Milestone)",
        "مؤشر درايف",
        "دروب بوكس",
        "مناقشة المهام",
    ]

    const supportTypes = ["المجتمع", "البريد الإلكتروني", "اتصال هاتفي", "اتصال هاتفي"]

    return (
        <div className="container mx-auto mb-8">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-2 text-right bg-gray-100 border" colSpan={5}>
                                <span className="text-lg font-bold">الوظائف الإضافية</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="p-2 text-right border w-1/5">{feature}</td>
                                {[0, 1, 2, 3].map((col) => (
                                    <td key={col} className="p-2 text-center border">
                                        {feature === "الدعم" ? (
                                            supportTypes[col]
                                        ) : (
                                            <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr className=" ">
                            <td className="p-2 text-right border  w-1/5"></td>
                            {[
                                { text: "اطلب الآن", className: "text-blue-600 border border-blue-600" },
                                { text: "30 يوم تجربة مجانية", className: "text-green-600" },
                                { text: "30 يوم تجربة مجانية", className: "text-green-600" },
                                { text: "اتصل بنا", className: "text-blue-600 border border-blue-600" },
                            ].map((button, index) => (
                                <td key={index} className="p-2 text-center  w-1/5 border">
                                    <button className={`px-4 py-2 rounded ${button.className}`}>
                                        {button.text}
                                    </button>
                                    {index === 3 && (
                                        <div className="mt-2 text-sm">تحتاج إلى مزيد من التحكم والتخصيص ؟</div>
                                    )}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}