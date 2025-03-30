import {
	StyleSheet,
	type ImageStyle,
	type TextStyle,
	type ViewStyle,
} from 'react-native'

const Props = {
	colors: {},
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
}

export namespace Styles {
	type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	export function create<T extends NamedStyles<T> | NamedStyles<any>>(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		styles: T & NamedStyles<any>,
	): T
}

const s = Styles.create({
	container: {},
})
