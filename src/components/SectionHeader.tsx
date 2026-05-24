type SectionHeaderProps = {
  number: string
  title: string
  intro?: string
}

export function SectionHeader({ number, title, intro }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-label">{number}</span>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}
