import React from 'react';
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand"><h1>Londono</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <span className="span-style">
                    <i className="fas fa-bars"></i>
                </span>
            </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Me </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume">Resume</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Me</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}