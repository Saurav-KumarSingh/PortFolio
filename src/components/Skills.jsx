import React from 'react'
const Skills = () => {
  const skill = ['./html-5.png', './css.png', './js.png', './bootstrap.png', './tailwind.png', 'react.png', './nodejs.png', './Expressjs.png', './mongodb.png', './C++.png']
  return (
    <div className='py-12' name='Skills'>
      <div className='font-mono text-black dark:text-white text-center font-semibold md:text-5xl text-3xl py-8'>Skils</div>

      <div className='flex flex-wrap md:w-[60vw] justify-around m-auto'>
        {
          skill.map((row) => {
            return <>
              <div key={row} className='flex m-5 mx-8'>
                <img width='80' src={row} alt="" />
              </div>
            </>
          })
        }
      </div>

    </div>
  )
}

export default Skills