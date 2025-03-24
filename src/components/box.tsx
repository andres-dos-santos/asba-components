import { View, type ViewProps } from "react-native";

export type BoxProps = ViewProps;

export function Box({ children, ...props }: BoxProps) {
	return <View {...props}>{children}</View>;
}
