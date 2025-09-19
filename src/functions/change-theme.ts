import { Appearance } from 'react-native'

export function onChangeTheme(theme?: 'dark' | 'light') {
	const currentTheme = Appearance.getColorScheme()

	if (!theme) {
		return Appearance.setColorScheme(currentTheme === 'dark' ? 'light' : 'dark')
	}

	return Appearance.setColorScheme(theme)
}
