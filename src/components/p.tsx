import { Text, useColorScheme, type TextProps } from 'react-native'
import { colors } from '../constants/colors'

export type PProps = TextProps

export function P({ children, style, ...props }: PProps) {
  const colorScheme = useColorScheme()

  return (
    <Text
      style={[
        { color: colorScheme === 'dark' ? colors.white : colors.black },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}
