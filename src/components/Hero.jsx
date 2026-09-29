function Hero() {
  return (
    <section id="home">
      <div className="hero-content">
        <p>Hello, I'm</p>

        <h1>Steve Omollo</h1>

        <h2>Software Developer</h2>

        <p>
          I build practical software solutions and explore backend
          development, web technologies, and modern tools.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View My Projects</a>

          <a href="/resume.pdf">Resume</a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/profile.jpg"
          alt="Steve Omollo"
        />
      </div>
    </section>
  )
}

export default Hero