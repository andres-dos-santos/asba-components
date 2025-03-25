import { Text, type TextProps } from 'react-native'

import { useColorScheme } from '../hooks/use-color-scheme'
import { colors } from '../constants/colors'

export type PProps = TextProps

export function P({ children, style, ...props }: PProps) {
	const colorScheme = useColorScheme(colors)

	return (
		<Text style={[{ color: colorScheme.text.primary }, style]} {...props}>
			{children}
		</Text>
	)
}
