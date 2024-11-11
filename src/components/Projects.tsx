import { useTranslation } from "react-i18next";
import { ProjectProps } from "../props/ProjectProps";
import ProjectInfo from "./ProjectInfo";
import Section from "./Section";


const Projects = () => {

    const { t } = useTranslation();

    const projectList: ProjectProps[] = [
        {
            title: t("projects.items.discordBot.name"),
            description: t("projects.items.discordBot.description"),
            link: "#",
            technologies: ["Python", "MySQL", "Discord API"],
            image: "discord_bot.png"
        },
        {
            title: t("projects.items.pongGame.name"),
            description: t("projects.items.pongGame.description"),
            link: "https://github.com/franmacke/pong",
            technologies: ["Python", "Pygame", "OOP", "Game Development"],
            image: "pong.png"
        },
        {
            title: t("projects.items.footballTeamBalancer.name"),
            description: t("projects.items.footballTeamBalancer.description"),
            link: "https://colab.research.google.com/drive/1zUPE1jlksdKGAVveFxUxwhS-JPlAmfNM?usp=sharing",
            technologies: ["Python", "Pandas", "Colab", "Data Analysis"],
            image: "discord_bot.png"
        },
        {
            title: t("projects.items.portfolio.name"),
            description: t("projects.items.portfolio.description"),
            link: "https://github.com/franmacke/portfolio/tree/dev",
            technologies: ["React", "Tailwind CSS", "TypeScript"],
            image: ""
        },
        {
            title: t("projects.items.drinkMaker.name"),
            description: t("projects.items.drinkMaker.description"),
            link: "https://relaxed-custard-a3eca2.netlify.app/",
            technologies: ["HTML", "CSS", "JavaScript", "APIs"],
            image: "drink_maker.png"
        }
    ]
    
    return (
        <Section title={t("projects.title")}>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                { projectList.map((project, index) => (
                    <ProjectInfo key={index} project={project} />
                )) }
            </div>
        </Section>
    )
}

export default Projects;