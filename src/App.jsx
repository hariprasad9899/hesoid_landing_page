import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Expertise from "./components/Expertise"
import Services from "./components/Services"
import Footer from "./components/Footer"

import Testimonials from "./components/Testimonials"
import Technologies from "./components/Technologies"
import { AboutUs } from "./components/AboutUs"

const App = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <Services />
                <Expertise />
                <Technologies />
                <Testimonials />
                <AboutUs />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default App
