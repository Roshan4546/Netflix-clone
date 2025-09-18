import React from 'react'
import Navbar from '../components/Navbar'
import heroBanner from "../assets/hero_banner.jpg"
import heroTitle from "../assets/hero_title.png"
import play from "../assets/play_icon.png"
import info from "../assets/info_icon.png"
import TitleCards from '../components/TitleCards'

const Home = () => {
    return (
        <div className="relative w-full h-full text-white bg-black">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[80vh]">
                {/* Hero Banner */}
                <img
                    src={heroBanner}
                    alt="Hero Banner"
                    className="w-full h-full object-cover"
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Hero Content */}
                <div className="absolute bottom-28 left-8 md:left-20 max-w-xl">
                    <img
                        src={heroTitle}
                        alt="Hero Title"
                        className="w-[280px] md:w-[400px] mb-6"
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
            </div>

            {/* Bottom Wave Effect */}
            <div className="relative h-24 bg-black overflow-hidden -mt-1">
                <div className="absolute inset-x-0 top-0 h-20">
                    <svg
                        viewBox="0 0 1920 120"
                        fill="none"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                    >
                        {/* Main Black Curve */}
                        <path
                            d="M0 40 C480 120 1440 0 1920 40 L1920 120 L0 120 Z"
                            fill="#000000"
                        />

                        {/* Neon Gradient Stroke */}
                        <path
                            d="M0 45 C480 110 1440 10 1920 45"
                            stroke="url(#neonGradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            filter="url(#glow)"
                        />

                        {/* Define Gradient + Glow */}
                        <defs>
                            <linearGradient id="neonGradient" x1="0" x2="1920" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#e11d48" />   {/* Rose */}
                                <stop offset="0.5" stopColor="#ec4899" /> {/* Pink */}
                                <stop offset="1" stopColor="#6366f1" />   {/* Indigo */}
                            </linearGradient>

                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>
                </div>

                {/* Fade Overlay for Smooth Blend */}
                <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-black/80 to-black"></div>
            </div>

            {/* Title Cards Section */}
            <TitleCards />
        </div>
    )
}

export default Home
