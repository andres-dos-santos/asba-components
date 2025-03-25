import { expect, test } from 'vitest'
import { render } from '@testing-library/react-native'

import { Row } from '../row'
import { P } from '../p'

test('<Row />', () => {
	const view = render(
		<Row testID="row">
			<P>Hello</P>
		</Row>,
	)

	expect(view.getByText('Hello')).toBeTruthy()
	expect(view.getByTestId('row')).toHaveStyle({ flexDirection: 'row' })
})
