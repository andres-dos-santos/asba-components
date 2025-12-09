export type ColorScale = {
  primary: string
  primaryHover: string
  primaryActive: string

  secondary: string
  secondaryHover: string
  secondaryActive: string

  success: string
  successHover: string
  successActive: string

  warning: string
  warningHover: string
  warningActive: string

  error: string
  errorHover: string
  errorActive: string

  info: string
  infoHover: string
  infoActive: string

  background: string
  backgroundSecondary: string

  surface: string
  surfaceSecondary: string

  text: string
  textSecondary: string

  border: string
}

export type Theme = {
  light: ColorScale
  dark: ColorScale
}

export type ThemeMode = keyof Theme

