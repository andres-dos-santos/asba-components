import { render } from '@testing-library/react-native'
import React from 'react'

import { P } from '../p'

test('should be render', () => {
	const { getByText } = render(<P>Hello</P>)

	expect(getByText('Hello')).toBeTruthy()
})
