import React from "react";
import NavbarFront from "../components/NavbarFront";
import background from "../assets/background_banner.jpg";
import TitleCards from "../components/TitleCards";
const EnterPage = () => {
    return (
        <div className="relative h-screen w-full bg-black text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${background})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />

            </div>

            {/* Navbar */}
            <NavbarFront />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-[90vh] text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
                    Unlimited movies, TV shows and more
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    Watch anywhere. Cancel anytime.
                </p>
                <p className="mt-6 text-md md:text-lg">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {/* Email + Button */}
                <div className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full md:flex-1 px-4 py-3 rounded-md text-white border-2 border-amber-50 bg-transparent focus:outline-none font-bold"
                    />
                    <button className="bg-red-600 px-6 py-3 rounded-md font-semibold text-lg hover:bg-red-700 transition">
                        Get Started &gt;
                    </button>
                </div>
            </div>

            {/* Bottom Neon Curve — INSIDE background */}
            {/* Bottom Neon Curve — INSIDE background */}
            <div className="absolute bottom-0 left-0 w-full h-32 z-10">
                <svg
                    viewBox="0 0 1920 120"
                    fill="none"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    {/* Main black overlay with curve */}
                    <path
                        d="M0 60 Q960 0 1920 60 L1920 120 L0 120 Z"
                        fill="black"
                    />

                    {/* Neon Gradient Stroke */}
                    <path
                        d="M0 60 Q960 0 1920 60"
                        stroke="url(#neonGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="animate-pulseStroke"
                    />

                    {/* Gradient */}
                    <defs>
                        <linearGradient
                            id="neonGradient"
                            x1="0"
                            x2="1920"
                            y1="0"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#e11d48" /> {/* Rose */}
                            <stop offset="0.5" stopColor="#ec4899" /> {/* Pink */}
                            <stop offset="1" stopColor="#3b82f6" /> {/* Blue */}
                        </linearGradient>
                    </defs>
                </svg>

                {/* Fade for smooth blend */}
                <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-black/80 to-black"></div>

                {/* Blue Glow Spotlight */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center mt-10">
                    <div
                        className="w-[900px] h-[60px] bg-blue-500/50 blur-3xl -translate-y-3"
                        style={{
                            // clipPath: "ellipse(50% 40% at 50% 100%)", // makes a half-oval glow under the curve
                            // clipPath: "circle(0% 10% at 10% 10%)"
                        }}
                    ></div>
                </div>
            </div>
            <div className="mt-15">
                <TitleCards section="Popular_Section" />
            </div>
        </div>
    );
};

export default EnterPage;
