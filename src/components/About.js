import React from 'react';

export default function About() {
    return(
        
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <img id="profile-pic" className="pfp" src="../../assets/images/pfp.JPG" alt="The coder" />
                        <br />
                        <h3 className="about-me-text">Hello! My name is Alberto Londono</h3>
                        <p className="about-me-text">I am a Full Stack Web Developer. I graduated from the Northwestern Coding Bootcamp in September 2022 and I have been working on front end web development and full stack projects. I am continously developing my skills through projects as a Freelancer.</p>
                      
                        <p className="about-me-text">During my years as a Chef, I developed a keen sense of time management, ability to work with a sense of urgency, and leadership skills.</p>

                        <p className="about-me-text">
                            When I'm not perfecting the art of
                            coding or designing something, I am playing guitar, experimenting with new dishes for loved ones, watching anime, or
                            playing on my pc or Nintendo Switch.</p>
                        
                    </div>
                </div>
            </div>

        </div>
    
    )
}