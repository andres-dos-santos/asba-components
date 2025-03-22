import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

export function Button(props: TouchableOpacityProps) {
	return (
		<TouchableOpacity activeOpacity={0.9} {...props}>
			{props.children}
		</TouchableOpacity>
	);
}
