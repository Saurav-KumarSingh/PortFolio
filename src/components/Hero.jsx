import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import { Link } from 'react-router-dom'
const Hero = () => {

  return (
    <>
      <section class="text-gray-600 body-font md:my-20" name='Home'>
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center justify-center">
          <div class="lg:max-w-60 lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded-full" alt="hero" src="./saurav.jpg" />
          </div>
          <div
            class="lg:flex-grow mt-5 md:mt-0 md:px-14  md:w-1.5/2 lg:pr-24 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              class="text-2xl font-extrabold leading-9 tracking-tight  text-black dark:text-white sm:text-3xl sm:leading-10 md:text-4xl lg:text-5xl md:leading-normal">
              Saurav Kumar Singh
            </h1>
            <p className='mb-4'><div> <span className='text-[1.2em] font-semibold dark:text-white '>I am a </span>
              <TypeAnimation className='text-blue-700 font-semibold'
                sequence={['Frontend Developer', 1000, 'MERN Developer', 1000]}
                style={{ fontSize: '1.2em' }}
                repeat={Infinity}
              />
            </div></p>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
              With a passion for dveloping modern wep apps for commercial businesses
            </p>
            <a className='text-white dark:text-black dark:bg-white px-2 py-1 rounded bg-black font-semibold' href="./Resume.pdf" download="Saurav's Resume">
              Resume
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero