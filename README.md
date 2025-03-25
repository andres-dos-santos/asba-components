A package designed to accelerate development with React Native. It provides some spacing tokens, colors (default, but you can add your own), font sizes, and border radius values.

The idea was to create a package with no styling, delivering only a skeleton with various components.

This package is fully tested and written in TypeScript, so reliability is high.

## Available Components

- **P** - A simple paragraph component.
- **Box** - A `View`, similar to an HTML `div`.
- **Row** - A `View` with horizontal layout.
- **Button** - A button, similar to `TouchableOpacity`.
  - **ButtonTitle** - The title of the button.
- **Input** - A wrapper for input fields.
  - **InputLabel** - The label for the input.
  - **InputField** - The text field for user input.

## Additional Features

Includes the `useColorScheme` hook, which allows integration with light and dark themes using your custom color palette.

To make it easier, you can create a new hook like this:

```tsx
import { colors } from 'my-color-palette'; // must have 'dark' and 'light' as keys.

export function useMyHook() {
  return useColorScheme(colors);
}
```