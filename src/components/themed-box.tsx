import { useColorScheme } from 'react-native'

import { PREFER_THEME_COLOR } from '../constants/prefer-theme-color'
import { colors } from '../constants/colors'

import { Box, type BoxProps } from './box'

export function ThemedBox({ style, children, ...props }: BoxProps) {
  const colorScheme = useColorScheme()

  return (
    <Box
      {...props}
      style={[
        {
          backgroundColor:
            colors[PREFER_THEME_COLOR][colorScheme === 'dark' ? 900 : 100],
        },
        style,
      ]}
    >
      {children}
    </Box>
  )
}
