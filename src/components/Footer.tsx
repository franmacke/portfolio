import { Footer } from "flowbite-react"
import { BsGithub, BsLinkedin } from "react-icons/bs";



const BottomPage = () => {

    return (
        <Footer className="h-10 p-10 w-full">
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="Franco Macke" year={2024} />
            </div>
        </Footer>
    )
}

export default BottomPage;