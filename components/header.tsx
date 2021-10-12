import Link from 'next/link'
import Image from 'next/image'
import React from "react";

export default function Header() {
    const { useState } = React;
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-9 my-1 text-white bg-white rounded-full transition ease transform duration-300`;

    const activeSide = "bg-gray-700 h-screen w-full transform transition-all fixed top-32 duration-300 text-white flex justify-center p-2 opacity-100"
    const hiddenSide = "bg-gray-700 h-screen w-full transform transition-all fixed top-32 duration-300 text-white flex justify-center p-2 opacity-0 invisible"

    return (
        <header className="bg-gray-700 shadow-sm fixed top-0 h-24 sm:h-32 flex items-center z-30 w-full">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="uppercase text-white font-black text-3xl">
                    <Link href="/">
                        <a>
                            <Image className="topnav-logo" src="/synx-logo.svg" width={162} height={94} alt="Synx" />
                        </a>
                    </Link>
                </div>
                <div className="flex items-center">
                    <nav className="font-semibold text-gray-100 text-lg lg:flex items-center hidden">
                        <div className="relative group">
                            <button className="flex flex-row items-center w-full py-2 px-6 text-lg font-bold hover:text-white transition-colors">
                                <span>Products</span>
                            </button>
                            <div className="absolute z-10 h-0 block bg-transparent group-hover:h-auto transition-all opacity-0 group-hover:opacity-100 duration-300">
                                <div className="px-2 pt-2 pb-4 bg-white shadow-lg rounded-sm w-64">
                                    <div className="p-3 hover:bg-gray-50 rounded-md transition-colors">
                                        <Link href="/synx/galois">
                                            <a className="">
                                            <p className="text-gray-900">Galois</p>
                                            <p className="text-gray-400 text-sm font-normal">
                                                Enterprise grade AI Platform &amp; Infrastructure.
                                            </p>
                                        </a>
                                        </Link>
                                    </div>

                                    <div className="p-3 hover:bg-gray-50 rounded-md transition-colors">
                                        <Link href="/synx/deeplab">
                                            <a className="">
                                            <p className="text-gray-900">DeepLab</p>
                                            <p className="text-gray-400 text-sm font-normal">
                                                Automated Deep Learning for High-Dimensional Data.
                                            </p>
                                        </a>
                                        </Link>
                                    </div>

                                    <div className="p-3 hover:bg-gray-50 rounded-md transition-colors">
                                        <Link href="/synx/galois">
                                            <a className="">
                                            <p className="text-gray-900">Staffing</p>
                                            <p className="text-gray-400 text-sm font-normal">
                                                Consultancy &amp; Managed services for companies.
                                            </p>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <Link href="/company/about">
                            <a className="py-2 px-6 flex hover:text-white transition-colors">
                                About
                            </a>
                        </Link>
                        <Link href="/company/contact">
                            <a href="#" className="py-2 px-6 flex hover:text-white transition-colors">
                                Contact
                            </a>
                        </Link>
                    </nav>
                    
                    <button className="lg:hidden flex flex-col h-10 w-12 border-2 border-transparent opacity-50 hover:opacity-100 rounded justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
                        <div
                            className={`${genericHamburgerLine} ${isOpen
                                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${isOpen
                                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                    </button>
                </div>
            </div>
            <div className={isOpen ? activeSide : hiddenSide}>
                <div className="container mx-auto px-6 flex flex-col md:flex-row relative pt-16 pb-6">
                    <div className="w-full flex flex-col relative z-20 pt-6 md:pt-0">
                        <div className="text-white font-black text-3xl">
                            <ul>
                                <li className="pb-8">
                                    <p className="text-gray-100 hover:text-white">
                                        <Link href="/">
                                            <a href="#">Banking &amp; Finance</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-8">
                                    <p className="text-gray-100 hover:text-white">
                                        <Link href="/">
                                            <a href="#">CPG&apos;s, Retail &amp; Consumer</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-8">
                                    <p className="text-gray-100 hover:text-white">
                                        <Link href="/">
                                            <a href="#">Aerospace</a>
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}