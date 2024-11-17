import React from "react";

const ComparisonSection = () => {
    return (
        <div
            id="comparison-section"
            className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20"
        >
            <div
                className="container mx-auto px-6"
                data-aos="fade-up" // AOS animation for scrolling effect
            >
                {/* Title */}
                <h2
                    className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500"
                >
                    How Does NeuralLearn Compare?
                </h2>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-700 shadow-xl rounded-lg">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white">
                                <th className="p-6 border border-gray-700 text-center text-xl font-bold">
                                    Features
                                </th>
                                <th className="p-6 border border-gray-700 text-center text-xl font-bold">
                                    NeuralLearn
                                </th>
                                <th className="p-6 border border-gray-700 text-center text-xl font-bold">
                                    Other Solutions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    feature: "Recommends the best courses across platforms",
                                    neuralLearn: "✅",
                                    other: "❌",
                                },
                                {
                                    feature:
                                        "Personalized recommendations based on user input",
                                    neuralLearn: "✅",
                                    other: "❌",
                                },
                                {
                                    feature: "Real-time updates and course availability",
                                    neuralLearn: "✅",
                                    other: "❌",
                                },
                                {
                                    feature:
                                        "Searches across multiple learning platforms",
                                    neuralLearn: "✅",
                                    other: "❌",
                                },
                                {
                                    feature:
                                        "Easy-to-use interface with minimal input required",
                                    neuralLearn: "✅",
                                    other: "❌",
                                },
                                {
                                    feature:
                                        "Provides course details like price, reviews, and duration",
                                    neuralLearn: "✅",
                                    other: "❌",
                                },
                                {
                                    feature: "No user data storage or tracking",
                                    neuralLearn: "✅",
                                    other: "❌",
                                },
                            ].map((row, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0
                                            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
                                            : "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"
                                    } hover:scale-[1.02] hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-transform duration-500`}
                                >
                                    <td className="p-6 border border-gray-700 text-lg">
                                        {row.feature}
                                    </td>
                                    <td className="p-6 border border-gray-700 text-center text-2xl">
                                        {row.neuralLearn}
                                    </td>
                                    <td className="p-6 border border-gray-700 text-center text-2xl">
                                        {row.other}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComparisonSection;