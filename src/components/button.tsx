import {
	Text,
	type TextProps,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

export function Button({ children, ...props }: TouchableOpacityProps) {
	return (
		<TouchableOpacity activeOpacity={0.9} {...props}>
			{children}
		</TouchableOpacity>
	);
}

export function ButtonTitle({ children, ...props }: TextProps) {
	return <Text {...props}>{children}</Text>;
}
