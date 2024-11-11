import Contact from "src/components/Contact";
import Education from "src/components/Education";
import Layout from "src/components/Layout";
import Experience from "src/components/Experience";
import Presentation from "src/components/Presentation";
import Projects from "src/components/Projects";
import AboutMe from "src/components/AboutMe";
import Technologies from "src/components/Technologies";


const HomeScreen = () => {

    return (
        <Layout>
            <Presentation />
            <AboutMe />
            <Experience />
            <Technologies />
            <Projects />
            <Education />
            <Contact />
        </Layout>
    )
}

export default HomeScreen;