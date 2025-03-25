import { useColorScheme as useTheme } from 'react-native'

import { colors } from '../constants/colors'

export type Colors<T> = {
	dark: T
	light: T
}

export function useColorScheme<T>(value: Colors<T>) {
	const theme = useTheme() === 'dark' ? 'dark' : 'light'

	const themeColors = value || colors

	return themeColors[theme]
}
