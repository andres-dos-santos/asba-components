import { createContext, type ReactNode } from 'react'

import type { Theme } from '../theme'

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
	return <ThemeContext value={{ theme }}>{children}</ThemeContext>
}

type ThemeContextData = {
	theme: Theme
}

type ThemeProviderProps = {
	theme: Theme
	children: ReactNode
}
