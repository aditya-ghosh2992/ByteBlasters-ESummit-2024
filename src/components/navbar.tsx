"use client"
import React from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { User } from "next-auth"
import { Button } from "./ui/button"
import { useState } from "react"
const Navbar = () => {
    // the purpose ofd this session is to just check the user's session presence, as to fetch data from the session we need to use the user
    const { data: session } = useSession()
    const user: User = session?.user // fetching user from session
    return (
        <nav className="bg-gray-900 py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4">
            <a href="#" className="flex items-center">
                    <img src="/assets/BB_Logo.png" alt="Logo" className="h-12 mr-2" />
                    <span className="text-2xl font-bold text-white"></span>
                </a>
                <ul className="flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static bg-gray-900 w-full md:w-auto transition-all duration-500 ease-in-out">
                    <li><a href="#" className="block text-gray-300 hover:text-white transition duration-300 py-2 transform hover:scale-105">Home</a></li>
                    <li><a href="#" className="block text-gray-300 hover:text-white transition duration-300 py-2 transform hover:scale-105">How To Use?</a></li>
                    <li><a href="#" className="block text-gray-300 hover:text-white transition duration-300 py-2 transform hover:scale-105">About Our Team</a></li>
                </ul>
                {session ? (
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-300">Welcome, {user?.username || user?.email}</span>
                        <button
                            onClick={() => signOut()}
                            className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded">
                             <svg className={`w-6 h-6 transform transition-transform duration-300 `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                        </button>
                    </div>
                ) : (
                    
                    <div className="flex items-center space-x-4">
                        
                        <Link href="/sign-in">
                            <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                                Login
                            </Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button className="text-blue-400 hover:text-blue-300 font-semibold">
                                Sign-up
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar;