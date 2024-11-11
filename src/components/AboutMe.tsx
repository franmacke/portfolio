import { useTranslation } from "react-i18next";
import Card from "./Card";
import Section from "./Section";



const AboutMe = () => {

    const { t } = useTranslation();

    return (
        <Section title={t("aboutMe.title")}>
            <Card>
                <div className="flex flex-col md:flex-row items-center">
                    <img 
                        className="w-40 h-40 rounded-full" 
                        src="https://media.licdn.com/dms/image/v2/D4D03AQE4DoeyigO_LQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730849767922?e=1736985600&v=beta&t=eaonM2JPc7bN2CgGfet4vw7tLZj8abVuINF6j977dgQ" 
                        alt="Franco Macke" 
                    />
                    <div className="md:ml-5 mt-5 md:mt-0 text-left">
                        <h2 className="text-2xl font-bold">Franco Macke</h2>
                        <p className="text-gray-500">{t("aboutMe.career")}</p>
                        <p className="mt-5">{t("aboutMe.description")}</p>
                    </div>
                </div>
            </Card>
        </Section>
    )
}

export default AboutMe;