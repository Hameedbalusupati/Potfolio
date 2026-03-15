export default function Footer() {

  const year = new Date().getFullYear()

  return (

    <footer className="footer">

      <div className="footer-content">

        <p>© {year} Balusupati Mahammad Hameed</p>

        <div className="footer-links">

          <a href="https://github.com/Hameedbalusupati" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/mahammad-hameed" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto: hameedbalusupati023@gmail.com">
            Email
          </a>

        </div>

      </div>

    </footer>

  )
}