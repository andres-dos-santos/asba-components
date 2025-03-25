import { createContext, useContext, useState, type ReactNode } from "react";
import { colors as defaultColors } from "../constants/colors";
import { useColorScheme as useReactNativeColorScheme } from "react-native";

interface ColorScheme {
	dark: {
		background: "";
	};
	light: {
		background: "";
	};
}

export const ThemeContext = createContext({} as { color: {} });

export function ThemeProvider({
	children,
	colors,
}: { children: ReactNode; colors: ColorScheme }) {
	const color =
		useReactNativeColorScheme() === "dark" ? colors.dark : colors.light;

	return (
		<ThemeContext.Provider value={{ color }}>{children}</ThemeContext.Provider>
	);
}

export function useColorScheme() {
	const { color } = useContext(ThemeContext);

	return { color };
}
