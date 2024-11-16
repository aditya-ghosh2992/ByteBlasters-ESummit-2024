"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Welcome to MyApp
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Simplifying your workflow with modern solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Feature One</h3>
            <p className="text-gray-600">
              Brief description of what this feature offers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Feature Two</h3>
            <p className="text-gray-600">
              Highlight why this feature is awesome.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Feature Three</h3>
            <p className="text-gray-600">
              Explain the benefits of using this feature.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="#privacy"
            className="text-indigo-400 hover:underline transition"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#terms"
            className="text-indigo-400 hover:underline transition"
          >
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;