import { StyleSheet, type TextProps } from 'react-native'

import { Box } from './box'
import { P } from './p'

export function Tag(
	props: TextProps & {
		color: string
	},
) {
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
				]}
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
