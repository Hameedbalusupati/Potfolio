import profile from "../assets/image.jpeg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            Hello! I'm <strong>Balusupati Mahammad Hameed</strong>, a passionate
            developer interested in{" "}
            <strong>
              Machine Learning, Artificial Intelligence, Data Analysis and Web
              Development.
            </strong>
          </p>

          <p>
            I enjoy building real-world applications using{" "}
            <strong>Python, React, Flask and SQL.</strong>
          </p>

          <p>
            Currently pursuing{" "}
            <strong>B.Tech at Pace Institute of Technology and Sciences.</strong>
          </p>
        </div>

        <div className="about-image">
          <img
            src={profile}
            alt="Balusupati Mahammad Hameed"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}