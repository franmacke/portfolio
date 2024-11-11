


export type Link = {
    text: string;
    url: string;
    description: string;
}


export type ExperienceItemProps = {
    title: string;
    time: string[];
    company: string;
    description: string;
    responsibilities: string[];
    technologies?: string[];
    links?: Link[];
}