import { StyleSheet, TextInput, type TextInputProps } from 'react-native'
import { useState } from 'react'

import { Box, type BoxProps } from './box'
import { P, type PProps } from './p'

import { useColorScheme } from '../hooks/use-color-scheme'

import { colors } from '../constants/colors'

export type InputProps = BoxProps

export function Input({ children, ...props }: InputProps) {
	return <Box {...props}>{children}</Box>
}

export type InputFieldProps = TextInputProps

export function InputField({ style, children, ...props }: InputFieldProps) {
	const [focused, setFocused] = useState(false)
	const colorScheme = useColorScheme(colors)

	return (
		<TextInput
			style={[
				style,
				{
					borderWidth: StyleSheet.hairlineWidth,
					borderColor: focused
						? colorScheme.focus.base
						: colorScheme.focus.base,
				},
			]}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
			{...props}
		/>
	)
}

export type InputLabelProps = PProps

export function InputLabel({ children, ...props }: InputLabelProps) {
	return <P {...props}>{children}</P>
}
