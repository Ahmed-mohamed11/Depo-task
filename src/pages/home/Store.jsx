import google1 from '../../images/gfx/google1.webp'
import google2 from '../../images/gfx/apple1.webp'
import mainImage from '../../images/gfx/app-mokup.webp'
export default function Store() {
    return (
        <div className="bg-gradient-to-br from-[#f0f0f0] to-gray-50  flex flex-col items-center justify-center p-4 md:pt-12">
            <div className="  w-full text-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-4">Our Solutions</h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                    Your digital journey is as unique as your vision,and we are ready    
                                    <br />
                    to remove any obstacles along the way
                </p>
                <div className="flex justify-center space-x-4 mb-12">
                    <img
                        src={google1}
                        alt="Get it on Google Play"
                        width={165}
                        height={40}
                        className="h-10 w-auto"
                    />
                    <img
                        src={google2}
                        alt="Download on the App Store"
                        width={165}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <img
                        src={mainImage}
                        alt="App interface on various devices"
                        width={800}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
            </div>

        </div>
    )
}