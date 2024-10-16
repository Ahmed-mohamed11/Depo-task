import ContactUs from '../home/ContactUs'
import Store from './Store'
import Opinions from './Opinions'
import Footer from './Footer'
import Brands from './Brands'
import Clients from './Clients'
import ProjectManager from "./ProjectManager"
import Features from './Features'
import Hero from './hero/Hero'
import Articles from './article/Articles'

export default function index() {
    return (
        <>
            <div className='bg-gray-200'>
                <Hero />
                <Store />
            </div>
            <div className="  max-w-7xl mx-auto sm:px-6 lg:px-8 md:px-4">
                <Brands />
                <Opinions />
                <Features />
                <Clients />
                <Articles />
                <ProjectManager />
                <ContactUs />
            </div>
            <Footer />
        </>
    )
}