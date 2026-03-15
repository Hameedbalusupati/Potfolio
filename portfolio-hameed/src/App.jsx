import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Project"
import GithubProjects from "./components/GithubProjects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Background3D from "./components/Background3D"

function App() {
  return (
    <div>

      {/* <Background3D /> */}

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <GithubProjects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App