import React from 'react'

 function Card(props) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md my-5">
      <img
        src={props.data.img}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.data.name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {props.data.Description}
        </p>
        <a href={props.data.link} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View &rarr;
        </a>
      </div>
    </div>
  )
}

export default Card