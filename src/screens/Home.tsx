import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";


const HomeScreen = () => {

    return (
        <Layout>
            <Presentation />
            <Experience />
            <Education />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default HomeScreen;