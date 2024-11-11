import Section from "./Section";
import TechnologyItem from "./TechnologyItem";
import { PiBrainLight } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import { TechnologyProps } from "src/props/TechnologyProps";
import { IoMdGitBranch } from "react-icons/io";
import { BsDatabase } from "react-icons/bs";

const SIZE = 24;

const technologies : TechnologyProps[] = [
    {
        "name": "Machine Learning",
        "description": "Proficient in building and training neural networks using Keras for various ML tasks.",
        "icon": <PiBrainLight size={SIZE} />
    },
    {
        "name": "Web Development",
        "description": "Experience with React, Django and TailwindCSS for building responsive web applications.",
        "icon": <FaCode size={SIZE} />
    },
    {
        "name": "Data Science",
        "description": "Experience with Pandas, Numpy, and Matplotlib for data analysis and visualization.",
        "icon": <IoAnalytics size={SIZE} />
    },
    {
        "name": "ETL Pipelines",
        "description": "Knowledge in designing and implementing ETL pipelines for efficient data processing and transformation.",
        "icon": <IoMdGitBranch size={SIZE} />
    },
    {
        "name": "SQL & NoSQL Databases",
        "description": "Skilled in designing and managing both SQL and NoSQL databases for efficient data storage and retrieval.",
        "icon": <BsDatabase size={SIZE} />
    }
]


const Technologies = () => {

    return (
        <Section title="Technologies">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                { technologies.map((technology, index) => (
                    <TechnologyItem key={index} technology={technology} />
                )) }	
            </div>
        </Section>
    )
}

export default Technologies;