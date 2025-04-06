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

export type InputFieldProps = TextInputProps & { borderColor?: string }

export function InputField({ style, children, ...props }: InputFieldProps) {
	const colorScheme = useColorScheme()

	return (
		<TextInput
			style={[
				style,
				{
					borderWidth: StyleSheet.hairlineWidth,
					borderColor: props.borderColor,
					color: colors[colorScheme!].text.primary,
				},
			]}
			{...props}
		/>
	)
}

export type InputLabelProps = PProps

export function InputLabel({ children, ...props }: InputLabelProps) {
	return <P {...props}>{children}</P>
}
