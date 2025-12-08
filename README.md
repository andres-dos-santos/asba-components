# @asba/components

A package designed to accelerate development with React Native. It provides spacing tokens, colors (default, but you can add your own), font sizes, and border radius values.

The idea was to create a package with no styling, delivering only a skeleton with various components.

This package is fully tested and written in TypeScript, so reliability is high.

## Available Components

- **P** - A simple paragraph component.
- **Box** - A `View`, similar to an HTML `div`.
- **Row** - A `View` with horizontal layout.
- **Tag** - A tag component, you can pass whatever color you want.
- **Button** - A button, similar to `TouchableOpacity`.
  - **ButtonTitle** - The title of the button.
- **Input** - A wrapper for input fields.
  - **InputLabel** - The label for the input.
  - **InputField** - The text field for user input.

## Theme System

The package includes a powerful theme system that allows you to customize colors, spacing, typography, and more.

### Creating Your Theme

Use the CLI to generate a theme template:

```bash
npx asba-create-theme
```

This will create a `constants/theme.ts` file with your custom theme object, ready to be used with the provider.

### Setting Up the Theme Provider

Wrap your app with the `ThemeProvider` and pass your custom theme:

```tsx
import { ThemeProvider } from '@asba/components';
import { theme } from './constants/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Using the Theme

Access your theme and change it dynamically using the `useTheme` hook:

```tsx
import { useTheme } from '@asba/components';

function MyComponent() {
  const { theme, changeTheme } = useTheme();

  return (
    <Box backgroundColor={theme.colors.primary}>
      <Button onPress={() => changeTheme('dark')}>
        <ButtonTitle>Switch to Dark</ButtonTitle>
      </Button>
    </Box>
  );
}
```

The `changeTheme` function accepts `'light'` or `'dark'` as parameters, or toggles automatically if no parameter is provided.

### Customizing Your Theme

Edit the generated `constants/theme.ts` file to add your own colors, spacing values, font sizes, and more. The theme object should include both `light` and `dark` mode configurations.

## Tests

Don't forget to add `@asba/components` to your Jest `transformIgnorePatterns` configuration:

```json
"transformIgnorePatterns": [
  "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|@asba/components)"
]
```