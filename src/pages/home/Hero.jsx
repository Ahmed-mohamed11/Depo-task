  import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div
            className="w-full h-screen relative"
            
        >
            <div className="relative top-20 w-full flex items-center justify-center">
                <div className="    rounded-lg overflow-hidden flex flex-col items-end gap-32 md:flex-row">
                    <div className=" p-4 md:p-8">
                        <h2 className="text-4xl font-bold mb-4">Unified one solution any device</h2>
                        <p className="mb-8">
                            We help businesses deliver digital customer experiences that are personalized, optimized, and synchronized.
                        </p>
                        <button className="flex justify-between items-center gap-2 bg-sky-500 text-white rounded-2xl p-3 font-bold hover:bg-sky-600 transition duration-300">
                            <ArrowRight /> Get started free
                        </button>
                    </div>
                </div>
            </div>
         </div>
    );
}
