import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 shadow-xl">
                <div className="container mx-auto px-6 flex flex-col md:flex-row relative pt-20 pb-6">
                    <div className="w-full md:w-1/5 flex flex-col relative z-20 py-4 md:py-0">
                        <div className="text-gray-200 font-light text-xs">
                            <Image className="opacity-50 hover:opacity-100 h-5" width={72} height={24} src="/synx-logo.svg" alt="Synx" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/5 flex flex-col relative z-20 pt-6 md:pt-0">
                        <div className="text-white font-light text-xs ">
                            <p className="font-black text-base text-gray-200 mb-3">Main Industries</p>
                            <ul>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="#">
                                            <a>Banking &amp; Finance</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="#">
                                            <a>CPG&apos;s, Retail &amp; Consumer</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="#">
                                            <a>Aerospace</a>
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/5 flex flex-col relative z-20 pt-6 md:pt-0">
                        <div className="text-white font-light text-xs ">
                            <p className="font-black text-base text-gray-200 mb-3">Services</p>
                            <ul>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="#">
                                            <a>Data &amp; Business Analytics</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="#">
                                            <a>Platforms &amp; Insfrastructure</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="#">
                                            <a>Staff Augmentation</a>
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/5 flex flex-col relative z-20 pt-6 md:pt-0">
                        <div className="text-white font-light text-xs ">
                            <p className="font-black text-base text-gray-200 mb-3">Products</p>
                            <ul>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="/synx/galois">
                                            <a>Galois</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <a href="https://github.com/synx-ai" target="_blank" rel="noreferrer">
                                            <a>Open Source</a>
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/5 flex flex-col relative z-20 pt-6 md:pt-0">
                        <div className="text-white font-light text-xs ">
                            <p className="font-black text-base text-gray-200 mb-3">Company</p>
                            <ul>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="/company/about">
                                            <a>About</a>
                                        </Link>
                                    </p>
                                </li>
                                <li className="pb-1">
                                    <p className="text-sm text-gray-100 hover:text-white">
                                        <Link href="/company/newsroom">
                                            <a>Newsroom</a>
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="container mx-auto px-6 flex relative py-5">
                    <div className="w-2/6 flex flex-col relative z-20">
                        <p className="text-gray-400 text-xs">Synx {new Date().getFullYear()}, All rights reserved.</p>
                    </div>
                    <div className="w-1/6 flex flex-col relative z-20">
                        <p className="text-gray-300 text-xs">
                            
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col relative z-20">
                        <p className="text-gray-300 text-xs">
                            
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col relative z-20">
                        <p className="text-gray-300 text-xs">
                            
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col relative z-20">
                        <p className="text-gray-400 text-xs">
                            <Link href="/sitemap.xml">
                                <a className="hover:text-gray-300">
                                    Sitemap
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
            <div className="synx-hue-line"></div>
        </>
    )
}