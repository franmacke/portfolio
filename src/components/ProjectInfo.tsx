import { ProjectProps } from "src/props/ProjectProps";
import Card from "./Card";
import { Button } from "flowbite-react";


const ProjectInfo = ({ project } : { project: ProjectProps } ) => {
    
    return (
        <Card>
            <div className="text-left">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p>{project.description}</p>
                <ul>
                    {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                
                <a href={project.link} target="_blank" rel="noreferrer">
                    <Button color="gray">View Project</Button>
                </a>
            </div>
        </Card>
    )
}   


export default ProjectInfo;