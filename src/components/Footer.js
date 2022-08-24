import React from 'react'

export default function Footer () {
    return (
        <div className="footer">
        <p className="contact-icon-span">
        <span className="contact-icons">
            <a href="mailto: londono.alberto110@gmail.com"><i className="fas fa-envelope-square"></i></a>
        </span>
        <span className="contact-icons">
            <a href="https://www.linkedin.com/in/alberto-londono-261432235/" target="_blank" rel="noopener noreferrer"><i
                className="fab fa-linkedin"></i></a>
        </span>
        <span className="contact-icons">
            <a href="https://github.com/Guapguap" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square"></i></a>
        </span>
        <span className="contact-icons">
            <a href="https://www.instagram.com/guapguap_berts/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram-square"></i></a>
        </span>
    </p>
    </div>
    )
}