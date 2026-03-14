import {
  StyleSheet,
  TextInput,
  useColorScheme,
  type TextInputProps,
} from 'react-native'
import { useCallback, useState } from 'react'

import { Box, type BoxProps } from './box'
import { P, type PProps } from './p'

import { colors } from '../constants/colors'

export type InputProps = BoxProps

export function Input({ children, ...props }: InputProps) {
  return <Box {...props}>{children}</Box>
}

export type InputFieldProps = TextInputProps & {
  onFocused?: (value: boolean) => void
}

export function InputField({
  style,
  children,
  onFocused = undefined,
  ...props
}: InputFieldProps) {
  const [, setFocused] = useState(false)

  const onChangeFocus = useCallback(
    (focused: boolean) => {
      setFocused(focused)

      if (typeof onFocused !== 'undefined') {
        onFocused(focused)
      }
    },
    [onFocused],
  )

  return (
    <TextInput
      onFocus={() => onChangeFocus(true)}
      onBlur={() => onChangeFocus(false)}
      {...props}
    />
  )
}

export type InputLabelProps = PProps & {
  error?: string
}

export function InputLabel({
  children,
  error = undefined,
  ...props
}: InputLabelProps) {
  return (
    <P {...props}>
      {children}
      {error && <P style={[s.error, props.style]}>{error}</P>}
    </P>
  )
}

const s = StyleSheet.create({
  error: { color: colors.red[500] },
})
