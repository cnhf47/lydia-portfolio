
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <Link to="/" className="brand">
          Home
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>
            Projects
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
