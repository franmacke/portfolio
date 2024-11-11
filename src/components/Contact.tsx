import { useTranslation } from "react-i18next";
import Section from "./Section"
import { Button } from "flowbite-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Card from "./Card";


const Contact = () => {

    const { t } = useTranslation();

    return (
        <Section title={t("contact.title")}>
            <Card>
                <div className="flex-col items-center justify-center space-y-5 w-full">
                    <h3>Feel free to contact me!</h3>

                    <div className="sm:flex-col md:flex-none md:flex-row sm:space-y-3 md:space-y-0">
                        <Button 
                            className="font-bold md:w-fit sm:w-full" 
                            href="https://www.linkedin.com/in/franco-macke/"
                            target="_blank"
                        >
                            <div className="flex gap-2">
                                <FaLinkedin size={20} />
                                LinkedIn
                            </div>
                        </Button>
                        <Button 
                            className="font-bold md:w-fit sm:w-full" 
                            color="red" 
                            href="mailto:fmacke10@gmail.com" 
                            target="_blank" rel="noreferrer"
                        >
                            <div className="flex gap-2">
                                <SiGmail size={20} />
                                Email
                            </div>
                        </Button>
                        
                        <Button 
                            className="font-bold md:w-fit sm:w-full" 
                            color="gray" 
                            href="https://github.com/franmacke" 
                            target="_blank" rel="noreferrer"
                        >
                            <div className="flex gap-2">
                                <FaGithub size={20} />
                                GitHub
                            </div>
                        </Button>
                    </div>
                </div>
            </Card>
        </Section>
    )
}

export default Contact;