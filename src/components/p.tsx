import { Text, type TextProps } from "react-native";

export function P({ children, style, ...props }: TextProps) {
	return (
		<Text style={style} {...props}>
			{children}
		</Text>
	);
}
