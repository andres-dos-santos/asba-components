import {
	StyleSheet,
	TextInput,
	useColorScheme,
	type TextInputProps,
} from 'react-native'
import { useState } from 'react'

import { Box, type BoxProps } from './box'
import { P, type PProps } from './p'

import { colors } from '../constants/colors'

export type InputProps = BoxProps

export function Input({ children, ...props }: InputProps) {
	return <Box {...props}>{children}</Box>
}

export type InputFieldProps = TextInputProps

export function InputField({ style, children, ...props }: InputFieldProps) {
	const [focused, setFocused] = useState(false)
	const colorScheme = useColorScheme()

	return (
		<TextInput
			{...props}
			style={[
				style,
				{
					borderWidth: StyleSheet.hairlineWidth,
					borderColor: focused
						? colors[colorScheme!].focus.base
						: colors[colorScheme!].border.primary,
					color: colors[colorScheme!].text.primary,
				},
			]}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
		/>
	)
}

export type InputLabelProps = PProps

export function InputLabel({ children, ...props }: InputLabelProps) {
	return <P {...props}>{children}</P>
}
