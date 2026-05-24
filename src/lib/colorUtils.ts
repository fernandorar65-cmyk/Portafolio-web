type Rgb = { r: number; g: number; b: number }

function parseHex(hex: string): Rgb | null {
  const normalized = hex.replace('#', '').trim()
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return null
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  }
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((channel) =>
        Math.round(Math.max(0, Math.min(255, channel)))
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')
  )
}

function mixChannel(a: number, b: number, ratio: number): number {
  return a + (b - a) * ratio
}

export function mixHex(hex: string, hex2: string, ratio: number): string {
  const color1 = parseHex(hex)
  const color2 = parseHex(hex2)
  if (!color1 || !color2) return hex
  return rgbToHex(
    mixChannel(color1.r, color2.r, ratio),
    mixChannel(color1.g, color2.g, ratio),
    mixChannel(color1.b, color2.b, ratio),
  )
}

export function lighten(hex: string, amount: number): string {
  return mixHex(hex, '#ffffff', amount)
}

export function darken(hex: string, amount: number): string {
  return mixHex(hex, '#000000', amount)
}

export function normalizeHex(hex: string): string | null {
  const rgb = parseHex(hex)
  if (!rgb) return null
  return rgbToHex(rgb.r, rgb.g, rgb.b)
}

const CUSTOM_ACCENT_VARS = [
  '--accent',
  '--accent-2',
  '--accent-bg',
  '--accent-border',
  '--accent-glow',
  '--shadow-lg',
] as const

export function clearCustomAccent(root: HTMLElement) {
  CUSTOM_ACCENT_VARS.forEach((variable) => root.style.removeProperty(variable))
}

export function applyCustomAccent(
  root: HTMLElement,
  hex: string,
  theme: 'light' | 'dark',
) {
  const base = normalizeHex(hex) ?? '#9333ea'
  const rgb = parseHex(base)
  if (!rgb) return

  const accent = theme === 'light' ? darken(base, 0.08) : lighten(base, 0.25)
  const accent2 = theme === 'light' ? lighten(base, 0.18) : lighten(base, 0.42)
  const bgAlpha = theme === 'light' ? 0.1 : 0.12
  const borderAlpha = theme === 'light' ? 0.35 : 0.4
  const glowAlpha = theme === 'light' ? 0.28 : 0.35

  root.style.setProperty('--accent', accent)
  root.style.setProperty('--accent-2', accent2)
  root.style.setProperty(
    '--accent-bg',
    `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${bgAlpha})`,
  )
  root.style.setProperty(
    '--accent-border',
    `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${borderAlpha})`,
  )
  root.style.setProperty(
    '--accent-glow',
    `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${glowAlpha})`,
  )

  const shadow =
    theme === 'light'
      ? `0 20px 60px rgba(12, 10, 18, 0.1), 0 4px 16px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`
      : `0 24px 64px rgba(0, 0, 0, 0.45), 0 4px 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`
  root.style.setProperty('--shadow-lg', shadow)
}
