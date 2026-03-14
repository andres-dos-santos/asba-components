import { ScrollView, type ScrollViewProps } from 'react-native'

export type ScrollProps = ScrollViewProps

export function Scroll({ children, ...props }: ScrollProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
    >
      {children}
    </ScrollView>
  )
}
