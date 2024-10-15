export default function Pricing() {
    return (
        <div className="mx-auto   pt-8 text-center" dir="rtl">
            <h1 className="text-4xl font-bold mb-4">الباقات</h1>
            <p className="text-lg mb-8">
                بروجكتي يساعدك في إدارة و مراقبة مشاريعك مع فريقك بشكل أسرع و أذكى ، و لايتطلب منك خبرة مسبقة لكي تدير عملك
            </p>

            <div className="flex justify-center items-end">
                <h1 className="w-52  h-56 border text-2xl border-gray-200 flex items-center justify-center rounded-lg">
                    السعر
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   w-full">
                    {[
                        { name: "مجانًا", price: "0 ريال", period: "للأبد", color: "red" },
                        { name: "أساسي", price: "79.99 ريال", period: "شهريًا للدفع السنوي", subPrice: "* 99 ريال شهري للدفع الشهري", color: "green" },
                        { name: "احترافي", price: "159.99 ريال", period: "شهريًا للدفع السنوي", subPrice: "* 199 ريال شهري للدفع الشهري", color: "purple" },
                        { name: "منظمات", price: "دعنا نتحدث", period: "نحتاج إلى مزيد من التحكم والدعم ؟", color: "blue" },
                    ].map((tier, index) => (
                        <div
                            key={index}
                            className="border my-auto overflow-hidden"
                            style={{ borderTop: `4px solid ${tier.color}` }}
                        >
                            <div className="">
                                <h2 className="text-xl font-bold bg-gray-200 p-2">{tier.name}</h2>
                            </div>
                            <div className="p-8">
                                <p className="text-3xl font-bold mb-2">{tier.price}</p>
                                <p className="text-sm mb-4">{tier.period}</p>
                                {tier.subPrice && <p className="text-sm mb-4">{tier.subPrice}</p>}
                                <button className="w-full mb-4 border-2 border-blue-400 rounded-full">
                                    {tier.name === "منظمات" ? "اتصل بنا" : "اطلب الآن"}
                                </button>
                                {index < 3 && <p className="text-sm">30 يوم تجربة مجانية ✓</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
