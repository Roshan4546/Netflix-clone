import React from 'react'
import Navbar from '../components/Navbar'
import heroBanner from "../assets/hero_banner.jpg"
import heroTitle from "../assets/hero_title.png"
import play from "../assets/play_icon.png"
import info from "../assets/info_icon.png"

const Home = () => {
    return (
        <div className="relative w-full h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Hero Banner */}
            <img
                src={heroBanner}
                alt="Hero Banner"
                className="w-full h-full object-cover"
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Hero Content */}
            <div className="absolute bottom-32 left-12 md:left-24 max-w-xl">
                <img
                    src={heroTitle}
                    alt="Hero Title"
                    className="w-[300px] md:w-[400px] mb-6"
                />

                <p className="text-sm md:text-lg text-gray-200 leading-relaxed mb-6 drop-shadow-lg">
                    Discovering his ties to a secret ancient order, a young man living in
                    modern Istanbul embarks on a quest to save the city from an immortal enemy.
                </p>

                <div className="flex items-center gap-4">
                    {/* Play Button */}
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition shadow-md cursor-pointer">
                        <img src={play} alt="Play" className="w-5 md:w-6" />
                        <span className="text-base md:text-lg">Play</span>
                    </button>

                    {/* More Info Button */}
                    <button className="flex items-center gap-2 bg-gray-700/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition shadow-md cursor-pointer">
                        <img src={info} alt="More Info" className="w-5 md:w-6" />
                        <span className="text-base md:text-lg">More Info</span>
                    </button>
                </div>
            </div>

            {/* Bottom Fade Effect */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative h-20 bg-black overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-12">
                    <svg
                        viewBox="0 0 1920 120"
                        fill="none"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 40 C480 120 1440 0 1920 40 L1920 120 L0 120 Z"
                            fill="#111827"
                        />
                        <path
                            d="M0 45 C480 110 1440 10 1920 45"
                            stroke="#e11d48"
                            strokeWidth="5"
                        />
                    </svg>
                </div>
                <div className="absolute inset-0 h-full bg-gradient-to-b from-indigo-900/60 to-black"></div>
            </div>

        </div>
    )
}

export default Home
