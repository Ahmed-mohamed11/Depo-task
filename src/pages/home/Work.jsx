import HeroImage from '../../images/gfx/mockup-header2.webp';
import InHero1 from '../../images/gfx/2.webp';
import InHero2 from '../../images/gfx/3.webp';
import borderHeroRight from '../../images/gfx/7.webp';
import borderHeroCenter from '../../images/gfx/5.webp';
import borderHeroBottom from '../../images/gfx/6.webp';
import borderHeroTop from '../../images/gfx/8.webp';
import borderHeroBottom2 from '../../images/gfx/4.webp';
import wavy from '../../images/gfx/shape2.webp';

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-purple-600">
            <div className="relative top-20 w-full flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto rounded-lg overflow-hidden flex flex-col items-center gap-32 md:flex-row">
                    <div className="text-white text-right p-4 md:p-8">
                        <h2 className="text-4xl font-bold mb-4">بروجكتو | ادارة المشاريع وفريق العمل بسهولة</h2>
                        <p className="mb-8">
                            بروجكتو يمكنك من ادارة ومراقبة مشاريعك باسرع وافضل الطرق
                            انك لا تحتاج ان تكون خبير لادارة عملك
                        </p>
                        <button className="w-full bg-green-500 text-white rounded-full py-3 font-bold hover:bg-green-600 transition duration-300">
                            ! ابدأ الآن . مجانا
                        </button>
                    </div>
                    <div className="md:p-8 flex flex-col justify-between items-center">
                        <div className="space-y-4 relative">
                            <img
                                src={HeroImage}
                                alt="Project Management Dashboard"
                                width={1000}
                                height={500}
                                className="rounded-lg shadow-md"
                            />
                            <div>
                                <img
                                    src={InHero1}
                                    width={150}
                                    height={200}
                                    alt="Project Management Dashboard"
                                    className="rounded-lg absolute mt-1 animate-move1"
                                />
                                <img
                                    src={InHero2}
                                    width={150}
                                    height={200}
                                    alt="Project Management Dashboard"
                                    className="rounded-lg absolute animate-move2  "
                                />
                            </div>
                            <div>
                                <img
                                    src={borderHeroRight}
                                    width={100}
                                    height={200}
                                    alt="Project Management Dashboard"
                                    className="rounded-lg absolute top-5 mt-1 right-0 animate-move3 "
                                />
                                <img
                                    src={borderHeroCenter}
                                    width={50}
                                    height={200}
                                    alt="Project Management Dashboard"
                                    className="rounded-lg absolute top-0 mt-1 left-[50%] animate-move4  "
                                />
                                <img
                                    src={borderHeroBottom}
                                    width={150}
                                    height={200}
                                    alt="Project Management Dashboard"
                                    className="rounded-lg absolute bottom-5 mt-1 right-0 animate-move5 "
                                />
                                <img
                                    src={borderHeroTop}
                                    width={100}
                                    height={200}
                                    alt="Project Management Dashboard"
                                    className="rounded-lg absolute top-5 mt-1 left-0 animate-move6  "
                                />
                                <img
                                    src={borderHeroBottom2}
                                    width={100}
                                    height={200}
                                    alt="Project Management Dashboard"
                                    className="rounded-lg absolute bottom-5 mt-1 left-0 animate-move7  "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={wavy} alt="wavy" className='w-full object-cover' />
        </div>
    );
}
