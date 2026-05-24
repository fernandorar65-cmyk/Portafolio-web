import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from '../context/ThemeContext'

export function ColorPalettePicker() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const colorInputRef = useRef<HTMLInputElement>(null)
  const { palette, palettes, customColor, setPalette, setCustomColor } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return
      setOpen(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  if (!mounted) return null

  const isCustomActive = palette === 'custom'

  return createPortal(
    <div className="palette-fab" ref={rootRef}>
      <div
        id="palette-panel"
        className={`palette-fab__panel${open ? ' palette-fab__panel--open' : ''}`}
        role="dialog"
        aria-label="Seleccionar paleta de colores"
        aria-hidden={!open}
      >
        <p className="palette-fab__title">Predefinidos</p>
        <ul className="palette-fab__grid">
          {palettes.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`palette-dot${palette === item.id ? ' palette-dot--active' : ''}`}
                style={{ '--swatch-color': item.swatch } as React.CSSProperties}
                onClick={() => setPalette(item.id)}
                aria-label={`Paleta ${item.name}`}
                aria-pressed={palette === item.id}
                title={item.name}
              >
                <span className="palette-dot__color" />
              </button>
            </li>
          ))}
        </ul>

        <div className="palette-fab__divider" aria-hidden="true" />

        <p className="palette-fab__title">Color personalizado</p>
        <div
          className={`palette-fab__custom${isCustomActive ? ' palette-fab__custom--active' : ''}`}
        >
          <button
            type="button"
            className="palette-fab__picker-btn"
            onClick={() => colorInputRef.current?.click()}
            aria-label="Abrir selector de color"
          >
            <span
              className="palette-fab__picker-preview"
              style={{ backgroundColor: customColor }}
            />
            <span className="palette-fab__picker-label">Elegir color</span>
          </button>
          <input
            ref={colorInputRef}
            type="color"
            className="palette-fab__color-input"
            value={customColor}
            onChange={(event) => setCustomColor(event.target.value)}
            aria-label="Selector de color personalizado"
          />
          <code className="palette-fab__hex">{customColor.toUpperCase()}</code>
        </div>
      </div>

      <button
        type="button"
        className={`palette-fab__trigger${open ? ' palette-fab__trigger--open' : ''}`}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Cerrar paletas de color' : 'Abrir paletas de color'}
        aria-expanded={open}
        aria-controls="palette-panel"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </button>
    </div>,
    document.body,
  )
}
