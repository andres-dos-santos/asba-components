import { Appearance } from 'react-native'

export function onChangeTheme(theme: 'dark' | 'light') {
	Appearance.setColorScheme(theme)
}
