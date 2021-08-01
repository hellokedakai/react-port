import React, {useState} from 'react';

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
        }
    ]);

    const currentProjects = projects.filter((project) => project.name === name);

    return (
        <section>
            {currentProjects.map(({
                id,
                altText,
                title,
                deployed,
                github
            }) => (
                <div className="col-2">
                    <img src = {require(`../../assets/images/${id}.png`).default} alt={altText} />
                    <div>
                        <h2>
                            {title}
                        </h2>
                        <a href={deployed} ></a>
                        <a href={github}></a>
                    </div>
                </div>
            ))}
        </section>
    )
};

export default Project;