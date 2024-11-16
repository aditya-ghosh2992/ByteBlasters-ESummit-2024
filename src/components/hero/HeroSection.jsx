import React from "react";

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col lg:flex-row items-center py-16 px-6">
                {/* Left Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Facing Diffculites in finding the<span className="text-orange-500">correct courses?</span>
                    </h1>
                    <p className="text-gray-300 mt-4 text-lg">
                        Get instant answers about anything you’ve seen or heard. Completely private and personalized to you.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105 mb-4 sm:mb-0 sm:mr-4">
                            Try NeuralLearn
                        </button>
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                         Open Souce Code and Github
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <img
                        src=""     //source for photo
                        alt=""
                        className="w-full max-w-lg mx-auto"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-800 py-10">
                <div className="container mx-auto flex flex-wrap justify-between items-center text-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold">Private</h3>
                        <p className="text-gray-400 mt-2">
                            Your recorded data stays on your device until you attach it.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold">Easy</h3>
                        <p className="text-gray-400 mt-2">
                            Always available, one click away.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-2xl font-bold">Customizable</h3>
                        <p className="text-gray-400 mt-2">
                            Create & share your prompts. Open source as examples!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
