import { Text, type TextProps } from "react-native";

import { useColorScheme } from "../hooks/use-color-scheme";

export function P({ children, style, ...props }: TextProps) {
	const colorScheme = useColorScheme();

	return (
		<Text style={[style, { color: colorScheme.foreground }]} {...props}>
			{children}
		</Text>
	);
}
