"use client"
import React from "react";

const ComparisonSection = () => {
    return (
        <div className="bg-gray-900 text-white py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    How does it compare to Other Solutions?
                </h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-700">
                    <thead>
                <tr className="bg-gray-800">
                    <th className="p-4 border border-gray-700 text-center">Features</th>
                    <th className="p-4 border border-gray-700 text-center">NeuralLink</th>
                    <th className="p-4 border border-gray-700 text-center">Other Solutions</th>
                </tr>
            </thead>

                        <tbody>
                            <tr className="bg-gray-800 hover:bg-gray-700">
                                <td className="p-4 border border-gray-700">Doesn't train on your data</td>
                                <td className="p-4 border border-gray-700 text-center">✅</td>
                                <td className="p-4 border border-gray-700 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-800 hover:bg-gray-700">
                                <td className="p-4 border border-gray-700">Understands anything you're looking at</td>
                                <td className="p-4 border border-gray-700 text-center">✅</td>
                                <td className="p-4 border border-gray-700 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-800 hover:bg-gray-700">
                                <td className="p-4 border border-gray-700">Understands anything you've said or heard</td>
                                <td className="p-4 border border-gray-700 text-center">✅</td>
                                <td className="p-4 border border-gray-700 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-800 hover:bg-gray-700">
                                <td className="p-4 border border-gray-700">Make custom actions and apps</td>
                                <td className="p-4 border border-gray-700 text-center">✅</td>
                                <td className="p-4 border border-gray-700 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-800 hover:bg-gray-700">
                                <td className="p-4 border border-gray-700">Tabs for multiple chats</td>
                                <td className="p-4 border border-gray-700 text-center">✅</td>
                                <td className="p-4 border border-gray-700 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-800 hover:bg-gray-700">
                                <td className="p-4 border border-gray-700">Integrated audio transcript recorder</td>
                                <td className="p-4 border border-gray-700 text-center">✅</td>
                                <td className="p-4 border border-gray-700 text-center">❌</td>
                            </tr>
                            <tr className="bg-gray-800 hover:bg-gray-700">
                                <td className="p-4 border border-gray-700">Always one click away</td>
                                <td className="p-4 border border-gray-700 text-center">✅</td>
                                <td className="p-4 border border-gray-700 text-center">❌</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComparisonSection;
