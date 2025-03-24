import { StyleSheet, View, type ViewProps } from "react-native";

export function Row({ style, children, ...props }: ViewProps) {
	return (
		<View style={[style, s.container]} {...props}>
			{children}
		</View>
	);
}

const s = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
});
