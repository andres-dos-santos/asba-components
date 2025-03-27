import { View, type ViewProps } from 'react-native'

export type BoxProps = ViewProps

export function Box(props: BoxProps) {
	return <View {...props}>{props.children}</View>
}
