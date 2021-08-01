import React, {useState} from 'react';
import { FaRocket, FaGithub } from 'react-icons/fa';

const Project = ({ name }) => {
    // const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            id: 1,
            altText: "app for animal friendships",
            title: "Pawpals",
            deployed: "https://noemiegrau.github.io/project-1-group-4/",
            github: "https://github.com/Noemiegrau/pawpals"
        },
        {
            id: 2,
            altText: "app for finding hiking trails in new mexico",
            title: "Trail Mix",
            deployed: "https://radiant-wildwood-38672.herokuapp.com/",
            github: "https://github.com/RayTakemura/Hiking-Trail-Group-Project"
        },
        {
            id: 3,
            altText: "app for talking about all things Chelcie",
            title: "Chelcie Fans",
            deployed: "https://secret-hollows-41476.herokuapp.com/",
            github: "https://github.com/simmonsW/chelcie-fans"
        }
    ]);

    const currentProjects = projects.filter((project) => project.name === name);

    return (
        <section className="container row">
            {currentProjects.map(({
                id,
                altText,
                title,
                deployed,
                github
            }) => (
                <div className="col-4 flex-row">
                    <img src = {require(`../../assets/images/${id}.png`).default} alt={altText}/>
                    <div className="flex-row">
                        <h4>
                            {title}
                        </h4>
                        <a href={deployed}>
                        <FaRocket></FaRocket>
                        </a>
                        
                        <a href={github}>
                            <FaGithub></FaGithub>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    )
};

export default Project;