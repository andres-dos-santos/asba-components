import { expect, test } from 'vitest'
import { render } from '@testing-library/react-native'

import { P } from '../p'

test('<P />', () => {
	const view = render(<P style={{ color: 'red' }}>Hello</P>)

	expect(view.getByText('Hello')).toBeTruthy()
	expect(view.getByText('Hello')).toHaveStyle({ color: 'red' })
})
