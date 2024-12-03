import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import './App.css'
import bgUrl from '/mesh.svg'
import {partners} from './data/partners'
import Slider from './components/Slider'
import Roadmapsection from './components/RoadmapSection'
import FeaturesSection from './components/FeaturesSection'
import TestiMonial from './components/TestiMonial'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
function App() {
    const from = "0";
    const to = "-100%"
    return (

        <>
            <div className=" min-h-screen w-screen flex justify-center items-center cursor-pointer-none fixed">
                <div className="bg-[url('/grid.svg')] opacity-25 absolute inset-5 -z-50 "></div>
                <img src={bgUrl} alt="bg" className='opacity-25 -z-50 h-[600px] bottom-1 absolute ' />
            <div className='bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 '>

            </div>
            </div >
            <div className='container mx-auto relative z-10 overflow-x-hidden'>

            <NavBar />
                <HeroSection />
                <Slider images={partners} from={from} to={to}  />
                <Slider images={partners} from={to} to={from} />
                <Roadmapsection />
                <FeaturesSection />
                <TestiMonial/>
                <PricingSection />
                <Footer />
            </div>
        </>
    )
}

export default App
