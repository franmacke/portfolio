import Section from "./Section"
import Card from "./Card"
import { useTranslation } from "react-i18next";




const Education = () => {
    const { t } = useTranslation();

    return (
        <Section title={t("education.title")}>
            <div className="space-y-5">
                <Card>
                    <div className="flex-col">
                        <div className="flex-col">
                            <p className="text-xl font-bold">{t("education.items.firstDegree.name")}</p>
                            <h3 className="text-sm text-gray-800">{t("education.items.firstDegree.institution")}</h3>
                            <p className="text-sm text-gray-600">2019 - {t("education.items.firstDegree.status")}</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex-col">
                        <div className="flex-col">
                            <p className="text-xl font-bold">{t("education.items.secondDegree.name")}</p>
                            <h3 className="text-sm text-gray-800">{t("education.items.secondDegree.institution")}</h3>
                            <p className="text-sm text-gray-600">2013 - 2018</p>
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    )
}

export default Education;