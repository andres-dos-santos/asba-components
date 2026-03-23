import { Text, useColorScheme, type TextProps } from 'react-native'

import { colors } from '../constants/colors'
import { PREFER_THEME_COLOR } from '../constants/prefer-theme-color'

export type PProps = TextProps

export function P({ children, style, ...props }: PProps) {
  const colorScheme = useColorScheme()

  return (
    <Text
      style={[
        {
          color: colors[PREFER_THEME_COLOR][colorScheme === 'dark' ? 100 : 900],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}
