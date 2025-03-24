A set of reusable components for React Native applications. This package was created to simplify the development of modern and consistent interfaces.

## Installation

Install the package using npm or yarn:

```bash
npm install @asba/components
# or
yarn add @asba/components
```

## Available Components

### P
A simple and unstyled text component.

#### Usage:
```tsx
import { P } from '@asba/components';

const App = () => (
  <P style={{ color: 'blue' }}>
    This is a styled paragraph.
  </P>
);
```

### Box
A generic container for layouts.

#### Usage:
```tsx
import { Box } from '@asba/components';

const App = () => (
  <Box style={{ padding: 16, backgroundColor: 'lightgray' }}>
    <P>Content inside the Box</P>
  </Box>
);
```

### Row
A container for horizontal layouts.

#### Usage:
```tsx
import { Row } from '@asba/components';

const App = () => (
  <Row style={{ justifyContent: 'space-between', padding: 16 }}>
    <P>Item 1</P>
    <P>Item 2</P>
  </Row>
);
```

### Button
An unstyled button for user actions.

#### Usage:
```tsx
import { Button, ButtonTitle } from '@asba/components';

const App = () => (
  <Button onPress={() => alert('Button pressed!')} style={{ backgroundColor: 'blue' }}>
    <ButtonTitle>Click Here</ButtonTitle>
  </Button>
);
```

## Customization

All components accept standard React Native properties, such as `style`, allowing full customization of their appearance and behavior.

## Contribution

Contributions are welcome! Feel free to open issues or submit PRs to improve this package.

1. Fork the repository.
2. Create a branch for your feature or fix: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'My new feature'`.
4. Open a pull request.

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more details.

