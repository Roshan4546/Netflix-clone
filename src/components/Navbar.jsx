import React, { useState } from 'react'
import logo from "../assets/logo.png"
import search from "../assets/search_icon.svg"
import bell from "../assets/bell_icon.svg"
import profile from "../assets/profile_img.png"
import caret from "../assets/caret_icon.svg"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent z-50">
            {/* Left Section */}
            <div className="flex items-center gap-8">
                <img src={logo} alt="Netflix Logo" className="w-24 cursor-pointer" />
                <ul className="hidden md:flex items-center gap-6 text-sm text-white">
                    <li className="cursor-pointer hover:text-gray-300">Home</li>
                    <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
                    <li className="cursor-pointer hover:text-gray-300">Movies</li>
                    <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
                    <li className="cursor-pointer hover:text-gray-300">My List</li>
                    <li className="cursor-pointer hover:text-gray-300">Browse by Languages</li>
                </ul>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6 text-white">
                <img src={search} alt="Search" className="w-6 cursor-pointer" />
                <p className="hidden md:block cursor-pointer hover:text-gray-300">Children</p>
                <img src={bell} alt="Notifications" className="w-6 cursor-pointer" />

                {/* Profile with Dropdown */}
                <div
                    className="flex items-center gap-2 cursor-pointer relative"
                    onClick={() => setOpen(!open)} // !true
                >
                    <img src={profile} alt="Profile" className="w-8 rounded" />
                    <img
                        src={caret}
                        alt="Dropdown"
                        className={`w-3 transition-transform ${open ? "rotate-180" : ""}`}
                    />

                    {open && (
                        <div className="absolute top-10 right-0 bg-black text-white rounded-md shadow-lg py-2 w-32 z-50">
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
