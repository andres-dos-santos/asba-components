import { FlashList, type FlashListProps } from '@shopify/flash-list'

type ListProps<I> = FlashListProps<I>

export function List<I>({ data, renderItem, ...props }: ListProps<I>) {
  return <FlashList data={data} renderItem={renderItem} {...props} />
}
