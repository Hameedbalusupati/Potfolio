import { useEffect, useState } from "react"

export default function GithubProjects() {

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch("https://api.github.com/users/Hameedbalusupati/repos")

      .then(res => res.json())

      .then(data => {
        setRepos(data)
        setLoading(false)
      })

      .catch(error => {
        console.error("Error fetching repos:", error)
        setLoading(false)
      })

  }, [])

  if (loading) {
    return <h2 style={{textAlign:"center"}}>Loading GitHub Projects...</h2>
  }

  return (

    <section className="section">

      <h2>GitHub Projects</h2>

      <div className="project-grid">

        {repos.slice(0, 6).map(repo => (

          <div key={repo.id} className="card">

            <h3>{repo.name}</h3>

            <p>{repo.description || "No description available"}</p>

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

  )

}