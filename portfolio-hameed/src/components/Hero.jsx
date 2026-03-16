import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  return (
    <section className="hero">

      <h1>Balusupati Mahammad Hameed</h1>

      <h2 className="typing">

        <Typewriter
          words={[
            "Machine Learning Engineer",
            "Data Analyst"
          ]}
          loop
          cursor
          cursorStyle="|"
        />

      </h2>

      <p>B.Tech | Pace Institute of Technology and Sciences</p>

      <a href="/MyResume.pdf" download className="resume-btn">
        Download Resume
      </a>

    </section>
  )
}