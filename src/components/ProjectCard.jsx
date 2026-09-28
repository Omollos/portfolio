function ProjectCard({ title, type, description, technologies }) {
    return (
        <article className="project-card">
            <p>{type}</p>

            <h3>{title}</h3>

            <p>{description}</p>

            <div>
                {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                ))}
            </div>
        </article>
    )
}

export default ProjectCard