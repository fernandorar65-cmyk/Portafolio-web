export type PresetPaletteId =
  | 'violet'
  | 'ocean'
  | 'emerald'
  | 'coral'
  | 'amber'
  | 'indigo'
  | 'fuchsia'
  | 'pink'
  | 'teal'
  | 'lime'
  | 'ruby'
  | 'sunset'

export type PaletteId = PresetPaletteId | 'custom'

export type ColorPalette = {
  id: PresetPaletteId
  name: string
  swatch: string
}

export const colorPalettes: ColorPalette[] = [
  { id: 'violet', name: 'Violeta', swatch: '#9333ea' },
  { id: 'ocean', name: 'Océano', swatch: '#0ea5e9' },
  { id: 'emerald', name: 'Esmeralda', swatch: '#10b981' },
  { id: 'coral', name: 'Coral', swatch: '#f43f5e' },
  { id: 'amber', name: 'Ámbar', swatch: '#f59e0b' },
  { id: 'indigo', name: 'Índigo', swatch: '#6366f1' },
  { id: 'fuchsia', name: 'Fucsia', swatch: '#d946ef' },
  { id: 'pink', name: 'Rosa', swatch: '#ec4899' },
  { id: 'teal', name: 'Turquesa', swatch: '#14b8a6' },
  { id: 'lime', name: 'Lima', swatch: '#84cc16' },
  { id: 'ruby', name: 'Rubí', swatch: '#dc2626' },
  { id: 'sunset', name: 'Atardecer', swatch: '#ea580c' },
]

export const PRESET_PALETTE_IDS = colorPalettes.map((palette) => palette.id)

export const DEFAULT_PALETTE: PaletteId = 'violet'
export const DEFAULT_CUSTOM_COLOR = '#9333ea'

export function isPresetPaletteId(value: string): value is PresetPaletteId {
  return colorPalettes.some((palette) => palette.id === value)
}

export function isPaletteId(value: string): value is PaletteId {
  return value === 'custom' || isPresetPaletteId(value)
}
