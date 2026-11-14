import { Link } from 'react-router'

/** Featured-project card styled like a game launcher library entry. */
function ProjectCard({
  title,
  type,
  genre,
  projectStage,
  description,
  skills = [],
  image,
  imageAlt,
  slug
}) {
  const projectUrl = `/projects/${slug}`

  return (
    <article className="project-card">
      <Link
        to={projectUrl}
        className="project-card-media"
        aria-label={`View ${title} project details`}
      >
        <img
          src={image}
          alt={imageAlt || `${title} project screenshot`}
          className="project-image"
          loading="lazy"
        />
      </Link>

      <div className="project-content">
        <div className="project-card-metadata">
          {genre && <span className="project-genre">{genre}</span>}
          {projectStage && <span className="project-stage">{projectStage}</span>}
        </div>

        <h3>
          <Link to={projectUrl} className="project-title-link">{title}</Link>
        </h3>
        <p className="project-type">{type}</p>
        <p className="project-description">{description}</p>

        {skills.length > 0 && (
          <div className="skills project-card-tags" aria-label={`${title} tools and skills`}>
            {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
          </div>
        )}

        <Link
          to={projectUrl}
          className="view-project"
          aria-label={`Launch Game — view ${title} project showcase (not a playable download)`}
        >
          <span className="project-launch-icon" aria-hidden="true">▶</span>
          <span className="project-launch-label">Launch Game</span>
        </Link>
        <p className="project-launch-note">Opens the project showcase — not a playable download.</p>
      </div>
    </article>
  )
}

export default ProjectCard
