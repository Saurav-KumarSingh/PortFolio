import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="mt-8 md:w-[50vw] border-t border-gray-800 p-2 pt-8 text-center m-auto">

                <span className="inline-flex">
                    <a href='https://www.linkedin.com/in/sauravkumarsingh1688' className="dark:text-white text-black text-xl">
                        <IoLogoLinkedin />
                    </a>
                    <a href='https://github.com/Saurav-KumarSingh' className="ml-4 dark:text-white text-black text-xl">
                        <FaGithub />
                    </a>
                    <a href='https://www.instagram.com/saurav_singh_2999?igsh=cmRsY2NiczYyOWJ3' className="ml-4 dark:text-white text-black text-xl">
                        <FaInstagram />
                    </a>
                </span>
                <p className='dark:text-white text-black'> &copy; 2024 Saurav Kumar Singh <br /> All rights reserved </p>
            </div>
        </>
    )
}

export default Footer