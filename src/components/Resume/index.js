import React from 'react';

function Resume(){
    return(
        <section>
            <h1>
                Resume
            </h1>
            <p>Download my <a href="resume.pdf" download>resume!</a></p>
            <h2>
                Front-end Proficiencies
            </h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>
                Back-end Proficiencies
            </h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>NoSQL</li>
            </ul>
        </section>
    )
}

export default Resume;
