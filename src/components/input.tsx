import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import { useState } from "react";

import { Box, type BoxProps } from "./box";
import { P, type PProps } from "./p";

import { useColorScheme } from "../hooks/use-color-scheme";

export type Input = BoxProps;

export function Input({ children, ...props }: Input) {
	return <Box {...props}>{children}</Box>;
}

export type InputProps = TextInputProps;

export function InputField({ style, children, ...props }: InputProps) {
	const [focused, setFocused] = useState(false);

	const colorScheme = useColorScheme();

	return (
		<TextInput
			style={[
				style,
				{
					borderWidth: StyleSheet.hairlineWidth,
					borderColor: colorScheme[focused ? "borderFocused" : "border"],
				},
			]}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
			{...props}
		/>
	);
}

export type InputLabelProps = PProps;

export function InputLabel({ children, ...props }: InputLabelProps) {
	return <P {...props}>{children}</P>;
}
