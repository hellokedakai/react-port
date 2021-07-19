import React, {useState} from 'react';

const ProjectList = ({ title }) => {
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            id: 1,
            title: "Pawpals",
            deployed: "https://noemiegrau.github.io/project-1-group-4/",
            github: "https://github.com/Noemiegrau/pawpals"
        },
        {
            id: 2,
            title: "Trail Mix",
            deployed: "https://radiant-wildwood-38672.herokuapp.com/",
            github: "https://github.com/RayTakemura/Hiking-Trail-Group-Project"
        }
    ]);

    const currentProjects = projects.filter((project) => project.title === title);

    return (
        <section>
            {currentProjects.map(({
                id,
                title,
                deployed:
                github
            }) => (
                <div>
                    <img src = {require(`../../assets/images/${id}.png`).default}/>
                    <div>
                        <h2>
                            {title}
                        </h2>
                        <a href={deployed}></a>
                        <a href={github}></a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Project;