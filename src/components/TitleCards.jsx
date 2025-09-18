import React, { useRef } from 'react';
import CardData from "../components/CardData";
import TrendingData from './TrendingData';
import AnimeData from './AnimeData';
import { GrNext, GrPrevious } from "react-icons/gr";

const TitleCards = () => {
    // refs for each section
    const popularRef = useRef(null);
    const animeRef = useRef(null);
    const trendingRef = useRef(null);

    // reusable scroll function
    const scroll = (ref, direction) => {
        if (ref.current) {
            const { scrollLeft, clientWidth } = ref.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className="text-white bg-black px-30 py-6">
            {/* Popular Section */}
            {
                section === "Popular_Section" && (
                    <div>
                        <h2 className="text-2xl font-extrabold mb-4">Popular on Netflix</h2>
                        <div className="flex items-center gap-4">
                            {/* Left Button */}
                            <button
                                onClick={() => scroll(popularRef, "left")}
                                className="bg-gray-900 hover:bg-gray-800 p-3 h-[5rem] w-[3rem] rounded-2xl flex items-center justify-center"
                            >
                                <GrPrevious size={24} />
                            </button>


                            {/* Cards Row */}
                            <div
                                ref={popularRef}
                                className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth flex-1"
                            >
                                {CardData.map((card, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[240px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10"
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.name}
                                            className="w-full h-60 object-cover rounded-lg"
                                        />
                                        <p className="mt-3 text-base text-gray-200 font-semibold">
                                            {card.name}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Right Button */}
                            <button
                                onClick={() => scroll(popularRef, "right")}
                                className="bg-gray-900 hover:bg-gray-800 p-3 h-[5rem] relative w-[3rem] rounded-2xl flex items-center justify-center"
                            >
                                <GrNext size={24} />
                            </button>

                        </div>
                    </div>
                )
            }

            {/* Anime Section */}
            <div className="mt-[5rem]">
                <h2 className="text-2xl font-extrabold mb-4">Watch New Episodes</h2>
                <div className="flex items-center gap-4">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll(popularRef, "left")}
                        className="bg-gray-900 hover:bg-gray-800 p-3 h-[5rem] w-[3rem] rounded-2xl flex items-center justify-center"
                    >
                        <GrPrevious size={24} />
                    </button>

                    {/* Cards Row */}
                    <div
                        ref={animeRef}
                        className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth flex-1"
                    >
                        {AnimeData.map((card, index) => (
                            <div
                                key={index}
                                className="min-w-[240px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10"
                            >
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className="w-full h-60 object-cover rounded-lg"
                                />
                                <p className="mt-3 text-base text-gray-200 font-semibold">
                                    {card.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll(popularRef, "right")}
                        className="bg-gray-900 hover:bg-gray-800 p-3 h-[5rem] relative w-[3rem] rounded-2xl flex items-center justify-center"
                    >
                        <GrNext size={24} />
                    </button>
                </div>
            </div>

            {/* Trending Section */}
            <div className="mt-[5rem]">
                <h2 className="text-2xl font-extrabold mb-4">Trending Now</h2>
                <div className="flex items-center gap-4">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll(popularRef, "left")}
                        className="bg-gray-900 hover:bg-gray-800 p-3 h-[5rem] w-[3rem] rounded-2xl flex items-center justify-center"
                    >
                        <GrPrevious size={24} />
                    </button>

                    {/* Cards Row */}
                    <div
                        ref={trendingRef}
                        className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth flex-1"
                    >
                        {TrendingData.map((card, index) => (
                            <div
                                key={index}
                                className="min-w-[240px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10"
                            >
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className="w-full h-60 object-cover rounded-lg"
                                />
                                <p className="mt-3 text-base text-gray-200 font-semibold">
                                    {card.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll(popularRef, "right")}
                        className="bg-gray-900 hover:bg-gray-800 p-3 h-[5rem] relative w-[3rem] rounded-2xl flex items-center justify-center"
                    >
                        <GrNext size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TitleCards;
