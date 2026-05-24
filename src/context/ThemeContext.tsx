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
  DEFAULT_CUSTOM_COLOR,
  DEFAULT_PALETTE,
  isPaletteId,
  type ColorPalette,
  type PaletteId,
} from '../data/palettes'
import {
  applyCustomAccent,
  clearCustomAccent,
  normalizeHex,
} from '../lib/colorUtils'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  palette: PaletteId
  customColor: string
  palettes: ColorPalette[]
  toggleTheme: () => void
  setPalette: (palette: PaletteId) => void
  setCustomColor: (hex: string) => void
  isDark: boolean
}

const THEME_STORAGE_KEY = 'theme'
const PALETTE_STORAGE_KEY = 'palette'
const CUSTOM_COLOR_STORAGE_KEY = 'customColor'

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

function getStoredCustomColor(): string {
  const stored = localStorage.getItem(CUSTOM_COLOR_STORAGE_KEY)
  return normalizeHex(stored ?? '') ?? DEFAULT_CUSTOM_COLOR
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applySettings(theme: Theme, palette: PaletteId, customColor: string) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.setAttribute('data-palette', palette)

  if (palette === 'custom') {
    applyCustomAccent(root, customColor, theme)
  } else {
    clearCustomAccent(root)
  }

  localStorage.setItem(THEME_STORAGE_KEY, theme)
  localStorage.setItem(PALETTE_STORAGE_KEY, palette)
  localStorage.setItem(CUSTOM_COLOR_STORAGE_KEY, customColor)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => getStoredTheme() ?? getSystemTheme(),
  )
  const [palette, setPaletteState] = useState<PaletteId>(
    () => getStoredPalette() ?? DEFAULT_PALETTE,
  )
  const [customColor, setCustomColorState] = useState<string>(() =>
    getStoredCustomColor(),
  )

  useEffect(() => {
    applySettings(theme, palette, customColor)
  }, [theme, palette, customColor])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }, [])

  const setPalette = useCallback((nextPalette: PaletteId) => {
    setPaletteState(nextPalette)
  }, [])

  const setCustomColor = useCallback((hex: string) => {
    const normalized = normalizeHex(hex) ?? DEFAULT_CUSTOM_COLOR
    setCustomColorState(normalized)
    setPaletteState('custom')
  }, [])

  const value = useMemo(
    () => ({
      theme,
      palette,
      customColor,
      palettes: colorPalettes,
      toggleTheme,
      setPalette,
      setCustomColor,
      isDark: theme === 'dark',
    }),
    [theme, palette, customColor, toggleTheme, setPalette, setCustomColor],
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
