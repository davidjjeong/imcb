"use client"

import Link from "next/link"
import React, {useState} from 'react'

const navLinks = [
    {title: "About", path: "#about"},
    {title: "Research", path: "#research"},
    {title: "Papers", path: "#papers"},
    {title: "Contact", path: "#contact"},
]

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return(
        <div className="z-50 fixed flex justify-center w-full text-[#2F3E3C] font-bold">
            <div className="border border-[#2F3E3C] mt-8 backdrop-blur-3xl rounded-3xl
                            hidden md:flex items-center justify-center p-2 mx-auto">
                <ul className="flex flex-row p-2 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className="transform hover:text-[#2F3E3C]/50
                                                                transition-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}