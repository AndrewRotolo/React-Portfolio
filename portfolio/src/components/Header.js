import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function Header() {

    return(
        <div className='container'>
            <h1 id='title'>Andrew Rotolo</h1>
        
        <nav>
            <Link to='/' id='link1' className='links'>About Me</Link>
            <Link to='/portfolio' id='link2' className='links'>Portfolio</Link>
            <Link to='/contact' id='link3' className='links'>Contact</Link>
            <Link to='/resume' id='link4' className='links'>Resume</Link>
        </nav>
        </div>
    )
}