export type PaletteId = 'violet' | 'ocean' | 'emerald' | 'coral' | 'amber'

export type ColorPalette = {
  id: PaletteId
  name: string
  swatch: string
}

export const colorPalettes: ColorPalette[] = [
  { id: 'violet', name: 'Violeta', swatch: '#9333ea' },
  { id: 'ocean', name: 'Océano', swatch: '#0ea5e9' },
  { id: 'emerald', name: 'Esmeralda', swatch: '#10b981' },
  { id: 'coral', name: 'Coral', swatch: '#f43f5e' },
  { id: 'amber', name: 'Ámbar', swatch: '#f59e0b' },
]

export const DEFAULT_PALETTE: PaletteId = 'violet'

export function isPaletteId(value: string): value is PaletteId {
  return colorPalettes.some((palette) => palette.id === value)
}
