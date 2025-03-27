import { Text, useColorScheme, type TextProps } from 'react-native'

export type PProps = TextProps

export function P({ children, style, ...props }: PProps) {
	const colorScheme = useColorScheme()

	return (
		<Text
			style={[{ color: colorScheme === 'dark' ? '#FFFFFF' : '#1C1C1C' }, style]}
			{...props}
		>
			{children}
		</Text>
	)
}
