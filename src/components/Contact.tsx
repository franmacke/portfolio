import { useTranslation } from "react-i18next";
import Section from "./Section"
import { Button } from "flowbite-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {

    const { t } = useTranslation();

    return (
        <Section title={t("contact.title")}>

            <div className="flex space-x-4 p-10">
                <a href="https://www.linkedin.com/in/franco-macke/" target="_blank" rel="noreferrer">
                    <Button className="font-bold">
                        <div className="flex gap-2">
                            <FaLinkedin size={20} />
                            LinkedIn
                        </div>
                    </Button>
                </a>
                <a href="mailto:fmacke10@gmail.com">
                    <Button className="font-bold" color="red">
                        <div className="flex gap-2">
                            <SiGmail size={20} />
                            Email
                        </div>
                    </Button>
                </a>
                <a href="https://github.com/franmacke" target="_blank" rel="noreferrer">
                    <Button className="font-bold" color="gray">
                        <div className="flex gap-2">
                            <FaGithub size={20} />
                            GitHub
                        </div>
                    </Button>
                </a>
                
            </div>
        </Section>
    )
}

export default Contact;