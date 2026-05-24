import { profile } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">{profile.name}</p>
        <p className="footer-copy">
          © {year} · Hecho con React + Vite
        </p>
      </div>
    </footer>
  )
}
