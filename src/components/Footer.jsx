
function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Lydia Chan
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/cnhf47"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/lei-ling-chan-lydia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
