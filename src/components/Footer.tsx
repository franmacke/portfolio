import { Footer } from "flowbite-react"
import { BsGithub, BsLinkedin } from "react-icons/bs";



const BottomPage = () => {

    return (
        <Footer className="h-52 p-20">
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Franco Macke" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="https://github.com/franmacke" icon={BsGithub} target="_" />
                    <Footer.Icon href="https://www.linkedin.com/in/franco-macke/" icon={BsLinkedin} target="_" />
                </div>
            </div>
        </Footer>
    )
}

export default BottomPage;