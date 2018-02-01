# React To Angular

Library for embedding React components in Angular.

Provides a component that takes a React component and a props object as input.

## Usage

```javascript
// app.component.tsx
import * as React from 'react';

@Component({
  selector: "app-component",
  template: `
    <r2a-react-wrapper
      [props]="myProps"
      [component]="myComponent"
    >
    </r2a-react-wrapper>
  `,
))
export class MyComponent {
  // be sure to enable .tsx parsing; if not, use React.createElement()
  myComponent: any = props => <div>{props.value}</div>;
  myProps: any = {
    value: 'I am a React component!',
  };
}
```

See `src/app/app.component.ts` for usage examples.

## Example

```bash
yarn install
yarn start
```

## Building

This project uses `ng-packagr` to bundle the module. `yarn build` will instead bundle the entire repository, including the demo app.

```bash
yarn packagr
```

## Release

For now, it is manual. PRs welcome to implement an actual release process.

1. Increment version number in `package.json`
2. `yarn packagr && cd dist && npm publish`

## License

MIT
