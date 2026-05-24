import { Link, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          {profile.name}
        </Link>
        <div className="header-actions">
          <nav className="nav-pill" aria-label="Principal">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={isHome ? link.href : `/${link.href}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
