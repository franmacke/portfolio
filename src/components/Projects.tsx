import { ProjectProps } from "../props/ProjectProps";
import ProjectInfo from "./ProjectInfo";
import Section from "./Section";


const projectList: ProjectProps[] = [
    {
        title: "Discord Bot",
        description: "Developed a Discord bot that can be used to manage a server, play music, and more.",
        link: "#",
        technologies: ["Python", "MySQL", "Discord API"],
        image: "discord_bot.png"
    },
    {
        title: "Pong Game",
        description: "Developed a Pong game using Python and Pygame, with local multiplayer support.",
        link: "https://github.com/franmacke/pong",
        technologies: ["Python", "Pygame", "OOP", "Game Development"],
        image: "discord_bot.png"
    },
    {
        title: "Football Team Balancer [WIP]",
        description: "Developed a web application that can be used to balance football teams.",
        link: "https://colab.research.google.com/drive/1zUPE1jlksdKGAVveFxUxwhS-JPlAmfNM?usp=sharing",
        technologies: ["Python", "Pandas", "Colab", "Data Analysis"],
        image: "discord_bot.png"
    },
    {
        title: "Project 4",
        description: "This is yet another project",
        link: "https://github.com",
        technologies: ["React", "TypeScript"],
        image: "discord_bot.png"
    }
]

const Projects = () => {
    return (
        <Section title="Projects">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                { projectList.map((project, index) => (
                    <ProjectInfo key={index} project={project} />
                )) }
            </div>
        </Section>
    )
}

export default Projects;