import { ProjectProps } from "../props/ProjectProps";
import ProjectInfo from "./ProjectInfo";
import Section from "./Section";


const projectList: ProjectProps[] = [
    {
        title: "Project 1",
        description: "This is a project",
        link: "https://github.com",
        technologies: ["React", "TypeScript"]
    },
    {
        title: "Project 2",
        description: "This is another project",
        link: "https://github.com",
        technologies: ["React", "TypeScript"]
    },
    {
        title: "Project 3",
        description: "This is yet another project",
        link: "https://github.com",
        technologies: ["React", "TypeScript"]
    },
    {
        title: "Project 4",
        description: "This is yet another project",
        link: "https://github.com",
        technologies: ["React", "TypeScript"]
    }
]

const Projects = () => {
    return (
        <Section title="Projects">
            <div className="flex-col">
                { projectList.map((project, index) => (
                    <ProjectInfo key={index} project={project} />
                )) }
            </div>
        </Section>
    )
}

export default Projects;