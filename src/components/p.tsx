import { Text, type TextProps } from "react-native";

import { useColorScheme } from "../hooks/use-color-scheme";

export type PProps = TextProps;

export function P({ children, style, ...props }: PProps) {
	const colorScheme = useColorScheme();

	return (
		<Text style={[{ color: colorScheme.foreground }, style]} {...props}>
			{children}
		</Text>
	);
}
