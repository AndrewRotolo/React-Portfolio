import React from 'react';

import pfp from '../assets/Placeholder pfp.png'

export default function AboutMe() {
    return (
        <>
        <img src={pfp} alt='Placeholder pfp' id='pfp'></img>

        <div className='container'>
            <h2>
            Hello there! I'm Andrew Rotolo, a passionate and dedicated web developer. I recently completed a rigorous bootcamp program from Rutgers University, equipping me with the skills and knowledge to build captivating and user-friendly websites. I have a strong enthusiasm for creating innovative digital experiences and solving complex problems through coding.
            <p>
            During my time at the bootcamp, I delved deep into front-end and back-end development, gaining proficiency in HTML, CSS, JavaScript, and various frameworks such as React and Node.js. I thrive in dynamic and collaborative environments, where I can contribute my creativity and logical thinking to deliver exceptional results.
            </p>
            <p>
            My journey into web development began with a fascination for technology and an insatiable curiosity to understand how things work behind the scenes. This drive led me to enroll in the bootcamp, where I immersed myself in hands-on projects and real-world challenges. These experiences honed my ability to write clean and efficient code, implement responsive designs, and optimize websites for performance and accessibility.
            </p>
            </h2>
        </div>
        </>
    )
}