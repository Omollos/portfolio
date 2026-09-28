import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-grid">
                <ProjectCard
                    type="Internal Project"
                    title="Groundswell"
                    description="A project I contributed to as part of my software development training."
                    technologies={['Go', 'React', 'PostgreSQL']}
                />
                <ProjectCard
                    type="Personal Project"
                    title="Loba"
                    description="A community-driven platform for documenting and preserving language and cultural knowledge."
                    technologies={['Go', 'JavaScript', 'PostgreSQL']}
                />
            </div>
        </section>
    )
}

export default Projects