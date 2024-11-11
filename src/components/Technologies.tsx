import Section from "./Section";
import TechnologyItem from "./TechnologyItem";
import { PiBrainLight } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { TechnologyProps } from "src/props/TechnologyProps";
import { IoMdGitBranch } from "react-icons/io";
import { BsDatabase } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const SIZE = 24;

const Technologies = () => {

    const { t } = useTranslation();


    const technologies : TechnologyProps[] = [
        {
            "name": t("technologies.items.machineLearning.name"),
            "description": t("technologies.items.machineLearning.description"),
            "icon": <PiBrainLight size={SIZE} />
        },
        {
            "name": t("technologies.items.webDevelopment.name"),
            "description": t("technologies.items.webDevelopment.description"),
            "icon": <FaCode size={SIZE} />
        },
        {
            "name": t("technologies.items.dataScience.name"),
            "description": t("technologies.items.dataScience.description"),
            "icon": <IoAnalytics size={SIZE} />
        },
        {
            "name": t("technologies.items.etlPipelines.name"),
            "description": t("technologies.items.etlPipelines.description"),
            "icon": <IoMdGitBranch size={SIZE} />
        },
        {
            "name": t("technologies.items.databases.name"),
            "description": t("technologies.items.databases.description"),
            "icon": <BsDatabase size={SIZE} />
        }
    ]

    return (
        <Section title={t("technologies.title")}>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                { technologies.map((technology, index) => (
                    <TechnologyItem key={index} technology={technology} />
                )) }	
            </div>
        </Section>
    )
}

export default Technologies;