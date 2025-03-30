import type { ImageStyle, TextStyle, ViewStyle } from 'react-native'

type Any = any

const tokens = {
	colors: {
		red: {
			500: '#c53030',
		},
	},
	borderRadius: {
		xs: '4',
		sm: '6',
	},
	spacings: {
		1: '2',
		2: '4',
		3: '6',
		4: '8',
	},
} as const

export namespace Styles {
	type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }
	type StyleFunction = (theme: typeof tokens) => {
		[P in keyof Any]: ViewStyle | TextStyle | ImageStyle
	}

	export function create<T extends NamedStyles<T>>(
		styles: (T & NamedStyles<Any>) | StyleFunction,
	): T {
		if (typeof styles === 'function') {
			return styles(tokens) as T & NamedStyles<T>
		}

		return styles as T & NamedStyles<T>
	}
}
