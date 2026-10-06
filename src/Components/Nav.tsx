import { Link, NavLink } from "react-router-dom"

type NavProps = {
    theme: "light" | "dark"
    onToggleTheme: () => void
}

const Nav = ({ theme, onToggleTheme }: NavProps) => {
    return(
    <header className="topbar">
      <Link to="/" className="brand" aria-label="Userspace startsida">
        <span className="brand-mark">U</span>
        <span>user<span className="brand-accent">space</span></span>
      </Link>

      <nav className="nav-links" aria-label="Huvudnavigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Startsida
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Användare
        </NavLink>
      </nav>

      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Byt till ljust tema' : 'Byt till mörkt tema'}
        title={theme === 'dark' ? 'Ljust tema' : 'Mörkt tema'}
      >
        {theme === 'dark' ? '☼' : '☾'}
      </button>
    </header>
    )
}

export default Nav