import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project"; // ✅ FIXED
import GithubProjects from "./components/GithubProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
// import Background3D from "./components/Background3D";

function App() {
  return (
    <div className="min-h-screen text-white">

      {/* Background (optional) */}
      {/* <Background3D /> */}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project /> {/* ✅ FIXED */}
        <GithubProjects />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;