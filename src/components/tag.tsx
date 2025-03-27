import { StyleSheet, type TextProps } from 'react-native'

import { Box } from './box'
import { P } from './p'

export type TagProps = TextProps & {
	color: string
}

export function Tag({ style, ...props }: TagProps) {
	return (
		<Box
			style={[
				s.container,
				{
					backgroundColor: props.color.concat('20'),
				},
			]}
		>
			<P
				style={[
					s.title,
					{
						color: props.color,
					},
					style,
				]}
				{...props}
			>
				{props.children}
			</P>
		</Box>
	)
}

const s = StyleSheet.create({
	container: {
		paddingVertical: 2,
		paddingHorizontal: 6,
		borderRadius: 4,
	},
	title: {
		fontSize: 10,
	},
})
