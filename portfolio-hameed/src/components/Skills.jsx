export default function Skills() {

  const skills = [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Analysis", level: 85 },
    { name: "SQL", level: 80 },
    { name: "React", level: 70 },
    { name: "Flask", level: 75 }
  ]

  return (
    <section id="skills" className="section">

      <h2>Professional Skills</h2>

      {skills.map((skill, i) => (

        <div key={i} className="skill">

          <p>{skill.name}</p>

          <div className="bar">
            <div
              className="progress"
              style={{ width: skill.level + "%" }}
            ></div>
          </div>

        </div>

      ))}

    </section>
  )
}