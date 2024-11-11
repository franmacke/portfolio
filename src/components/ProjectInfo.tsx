import { ProjectProps } from "src/props/ProjectProps";
import Card from "./Card";
import { Badge, Button } from "flowbite-react";


const ProjectInfo = ({ project } : { project: ProjectProps } ) => {
    
    return (
        <Card>
            <div className="flex justify-center items-center w-full relative">
                <img 
                    src={require(`../assets/images/projects/${project.image}`)} 
                    alt={project.title} 
                    className="rounded-md mb-5" 
                />
            </div>
            <div className="flex-col justify-start items-start text-left space-y-5">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p>{project.description}</p>
                <div className="flex space-x-2">
                    {project.technologies.map((tech, index) => (
                        <Badge key={index}>{tech}</Badge>
                    ))} 
                </div>

                <a href={project.link} target="_blank" rel="noreferrer">
                    <Button color="gray" className="mt-5">View Project</Button>
                </a>
            </div>
        </Card>
    )
}   


export default ProjectInfo;