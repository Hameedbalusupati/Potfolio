import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import GithubProjects from "./components/GithubProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Background3D from "./components/Background3D";

function App() {
  return (
    <div className="min-h-screen text-white">

      {/* Optional 3D Background */}
      {/* <Background3D /> */}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;