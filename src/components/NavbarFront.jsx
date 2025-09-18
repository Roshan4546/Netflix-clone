import React, { useState } from "react";
import caret from "../assets/caret_icon.svg";
import NetflixLogo from "../assets/logo.png";
import { IoLanguage } from "react-icons/io5";
const NavbarFront = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between px-40 py-8 absolute top-0 left-0 z-20">
            {/* Left - Logo */}
            <div>
                <img src={NetflixLogo} alt="Netflix" className="h-10" />
            </div>

            {/* Right - Language & Sign In */}
            <div className="flex items-center gap-6">
                {/* Language Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 px-3 py-1 border border-gray-400 rounded-md bg-transparent bg-opacity-70 hover:border-white transition"
                    >
                        <span><IoLanguage /></span>
                        <span>English</span>
                        <img src={caret} alt="caret" className="w-3 h-3" />
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-36 bg-black border border-gray-600 rounded-md shadow-lg">
                            <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                English
                            </p>
                            <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                Japanese
                            </p>
                            <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                Hindi
                            </p>
                        </div>
                    )}
                </div>

                {/* Sign In Button */}
                <button className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700 transition">
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default NavbarFront;
