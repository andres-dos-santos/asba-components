import { View, type ViewProps } from "react-native";

export function Box({ children, ...props }: ViewProps) {
	return <View {...props}>{children}</View>;
}
