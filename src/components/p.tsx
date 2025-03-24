import { Text, type TextProps } from "react-native";

import { useColorScheme } from "../hooks/use-color-scheme";

export function P({ children, style, ...props }: TextProps) {
	const colorScheme = useColorScheme();

	return (
		<Text style={[{ color: colorScheme.foreground }, style]} {...props}>
			{children}
		</Text>
	);
}
