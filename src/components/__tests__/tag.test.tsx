import { expect, test } from 'vitest'
import { render } from '@testing-library/react-native'

import { Tag } from '../tag'

const COLOR = '#1C1C1C'

test('<Tag />', () => {
	const view = render(
		<Tag color={COLOR} style={{ fontFamily: 'inter' }}>
			Hello
		</Tag>,
	)

	expect(view.getByText('Hello')).toBeTruthy()
	expect(view.getByText('Hello')).toHaveStyle({
		fontFamily: 'inter',
		color: COLOR,
	})
})
