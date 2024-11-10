import { ProjectProps } from "src/props/ProjectProps";


const ProjectInfo = ({ project } : { project: ProjectProps } ) => {
    
    return (
        <div className="text-left">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>

        </div>
    )
}   


export default ProjectInfo;