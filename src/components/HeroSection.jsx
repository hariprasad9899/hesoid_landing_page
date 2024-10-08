import video3 from "../assets/video3.mp4"
import video4 from "../assets/video4.mp4"

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Decentralized Teams,
                <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
                    {" "}
                    Centralized Success
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Our decentralized and flexible team delivers secure, scalable
                solutions tailored to your needs. From web development to AI/ML
                and cybersecurity, we provide innovative services that drive
                lasting success for your business.
            </p>
            <div className="flex justify-center my-10">
                <a
                    href="#contact"
                    className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
                >
                    Get in touch
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsinline
                    className="rounded-lg w-1/2 border border-white-700 shadow-sm shadow-white-400 mx-2 my-4"
                >
                    <source src={video4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    playsinline
                    className="rounded-lg w-1/2 border border-white-700 shadow-sm shadow-white-400 mx-2 my-4"
                >
                    <source src={video3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HeroSection
