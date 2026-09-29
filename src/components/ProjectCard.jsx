function ProjectCard({
  title,
  type,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <article className="project-card">
      <div className="project-header">
        <span className="project-icon">
          {title.charAt(0)}
        </span>

        <p className="project-type">{type}</p>
      </div>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        )}

        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            Live Demo →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard