function SocialLinks() {
  return (
    <footer className="social-links">
      <p>Find me online</p>

      <div className="social-links-list">
        <a
  href="https://www.linkedin.com/in/steve-omollo"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
</a>

<a
  href="https://github.com/Omollos"
  target="_blank"
  rel="noreferrer"
>
  GitHub
</a>

<a
  href="https://dev.to/steve_omollo"
  target="_blank"
  rel="noreferrer"
>
  Dev.to
</a>

<a
  href="https://x.com/SteveOmoll79733"
  target="_blank"
  rel="noreferrer"
>
  X
</a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Steve Omollo. All rights reserved.
      </p>
    </footer>
  )
}

export default SocialLinks