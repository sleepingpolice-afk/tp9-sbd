"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="bg-slate-800 text-white p-4 w-full ">
        <div className="flex flex-wrap justify-between items-center">
            <div className="text-xl font-bold">Wesley Frederick Oh</div>
            
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
            </button>
            <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
                <li>
                <p href="#" className="font-semibold">
                    Home
                </p>
                </li>
                <li>
                <p href="#" className="font-semibold">
                    Profile
                </p>
                </li>
                <li>
                <p href="#" className="font-semibold">
                    Contact
                </p>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}