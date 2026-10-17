import React from 'react';
import Playimg from "../../../assets/play.png";
import bannerImg from "../../../assets/banner.png";

const Banner = () => {
    return (
        <div className="contaier mx-auto w-full overflow-hidden">
            <div className="min-h-[60vh] max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 flex flex-col md:flex-row items-center gap-10">

                <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <p className="self-start border border-purple-200 rounded-full text-purple-600 bg-blue-50 px-4 py-2 text-sm">
                        New: AI-Powered Tools Available
                    </p>

                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Super Charge Your
                        <span className="block">Digital Workflow</span>
                    </h1>

                    <p className="text-gray-500 text-base md:text-lg leading-7 max-w-xl">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-2">
                        <button className="border border-amber-950 rounded-lg bg-purple-400 hover:bg-purple-500 px-6 py-3 font-bold transition">
                            Explore Product
                        </button>

                        <button className="flex items-center justify-center gap-3 border-2 border-purple-500 rounded-lg px-5 py-3 hover:bg-purple-50 transition">
                            <img
                                src={Playimg}
                                alt=""
                                className="w-6 h-6 object-contain"
                            />
                            <span className="whitespace-nowrap">
                                Watch Demo
                            </span>
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src={bannerImg}
                        alt="Digital workflow technology"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-3 gap-4 bg-purple-400 px-4 sm:px-8 py-6 text-white text-center">
                <div className='container mx-auto'>
                    <p className="font-bold text-2xl md:text-3xl">50k+</p>
                    <p className="text-sm md:text-base">Active Users</p>
                </div>

                <div>
                    <p className="font-bold text-2xl md:text-3xl">200k+</p>
                    <p className="text-sm md:text-base">Premium Tools</p>
                </div>

                <div>
                    <p className="font-bold text-2xl md:text-3xl">4.9</p>
                    <p className="text-sm md:text-base">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;