"use client"
import React from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { User } from "next-auth"
import { Button } from "./ui/button"
const Navbar = () => {
    // the purpose ofd this session is to just check the user's session presence, as to fetch data from the session we need to use the user
    const { data: session } = useSession()
    const user: User = session?.user // fetching user from session
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="/" className="text-2xl font-bold text-white">MyApp</a>

                {session ? (
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-300">Welcome, {user?.username || user?.email}</span>
                        <button
                            onClick={() => signOut()}
                            className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded">
                            Logout
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