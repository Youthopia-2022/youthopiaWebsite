import { React, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [menuVisible, setmenuVisible] = useState(false);
	const showMenu = () => {
		setmenuVisible((current) => !current);
	};

	const navi = (loc) => {
		setmenuVisible(false);
		navigate(loc);
	};
	return (
		<nav className="navbar sticky">
			<div className="social-icons absolute py-4 right-[1rem] ">
				<a
					className="px-4"
					href="https://www.linkedin.com/school/dit-university/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-xl fa-linkedin-in"></i>
				</a>
				<a
					className="px-4"
					href="https://www.instagram.com/dituniversity/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-xl fa-instagram"></i>
				</a>
				<a
					className="px-4"
					href="https://www.facebook.com/DITUniversity.edu"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-xl fa-facebook"></i>
				</a>
				<a
					className="px-4"
					href="https://www.youtube.com/channel/UCUibKytzSf4QnOCZfcZW3fw/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-xl fa-youtube"></i>
				</a>
			</div>
			<div className=" lap-navbar mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="inner-nav relative flex h-16 items-center justify-between ">
					<div className="flex flex-shrink-0 items-center">
						<Link to="/">
							<img
								className="navicon"
								src={require("../../images/navbar-logo.png")}
								alt=""
							/>
						</Link>
					</div>
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							onClick={() => showMenu()}
							type="button"
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{/* <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          --> */}
							<svg
								className="block h-6 w-6 "
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							{/* <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          --> */}
							<svg
								className="hidden h-6 w-6 "
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch  ">
						<div className=" inner-navbar hidden sm:block">
							<div className="nav-item flex space-x-4">
								<Link
									to="/"
									className={` text-white px-9 py-2 rounded-md text-sm font-medium ${
										pathname === "/" ? "active" : ""
									}`}
									aria-current="page"
								>
									Home
								</Link>

								<Link
									to="/events"
									className={` text-white px-9 py-2 rounded-md text-sm font-medium ${
										pathname.includes("/events") ? "active" : ""
									}`}
								>
									Events
								</Link>

								<Link
									to="/gallery"
									className={` text-white px-9 py-2 rounded-md text-sm font-medium ${
										pathname === "/gallery" ? "active" : ""
									}`}
								>
									Gallery
								</Link>

								<Link
									to="/aboutus"
									className={` text-white px-9 py-2 rounded-md text-sm font-medium ${
										pathname === "/aboutus" ? "active" : ""
									}`}
								>
									About Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Mobile menu, show/hide based on menu state. --> */}

			<div className=" sm:hidden" id="mobile-menu">
				<div className="mob-nav-item space-y-1 px-2 pt-2">
					{menuVisible ? (
						<>
							<div
								onClick={() => navi("/")}
								className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${
									pathname === "/" ? "active" : ""
								}`}
								aria-current="page"
							>
								Home
							</div>

							<div
								onClick={() => navi("/events")}
								className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${
									pathname.includes("/events") ? "active" : ""
								}`}
							>
								Events
							</div>

							<div
								onClick={() => navi("/gallery")}
								className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${
									pathname === "/gallery" ? "active" : ""
								}`}
							>
								Gallery
							</div>

							<div
								onClick={() => navi("/aboutus")}
								className={` text-white block px-3 py-2 rounded-md text-sm font-medium ${
									pathname === "/aboutus" ? "active" : ""
								}`}
							>
								About Us
							</div>
						</>
					) : (
						""
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
