import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Expertise from "./components/Expertise"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import { AboutUs } from "./components/AboutUs"

const App = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <Services />
                <Expertise />
                <Pricing />
                <Testimonials />
                <AboutUs />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default App
