import { useColorScheme as useReactNativeColorScheme } from "react-native";

import { colors } from "../constants/colors";

export function useColorScheme() {
	const colorScheme =
		useReactNativeColorScheme() === "dark" ? colors.dark : colors.light;

	return colorScheme;
}
