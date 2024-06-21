import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className=" z-10  sticky top-0 left-0">

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    {/* Logo */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to='/' className="flex items-center link-no-border">

                            <img className='h-[55px]' src='./logo.png' alt="" />
                        </Link>
                    </div>
                    {/* Hamburger Menu (for mobile) */}
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-blue-700  hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-400 focus:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex flex-grow justify-end items-center space-x-8">
                        <Link
                            to='Home'
                            smooth={true}
                            duration={500}
                            offset={-170}
                            activeClass='active'

                            className={
                                `cursor-pointer text-blue-700 link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold  duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                            }
                        >
                            Home
                        </Link>
                        <Link
                            to='Projects'
                            smooth={true}
                            duration={500}
                            offset={-50}
                            activeClass='active'
                            className={
                                `cursor-pointer text-blue-700 link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold  duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                            }
                        >
                            Projects
                        </Link>
                        <Link
                            to='Skills'
                            smooth={true}
                            duration={500}
                            offset={-50}
                            activeClass='active'
                            className={
                                `cursor-pointer text-blue-700 link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold  duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                            }
                        >
                            Skills
                        </Link>
                        <Link
                            to='Contact'
                            smooth={true}
                            duration={500}
                            offset={50}
                            activeClass='active'
                            className={
                                `cursor-pointer text-blue-700 link-no-border md:mx-4 block py-2 pr-4 pl-3 font-semibold  duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                            }
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to='Home'
                            smooth={true}
                            duration={500}
                            offset={-100}
                            activeClass='active'
                            className={
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 text-blue-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0
                                border-b border-black dark:border-white w-full`
                            }
                        >
                            Home
                        </Link>
                        <Link
                            to='Projects'
                            smooth={true}
                            duration={500}
                            offset={-50}
                            activeClass='active'
                            className={
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 text-blue-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 border-b border-black dark:border-white w-full`
                            }
                        >
                            Projects
                        </Link>
                        <Link
                            to='Skills'
                            smooth={true}
                            duration={500}
                            offset={-30}
                            activeClass='active'
                            className={
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 text-blue-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 border-b border-black dark:border-white w-full`
                            }
                        >
                            Skills
                        </Link>
                        <Link
                            to='Contact'
                            smooth={true}
                            duration={500}
                            offset={-50}
                            activeClass='active'
                            className={
                                `link-no-border block py-2 pr-4 pl-3 font-semibold  duration-200 text-blue-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 border-b border-black dark:border-white w-full`
                            }
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
