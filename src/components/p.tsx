import { Text, type TextProps } from "react-native";

export function P(props: TextProps) {
	return <Text {...props}>{props.children}</Text>;
}
