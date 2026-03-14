import { ScrollView, type ScrollViewProps } from 'react-native'

type Props = ScrollViewProps

export function Scroll({ children, ...props }: Props) {
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
