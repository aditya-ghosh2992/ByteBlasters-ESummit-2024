import React, { useEffect } from "react";
import image1 from "../assets/Lockkkk.png";
import image2 from "../assets/Controllerrrrr.png";
import image3 from "../assets/Terminallll.png";
import image4 from "../assets/Main.png";
import AOS from "aos"; // For scroll animations
import "aos/dist/aos.css"; // Import AOS CSS

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

    return (
        <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Hero Section */}
            <div
                className="container mx-auto flex flex-col lg:flex-row items-center py-48 px-8"
                style={{ minHeight: "100vh" }}
            >
                {/* Left Side */}
                <div
                    className="lg:w-1/2 text-center lg:text-left"
                    data-aos="fade-right"
                >
                    <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight">
                        Empower Your Learning with <span className="text-orange-500">NeuralLearn</span>
                    </h1>
                    <p className="text-gray-300 mt-8 text-xl lg:text-2xl leading-relaxed">
                        Discover courses across the internet that match your <span className="text-blue-400 font-semibold">interests</span> and <span className="text-orange-500 font-semibold">goals</span>. Learn smarter, faster, and better with personalized recommendations.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-12 rounded-full shadow-lg transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:translate-y-[-3px]">
                            Try NeuralLearn
                        </button>
                        <button className="bg-gradient-to-r from-teal-400 to-green-400 hover:from-green-400 hover:to-teal-400 text-white font-bold py-4 px-12 rounded-full shadow-lg transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:translate-y-[-3px]">
                            Open Source on GitHub
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    className="lg:w-1/2 mt-12 lg:mt-0"
                    data-aos="fade-left"
                >
                    <div className="relative group">
                        <img
                            src={image4} // Replace with actual image URL
                            alt="AI Illustration"
                            className="rounded-3xl shadow-2xl max-w-full mx-auto transform transition-all duration-700 group-hover:scale-110 group-hover:translate-y-[-5px] group-hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Feature 1 */}
                    <div
                        className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative group"
                        data-aos="fade-up"
                    >
                        <img
                            src={image1}
                            alt="Private Icon"
                            className="w-28 h-28 mx-auto mb-6 animate-bounce"
                        />
                        <h3 className="text-3xl font-bold text-white">Private</h3>
                        <p className="text-gray-400 mt-4">
                            Your data is secure, private, and only accessible to you.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div
                        className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative group"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
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

                    {/* Feature 3 */}
                    <div
                        className="p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative group"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
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
    );
};

export default HeroSection;