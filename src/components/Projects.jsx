import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          type="Internal Project"
          title="Guidely"
          description="An internal knowledge assistant that retrieves relevant information from company documents and uses AI to generate answers with supporting sources."
          technologies={['React', 'FastAPI', 'FAISS']}
        />

        <ProjectCard
          type="Personal Project"
          title="Loba"
          description="A community-driven platform for collecting, documenting, and translating Kenyan local-language vocabulary, with structured storage for language data."
          technologies={['Go', 'JavaScript', 'PostgreSQL']}
          github="https://github.com/Omollos/loba"
          demo="https://loba-six.vercel.app"
        />

        <ProjectCard
          type="Algorithms Project"
          title="Lem-in"
          description="A Go-based pathfinding project that parses an ant colony, validates the graph, and uses BFS to find efficient non-overlapping paths through the network."
          technologies={['Go', 'Algorithms', 'BFS']}
        />
      </div>
    </section>
  )
}

export default Projects