import { use } from 'react'
import { Appearance, type ColorSchemeName, useColorScheme } from 'react-native'

import { ThemeContext } from '../providers/theme-provider'
import type { Theme } from '../theme'

interface UseTheme {
	theme: Theme['dark'] // pode ser o light também
	onChangeTheme: () => ColorSchemeName
}

export function useTheme(): UseTheme {
	const context = use(ThemeContext)

	if (!context) throw new Error('useTheme must be use inside ThemeProvider.')

	const colorScheme = useColorScheme()

	const onChangeTheme = (theme?: ColorSchemeName) => {
		const themeChanged = (theme ?? colorScheme === 'dark') ? 'light' : 'dark'

		Appearance.setColorScheme(themeChanged)

		return themeChanged
	}

	if (colorScheme === 'unspecified')
		return { theme: context.theme.light, onChangeTheme }

	return { theme: context.theme[colorScheme], onChangeTheme }
}
