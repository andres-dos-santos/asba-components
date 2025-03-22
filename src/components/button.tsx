import {
	Text,
	type TextProps,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

export function Button(props: TouchableOpacityProps) {
	return (
		<TouchableOpacity activeOpacity={0.9} {...props}>
			{props.children}
		</TouchableOpacity>
	);
}

export function ButtonTitle(props: TextProps) {
	return <Text {...props}>{props.children}</Text>;
}
