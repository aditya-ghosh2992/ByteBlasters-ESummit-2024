import React from "react";

const FooterSection = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* Call-to-action Section */}
            <div className="text-center py-16">
                <h1 className="text-4xl font-bold">
                    Start Finding <span className="text-gray-300 italic">stuff faster.</span>
                </h1>
                <div className="mt-6">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                        <span className="flex items-center justify-center">
                            <i className="fab fa-apple mr-2"></i> Download
                        </span>
                    </button>
                </div>
            </div>

            {/* Footer Wala Part */}
            <div className="bg-gray-800 py-8">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start text-sm">
                    {/* Left Sideee */}
                    <div className="mb-6 lg:mb-0 lg:w-1/4">
                        <h3 className="font-bold text-lg mb-2">NeuraLearn</h3>
                        <p className="text-gray-400">
                            An AI Model to Identify Courses Quickly and Efficiently
                        </p>
                        <div className="mt-4">
                            <span className="flex items-center space-x-2 text-green-400">
                                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                                <span>All systems online</span>
                                <i className="fas fa-gamepad"></i>
                            </span>
                        </div>
                    </div>

                    {/* Middle Wala Thingy */}
                    <div className="flex flex-col lg:flex-row lg:space-x-10 lg:w-3/4">
                        {/*Some Links to accoomae */}
                        <div className="mb-6 lg:mb-0">
                            <h4 className="font-bold mb-2">Useful Links</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li><a href="#" className="hover:text-white">Discord Server</a></li>
                            </ul>
                        </div>

                        {/* Resource */}
                        <div className="mb-6 lg:mb-0">
                            <h4 className="font-bold mb-2">Resources</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li><a href="#" className="hover:text-white">Support</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                                <li><a href="#" className="hover:text-white">Developer Docs</a></li>
                            </ul>
                        </div>

                        {/* Legal Information */}
                        <div className="mb-6 lg:mb-0">
                            <h4 className="font-bold mb-2">Legal Information</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li><a href="#" className="hover:text-white">Terms & Service</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Prompt Library */}
                        <div className="mb-6 lg:mb-0">
                            <h4 className="font-bold mb-2">Prompt Library</h4>
                            <ul className="space-y-1 text-gray-400">
                                <li><a href="#" className="hover:text-white">Discover Prompts for Highlight AI</a></li>
                                <li><a href="#" className="hover:text-white">Writing Prompts</a></li>
                                <li><a href="#" className="hover:text-white">Essay Prompts</a></li>
                                <li><a href="#" className="hover:text-white">Business Prompts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto text-center text-gray-500 text-xs">
                    © 2024 NeuraLearn by Team ByteBlasters. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
