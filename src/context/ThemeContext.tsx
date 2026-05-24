import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  colorPalettes,
  DEFAULT_PALETTE,
  isPaletteId,
  type ColorPalette,
  type PaletteId,
} from '../data/palettes'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  palette: PaletteId
  palettes: ColorPalette[]
  toggleTheme: () => void
  setPalette: (palette: PaletteId) => void
  isDark: boolean
}

const THEME_STORAGE_KEY = 'theme'
const PALETTE_STORAGE_KEY = 'palette'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return null
}

function getStoredPalette(): PaletteId | null {
  const stored = localStorage.getItem(PALETTE_STORAGE_KEY)
  if (stored && isPaletteId(stored)) return stored
  return null
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applySettings(theme: Theme, palette: PaletteId) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.setAttribute('data-palette', palette)
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  localStorage.setItem(PALETTE_STORAGE_KEY, palette)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => getStoredTheme() ?? getSystemTheme(),
  )
  const [palette, setPaletteState] = useState<PaletteId>(
    () => getStoredPalette() ?? DEFAULT_PALETTE,
  )

  useEffect(() => {
    applySettings(theme, palette)
  }, [theme, palette])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }, [])

  const setPalette = useCallback((nextPalette: PaletteId) => {
    setPaletteState(nextPalette)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      palette,
      palettes: colorPalettes,
      toggleTheme,
      setPalette,
      isDark: theme === 'dark',
    }),
    [theme, palette, toggleTheme, setPalette],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }
  return context
}
