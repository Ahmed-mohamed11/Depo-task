import { CheckIcon } from 'lucide-react'

export default function PricingTable1() {
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-2 text-right bg-gray-100 border" colSpan={5}>
                                <span className="text-lg font-bold">الوظائف الأساسية</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { icon: '👥', label: 'المستخدمين', values: ['3', '10', '30', '+ 30'] },
                            { icon: '📊', label: 'المشاريع', values: ['5', '100', '1000', '∞'] },
                            { icon: '📁', label: 'المجلدات', values: ['5', '100', '1000', '∞'] },
                            { icon: '📋', label: 'المهام', values: ['∞', '∞', '∞', '∞'] },
                            { icon: '💬', label: 'المحادثات', values: ['∞', '∞', '∞', '∞'] },
                            { icon: '🔔', label: 'التنبيهات الذكية', values: ['✓', '✓', '✓', '✓'] },
                            { icon: '✅', label: 'الموافقات', values: ['✓', '✓', '✓', '✓'] },
                            { icon: '📅', label: 'المخطط الزمني', values: ['', '✓', '✓', '✓'] },
                            { icon: '🧊', label: 'القوالب', values: ['', '✓', '✓', '✓'] },
                            { icon: '💾', label: 'سعة التخزين', values: ['5GB', '16GB', '30GB', '100GB'] },
                        ].map((row, index) => (
                            <tr key={index} className={'bg-white'}>
                                {/* Add a fixed width to the first td */}
                                <td className="p-2 text-right border gap-2 py-4 w-1/5">
                                    <span>{row.icon}</span>
                                    <span>{row.label}</span>
                                </td>
                                {row.values.map((value, i) => (
                                    <td key={i} className="p-2 text-center  w-1/5 border">
                                        {value === '✓' ? (
                                            <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                                        ) : value === '∞' ? (
                                            <span className="text-xl">∞</span>
                                        ) : (
                                            value
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
