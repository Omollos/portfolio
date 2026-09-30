function Articles() {
  return (
    <section id="articles">
      <h2>Articles</h2>

      <div className="article-card">
        <p className="article-status">Technical Writing</p>

        <h3>Go Backend Development & Server Fundamentals</h3>

        <p>
          I write about Go backend development, server fundamentals,
          and lessons from my software development journey.
        </p>

        <div className="article-tags">
  <span>Go</span>
  <span>Backend</span>
  <span>Server Fundamentals</span>
</div>

        <a
          href="https://dev.to/steve_omollo/series/42647"
          target="_blank"
          rel="noreferrer"
        >
          Read My Articles →
        </a>
      </div>
    </section>
  )
}

export default Articles