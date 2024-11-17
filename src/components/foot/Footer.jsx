import React, { useState, useEffect } from "react";

const FooterSection = () => {
    const texts = [
        "stuff faster.",
        "the best courses.",
        "things you need.",
        "your learning path."
    ];

    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100); // Default typing speed

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[index];

            if (!isDeleting) {
                // Typing phase
                setCurrentText((prev) => fullText.substring(0, prev.length + 1));
                setSpeed(100); // Typing speed
                if (currentText === fullText) {
                    // Pause when fully typed
                    setIsDeleting(true);
                    setSpeed(1500); // Pause before erasing
                }
            } else {
                // Erasing phase
                setCurrentText((prev) => fullText.substring(0, prev.length - 1));
                setSpeed(50); // Faster erasing speed
                if (currentText === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length); // Move to next text
                }
            }
        };

        const timeout = setTimeout(handleTyping, speed);

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [currentText, isDeleting, index, speed, texts]);

    return (
        <div className="bg-gray-900 text-white">
            {/* Call-to-action Section */}
            <div className="text-center py-20 px-6">
                <h1 className="text-6xl font-extrabold leading-tight">
                    Start Finding{" "}
                    <span className="text-blue-400 italic">
                        {currentText}
                    </span>
                    <span className="text-blue-400 animate-blink">|</span>
                </h1>
                <p className="text-gray-300 mt-6 text-lg">
                    Your personalized course search assistant, powered by AI.
                </p>
                <div className="mt-10">
                    <button
                        onClick={() => window.open("http://127.0.0.1:5001/", "_blank")}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-110"
                    >
                        Use it Now!
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-16">
                <div className="flex justify-center items-center flex-col text-center">
                    <h3 className="text-2xl font-bold mb-2">NeuralLearn</h3>
                    <p className="text-gray-300 text-lg">
                        An AI Model to Identify Courses Quickly and Efficiently
                    </p>
                    <div className="mt-6">
                        <span className="flex items-center justify-center space-x-2 text-green-400">
                            <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-gray-300">All systems online</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-900 py-6">
                <div className="container mx-auto text-center text-gray-500 text-sm">
                    © 2024 NeuralLearn. All rights reserved by Team ByteBlasters.
                </div>
            </div>
        </div>
    );
};

export default FooterSection;