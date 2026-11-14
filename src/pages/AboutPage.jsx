const skillGroups = [
  {
    title: 'QA & Testing',
    skills: [
      'Manual & Functional Testing',
      'User Acceptance Testing (UAT)',
      'Test Case Design & Execution',
      'Game Playtesting',
      'Debugging & Troubleshooting',
      'Defect Investigation & Documentation',
      'Connectivity & Reachability Testing'
    ]
  },
  {
    title: 'Game Development',
    skills: [
      'Unity',
      'C#',
      'Ruby',
      'RPG Maker XP',
      'Pokémon Essentials',
      'Procedural Content Generation',
      'Gameplay Programming',
      'Algorithm Implementation'
    ]
  },
  {
    title: 'Game Design & Systems',
    skills: [
      'Gameplay Systems Design',
      'Gameplay Balancing',
      'Resource Management & Economy Systems',
      'Autonomous Visitor Behaviour',
      'UI/UX Design',
      'Accessibility Features',
      'Machinations'
    ]
  },
  {
    title: 'Programming & Development Tools',
    skills: [
      'Python',
      'SQL',
      'JavaScript',
      'TypeScript',
      'React',
      'HTML & CSS',
      'Git & GitHub'
    ]
  }
]

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro">
        <p className="intro-label">GET TO KNOW ME</p>
        <h1>About Me</h1>

        <p>
          I'm Lydia, a Computer Science graduate from Durham University with a
          strong interest in game quality assurance, gameplay design and development.
        </p>

        <p>
          Through my university projects, I've gained hands-on experience building
          and testing interactive game systems, investigating issues and improving
          gameplay through iteration and evaluation.
        </p>

        <p>
          During my IT internship, I also designed and executed user acceptance tests,
          investigated discrepancies and used SQL to verify expected outcomes.
        </p>

        <p>
          I'm particularly interested in starting my career in game QA, while
          continuing to develop my game design and programming skills.
        </p>
      </section>

      <section className="skills-section" aria-labelledby="technical-skills-heading">
        <h2 id="technical-skills-heading">Technical Skills</h2>

        <p className="skills-intro">
          My technical skills combine hands-on game development, software testing and
          programming. Through university projects and IT internship experience,
          I've developed experience in test-case design, debugging, gameplay systems,
          procedural generation and evaluating software functionality. I particularly
          enjoy investigating technical issues and improving the reliability and
          usability of interactive systems.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-category" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="about-skill-tags">
                {group.skills.map((skill) => (
                  <li className="about-skill-tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage

