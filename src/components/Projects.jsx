import Card from './Card.jsx'
import React from 'react'

const Projects = () => {
    let prData = [
        {name: 'Blogged',
            Description: 'A dynamic blogging website offering diverse topics, interactive user engagement, seamless navigation, and a platform for sharing insightful content.',
            img: 'https://img.freepik.com/free-vector/editing-body-text-concept-illustration_114360-5791.jpg?t=st=1720882872~exp=1720886472~hmac=dcd99091ad292a1478d2c1aba987e98ada8efb5d8f131abcaa8b9d744d19ee7e&w=740',
            link:'https://github.com/Saurav-KumarSingh/Blogged'},
        {
            name: 'Grievance Cell',
            Description: 'The College Grievance Cell addresses student complaints and issues, ensuring a fair and transparent resolution process to maintain campus harmony.',
            img: 'https://img.freepik.com/free-vector/boss-helping-empoyee-concept-illustration_114360-16133.jpg?t=st=1718804477~exp=1718808077~hmac=aa8c42a9380419dfc4ecf282f8e60637355c01b1ac21047358c4ea1e5b318a93&w=740',
            link:'https://github.com/Saurav-KumarSingh/Grievance_cell'
        },
        {
            name: 'S60 Library',
            Description: 'The S60 College Library offers extensive academic resources, study spaces, and research assistance, fostering a conducive environment for student learning and growth.',
            img: 'https://img.freepik.com/free-vector/reading-book-illustration_114360-8532.jpg?t=st=1718811006~exp=1718814606~hmac=e07ca843b02bb365491ee32e9e7a6c4dfa926ff1674dbb9b2a8521f909947bd3&w=740',
            link:'https://github.com/Saurav-KumarSingh/S60-library'
        },
        {
            name: 'Wino',
            Description: 'Discover our curated selection of fine wines. Experience the art of winemaking and elevate your palate with every sip.',
            img: 'https://www.mountviewwines.com.au/images/wines/wine-slider-bgr.png',
            link:'https://github.com/Saurav-KumarSingh/Wino'
        }
    ]
    return (
        <div name='Projects'>
            <div className='font-mono text-black dark:text-white text-center font-semibold md:text-5xl text-3xl py-4'>Projects</div>
            <div className='flex flex-wrap justify-around'>
                {
                    prData.map((row) => {
                        return <Card key={row.name} data={row} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects