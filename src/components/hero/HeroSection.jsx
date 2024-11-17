import React from "react";
import image1 from "../assets/Lockkkk.png";
import image2 from "../assets/Controllerrrrr.png";
import image3 from "../assets/Terminallll.png";
import image4 from "../assets/Main.png";

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Hero Section */}
            <div
                className="container mx-auto flex flex-col lg:flex-row items-center py-40 px-8"
                style={{ minHeight: "100vh" }}
            >
                {/* Left Side */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight">
                        Facing <span className="text-orange-500 animate-pulse">Difficulties</span> in Finding the 
                        <span className="text-blue-400"> Right Courses?</span>
                    </h1>
                    <p className="text-gray-300 mt-8 text-xl lg:text-2xl leading-relaxed">
                        NeuralLearn helps you find <span className="text-blue-400 font-semibold">personalized</span>, 
                        <span className="text-orange-500 font-semibold"> private</span>, and 
                        <span className="text-green-400 font-semibold"> effective</span> courses instantly. Your learning journey, tailored to perfection.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <button
                            onClick={() => (window.location.href = "http://127.0.0.1:5001/")}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:translate-y-[-3px]"
                        >
                            Try NeuralLearn
                        </button>
                        <button
                            onClick={() => (window.location.href = "https://github.com/AnkanMisra/CourseRecommendation_ByteBlasters")}
                            className="bg-gradient-to-r from-teal-400 to-green-400 hover:from-green-400 hover:to-teal-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:translate-y-[-3px]"
                        >
                            Open Source on GitHub
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <div className="relative group">
                        <img
                            src={image4} // Replace with actual image URL
                            alt="AI Illustration"
                            className="rounded-3xl shadow-2xl max-w-full mx-auto transform transition-all duration-700 group-hover:scale-105 group-hover:translate-y-[-5px] group-hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-700"></div>
                        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <p className="text-xl font-semibold text-white">AI-Powered Course Finder</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Feature 1 */}
                    <div
                        className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl relative group"
                        data-aos="fade-up"
                    >
                        {/* Shining Border */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative z-10">
                            <img
                                src={image1}
                                alt="Private Icon"
                                className="w-28 h-28 mx-auto mb-6"
                            />
                            <h3 className="text-3xl font-bold text-white">Private</h3>
                            <p className="text-gray-400 mt-4">
                                Your data is secure, private, and only accessible to you.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div
                        className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl relative group"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {/* Shining Border */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative z-10">
                            <img
                                src={image2}
                                alt="Easy Icon"
                                className="w-28 h-28 mx-auto mb-6"
                            />
                            <h3 className="text-3xl font-bold text-white">Easy</h3>
                            <p className="text-gray-400 mt-4">
                                Simple and intuitive. Just one click away.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div
                        className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl relative group"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {/* Shining Border */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative z-10">
                            <img
                                src={image3}
                                alt="Customizable Icon"
                                className="w-28 h-28 mx-auto mb-6"
                            />
                            <h3 className="text-3xl font-bold text-white">Customizable</h3>
                            <p className="text-gray-400 mt-4">
                                Fully adaptable. Create and share your own prompts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;