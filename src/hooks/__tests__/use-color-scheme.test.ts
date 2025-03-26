import { renderHook } from '@testing-library/react-native'
import { expect, test } from 'vitest'

import { useColorScheme } from '../use-color-scheme'
import { colors } from '../../constants/colors'

test('should start with the initial value', () => {
	const { result } = renderHook(() => useColorScheme(colors))

	expect(result.current.background).toBe(colors.light.background)
})
