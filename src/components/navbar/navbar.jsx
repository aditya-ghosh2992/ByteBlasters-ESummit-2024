import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="flex items-center">
                    <img src="/assets/BB_Logo.png" alt="Logo" className="h-12 mr-2" />
                    <span className="text-2xl font-bold text-white"></span>
                </a>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static bg-gray-900 w-full md:w-auto transition-all duration-500 ease-in-out ${isOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'}`}>
                    <li><a href="#" className="block text-gray-300 hover:text-white transition duration-300 py-2 transform hover:scale-105">Home</a></li>
                    <li><a href="#" className="block text-gray-300 hover:text-white transition duration-300 py-2 transform hover:scale-105">About</a></li>
                    <li><a href="#" className="block text-gray-300 hover:text-white transition duration-300 py-2 transform hover:scale-105">Contact</a></li>
                </ul>
                <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
                    Sign In
                </button>
            </div>
        </nav>
    );
}
export default Navbar;