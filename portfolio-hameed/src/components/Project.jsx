export default function Projects() {

  const projects = [
    {
      title: "Smart Gatepass System",
      desc: "QR based gatepass system using Flask and React"
    },
    {
      title: "Fake News Detection",
      desc: "Machine learning model to classify fake news using NLP"
    },
    {
      title: "AI Legal Document Analyzer",
      desc: "Telegram bot using Legal-BERT to detect risky clauses"
    }
  ];

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((p) => (
          <div key={p.title} className="card">

            <h3>{p.title}</h3>
            <p>{p.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}