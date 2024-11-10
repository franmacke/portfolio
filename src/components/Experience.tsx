import ExperienceItem from "./ExperienceItem";
import Section from "./Section";
import { Timeline } from "flowbite-react";
import { ExperienceItemProps } from "src/props/ExperienceProps";
import { useTranslation } from "react-i18next";




const Experience = () => {

    const { t } = useTranslation();

    const experienceList: ExperienceItemProps[] = [
        {
            title: t("experience.items.firstJob.position"),
            time: ["2021", t("experience.items.firstJob.status")],
            company: t("experience.items.firstJob.company"),
            description: t("experience.items.firstJob.description"),
            responsibilities: [
                t("experience.items.firstJob.responsibilities.first"),
                t("experience.items.firstJob.responsibilities.second"),
                t("experience.items.firstJob.responsibilities.third"),
                t("experience.items.firstJob.responsibilities.fourth"),
                t("experience.items.firstJob.responsibilities.fifth")
            ]

        },
        {
            title: t("experience.items.secondJob.position"),
            time: ["2020", t("experience.items.secondJob.status")],
            company: t("experience.items.secondJob.company"),
            description: t("experience.items.secondJob.description"),
            responsibilities: [
                t("experience.items.secondJob.responsibilities.first"),
                t("experience.items.secondJob.responsibilities.second"),
                t("experience.items.secondJob.responsibilities.third"),
                t("experience.items.secondJob.responsibilities.fourth"),
                t("experience.items.secondJob.responsibilities.fifth")
            ],
            technologies: ["React Native", "Expo", "Django", "RESTful API", "SQL"]
        },
        {
            title: t("experience.items.thirdJob.position"),
            time: ["2020", "2021"],
            company: t("experience.items.thirdJob.company"),
            description: t("experience.items.thirdJob.description"),
            responsibilities: [
                t("experience.items.thirdJob.responsibilities.first"),
                t("experience.items.thirdJob.responsibilities.second"),
                t("experience.items.thirdJob.responsibilities.third"),
                t("experience.items.thirdJob.responsibilities.fourth"),
                t("experience.items.thirdJob.responsibilities.fifth")
            ],
            technologies: ["React", "Django", "RESTful API", "SQL", "Python", "JavaScript"]
        }   
    ]
    

    return (
        <Section title={t("experience.title")}>
            <Timeline className="text-left">
                {experienceList.map((experience, index) => (
                    <ExperienceItem key={index} data={experience} />
                ))}
            </Timeline>
        </Section>
    )
};

export default Experience;