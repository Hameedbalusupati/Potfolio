import { useEffect, useState } from "react";

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Hameedbalusupati/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setError("Unable to load GitHub projects");
        setLoading(false);
      });
  }, []);

  // ⏳ Loading state
  if (loading) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Loading GitHub Projects...
      </h2>
    );
  }

  // ❌ Error state
  if (error) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        {error}
      </h2>
    );
  }

  return (
    <section id="github-projects" className="section">

      <h2>GitHub Projects</h2>

      <div className="project-grid">

        {repos.slice(0, 6).map((repo) => (
          <div key={repo.id} className="card">

            <h3>{repo.name}</h3>

            <p>
              {repo.description || "No description available"}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}