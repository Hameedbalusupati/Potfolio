export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:hameedbalusupati023@gmail.com">
            hameedbalusupati023@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/Hameedbalusupati"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Hameedbalusupati
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/mahammad-hameed"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mahammad-hameed
          </a>
        </div>

        <div className="contact-card">
          <h3>Mobile</h3>
          <a href="tel:+919618913824">
            +91 9618913824
          </a>
        </div>

      </div>
    </section>
  );
}