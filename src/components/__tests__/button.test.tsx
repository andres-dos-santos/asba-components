import { expect, test, vitest } from 'vitest'
import { fireEvent, render } from '@testing-library/react-native'

import { Button, ButtonTitle } from '../button'

test('<Button />', () => {
	const onPress = vitest.fn()

	const view = render(<Button testID="button" onPress={onPress} />)

	const button = view.getByTestId('button')

	fireEvent.press(button)

	expect(onPress).toBeTruthy()
})

test('<ButtonTitle />', () => {
	const view = render(<ButtonTitle style={{ color: 'red' }}>Hello</ButtonTitle>)

	expect(view.getByText('Hello')).toBeTruthy()
	expect(view.getByText('Hello')).toHaveStyle({ color: 'red' })
})
