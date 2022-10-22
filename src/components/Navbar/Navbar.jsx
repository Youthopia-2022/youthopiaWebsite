import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    let location = useLocation();
    const [menuVisible, setmenuVisible] = useState(false)
    const showMenu = () => {
        setmenuVisible(current => !current)
    }
    return (
        <nav className="navbar ">
            <div className=" lap-navbar mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button onClick={() => showMenu()} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          --> */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          --> */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img src={require('../../images/navbar-logo.png')} alt="" />
                        </div>
                        <div className=" inner-nav hidden sm:ml-6 sm:block">
                            <div className="nav-item flex space-x-4">
                                <Link to="/" className={` text-white px-9 py-2 rounded-md text-sm font-medium ${location.pathname === "/" ? "active" : ""}`} aria-current="page">Home</Link>

                                <Link to="/events" className={` text-white px-9 py-2 rounded-md text-sm font-medium ${location.pathname === "/events" ? "active" : ""}`} >Events</Link>

                                <Link to="/socialmedia" className={` text-white px-9 py-2 rounded-md text-sm font-medium ${location.pathname === "/socialmedia" ? "active" : ""}`} >Social Media</Link>

                                <Link to="/gallery" className={` text-white px-9 py-2 rounded-md text-sm font-medium ${location.pathname === "/gallery" ? "active" : ""}`} >Gallery</Link>

                                <Link to="/contact" className={` text-white px-9 py-2 rounded-md text-sm font-medium ${location.pathname === "/contact" ? "active" : ""}`} >Contact Us</Link>

                                <div className="social-icons absolute py-2  ">
                                    <a className="px-4" href="https://www.linkedin.com/school/dit-university/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-xl fa-linkedin-in"></i></a>
                                    <a className="px-4" href="https://www.instagram.com/dituniversity/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-xl fa-instagram"></i></a>
                                    <a className="px-4" href="https://www.facebook.com/DITUniversity.edu" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-xl fa-facebook"></i></a>
                                    <a className="px-4" href="https://www.youtube.com/channel/UCUibKytzSf4QnOCZfcZW3fw/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-xl fa-youtube"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}

            <div className=" sm:hidden" id="mobile-menu">
                <div className="mob-nav-item space-y-1 px-2 pt-2">
                    {
                        menuVisible ? (
                            <>
                                <Link to="/" className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/" ? "active" : ""}`} aria-current="page">Home</Link>

                                <Link to="/events" className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/events" ? "active" : ""}`} >Events</Link>

                                <Link to="/socialmedia" className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/socialmedia" ? "active" : ""}`} >Social Media</Link>

                                <Link to="/gallery" className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/gallery" ? "active" : ""}`} >Gallery</Link>

                                <Link to="/contact" className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/contact" ? "active" : ""}`} >Contact Us</Link>
                            </>
                        ) : ""
                    }
                </div>
            </div>
        </nav>

    )
}

export default Navbar
