import { useColorScheme as useReactNativeColorScheme } from "react-native";

export function useColorScheme() {
	const colorScheme = useReactNativeColorScheme();

	return colorScheme ?? "light";
}
