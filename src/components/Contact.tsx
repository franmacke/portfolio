import { useTranslation } from "react-i18next";
import Section from "./Section"




const Contact = () => {

    const { t } = useTranslation();

    return (
        <Section title={t("contact.title")}>

        </Section>
    )
}

export default Contact;