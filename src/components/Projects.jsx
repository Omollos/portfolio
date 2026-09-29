import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          type="Internal Project"
          title="Guidely"
          description="An internal knowledge assistant that uses document retrieval and AI to help users find information from company documentation."
          technologies={['React', 'FastAPI', 'FAISS']}
        />

        <ProjectCard
          type="Personal Project"
          title="Loba"
          description="A community-driven platform for documenting and preserving language and cultural knowledge."
          technologies={['Go', 'JavaScript', 'PostgreSQL']}
          github="https://github.com/Omollos/loba"
          demo="https://loba-six.vercel.app"
        />
      </div>
    </section>
  )
}

export default Projects