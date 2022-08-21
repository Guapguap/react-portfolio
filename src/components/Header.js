import React from 'react';

export default function Header () {
    return (
        <nav className='navbar'>
            <h1>Londono</h1>
            <ul> 
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
            </ul>

        </nav>
    );
}