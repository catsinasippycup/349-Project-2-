import Nav from "./Nav.jsx"
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Projects from "./Projects.jsx"
import Experience from "./Experience.jsx"
import ContactMe from "./ContactMe.jsx"
import Footer from "./Footer.jsx"

export default function Main() {
    return (
        <div className="bg-slate-700">
            <Nav />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    )
}