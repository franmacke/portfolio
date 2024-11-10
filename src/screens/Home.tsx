import Contact from "src/components/Contact";
import Education from "src/components/Education";
import Layout from "src/components/Layout";
import Experience from "src/components/Experience";
import Presentation from "src/components/Presentation";
import Projects from "src/components/Projects";


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