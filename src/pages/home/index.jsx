import Articles from '../home/Articles'
 import ContactUs from '../home/ContactUs'
import Store from './Store'
import Opinions from './Opinions'
import Footer from './Footer'
import Brands from './Brands'
export default function index() {
    return (
        <>
             <div className='bg-gray-200'>

                <Store />
            </div>
            <div className="  max-w-7xl mx-auto sm:px-6 lg:px-8 md:px-4">
                <Brands/>
                <Opinions />
                <Articles />
                <ContactUs />
                <Footer />
            </div>
        </>
    )
}