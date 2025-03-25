import { expect, test } from 'vitest'
import { render } from '@testing-library/react-native'

import { Box } from '../box'
import { P } from '../p'

test('<Box />', () => {
	const view = render(
		<Box testID="box" style={{ backgroundColor: 'red' }}>
			<P>Hello</P>
		</Box>,
	)

	expect(view.getByText('Hello')).toBeTruthy()
	expect(view.getByTestId('box')).toHaveStyle({ backgroundColor: 'red' })
})
