import { Text, type TextProps } from "react-native";

export function P({ children, ...props }: TextProps) {
	return <Text {...props}>{children}</Text>;
}
