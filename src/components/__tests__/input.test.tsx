import { expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/react-native'

import { Input, InputField, InputLabel } from '../input'
import { P } from '../p'

import { colors } from '../../constants/colors'

test('<Input />', () => {
	const view = render(
		<Input>
			<P testID="input">Hello</P>
		</Input>,
	)

	const input = view.getByTestId('input')

	expect(input).toBeTruthy()
})

test('<InputLabel />', () => {
	const view = render(<InputLabel>Hello</InputLabel>)

	const inputLabel = view.getByText('Hello')

	expect(inputLabel).toBeTruthy()
})
