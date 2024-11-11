import Section from "./Section"
import { useTranslation } from "react-i18next";
import EducationItem from "./EducationItem";



const Education = () => {
    const { t } = useTranslation();

    return (
        <Section title={t("education.title")}>
            <div className="md:grid-cols-2 sm:grid-cols-1 grid gap-5">
                <EducationItem
                    name={t("education.items.firstDegree.name")}
                    institution={t("education.items.firstDegree.institution")}
                    date="2019"
                    status={t("education.items.firstDegree.status")}
                    image={require("../assets/images/education/uba.png")}
                    href={"https://www.fi.uba.ar/"}
                />
                <EducationItem 
                    name={t("education.items.secondDegree.name")}
                    institution={t("education.items.secondDegree.institution")}
                    date="2013 - 2018"
                    status="Elementary School"
                    image={require("../assets/images/education/philips.png")}
                    href={"http://www.philips.edu.ar/"}
                />
            </div>
        </Section>
    )
}

export default Education;