# @asba/components

A base component library for React Native focused on development speed.
It provides a simple unstyled structure, reusable components, and a light/dark theme system.

## Installation

```bash
npm install @asba/components
```

or

```bash
yarn add @asba/components
```

## Quick start

```tsx
import { Box, P, Button, ButtonTitle } from '@asba/components'

export function Example() {
  return (
    <Box style={{ padding: 16 }}>
      <P>Hello, world</P>

      <Button onPress={() => console.log('pressed')}>
        <ButtonTitle style={{ fontWeight: '600' }}>Continue</ButtonTitle>
      </Button>
    </Box>
  )
}
```

## Components

### `Box`
`View` wrapper (similar to a `div` in React for web).

```tsx
import { Box } from '@asba/components'

<Box style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
  {/* content */}
</Box>
```

### `Row`
`View` with horizontal layout (`flexDirection: 'row'`) and centered item alignment.

```tsx
import { Row, P } from '@asba/components'

<Row style={{ justifyContent: 'space-between', padding: 12 }}>
  <P>Product</P>
  <P>$59.90</P>
</Row>
```

### `P`
Base text component. Default color changes according to the system color scheme (light/dark).

```tsx
import { P } from '@asba/components'

<P style={{ fontSize: 16 }}>Main screen text</P>
```

### `Button` and `ButtonTitle`
`Button` is a `TouchableOpacity` wrapper.
`ButtonTitle` is a text component (`P`) intended for button labels.

```tsx
import { Button, ButtonTitle } from '@asba/components'

<Button onPress={() => {}} style={{ padding: 12, backgroundColor: '#222' }}>
  <ButtonTitle style={{ color: '#fff', textAlign: 'center' }}>Save</ButtonTitle>
</Button>
```

### `Input`, `InputLabel`, and `InputField`
Set of components for building form fields.

- `Input`: field container (`Box` wrapper).
- `InputLabel`: field label with optional `error` support.
- `InputField`: `TextInput` wrapper with `onFocused` callback.

```tsx
import { Input, InputField, InputLabel } from '@asba/components'

<Input style={{ gap: 6 }}>
  <InputLabel error="Required field">Email</InputLabel>
  <InputField
    placeholder="Enter your email"
    autoCapitalize="none"
    keyboardType="email-address"
    onFocused={(focused) => console.log('focused:', focused)}
    style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10 }}
  />
</Input>
```

### `Scroll`
`ScrollView` wrapper with vertical/horizontal indicators disabled by default.

```tsx
import { Scroll, P } from '@asba/components'

<Scroll contentContainerStyle={{ padding: 16 }}>
  <P>Long content...</P>
</Scroll>
```

### `List`
`FlashList` wrapper (`@shopify/flash-list`).

```tsx
import { List, P } from '@asba/components'

const items = [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }]

<List
  data={items}
  estimatedItemSize={44}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <P>{item.name}</P>}
/>
```

## Exported tokens

You can also use the ready-to-use design tokens from the library:

- `spacings`
- `fontSizes`
- `borderRadius`

```tsx
import { Box, P, borderRadius, fontSizes, spacings } from '@asba/components'

<Box style={{ padding: spacings.md, borderRadius: borderRadius.lg }}>
  <P style={{ fontSize: fontSizes.lg }}>Title</P>
</Box>
```

## Jest setup

If you use Jest with React Native/Expo, add `@asba/components` to `transformIgnorePatterns`:

```json
"transformIgnorePatterns": [
  "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|@asba/components)"
]
```
