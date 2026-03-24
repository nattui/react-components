# @nattstack/ui

A collection of reusable React components built with Base UI, TypeScript, and CSS Modules.

## Links

- Website: [https://nui-web.vercel.app](https://nui-web.vercel.app)
- Storybook: [https://ui-storybook.vercel.app](https://ui-storybook.vercel.app)

## Installation

```bash
bun add @nattstack/ui
```

## Usage

```css
/* global.css */

@import "tailwindcss";
@import "@nattstack/ui/tailwind-colors";
@import "@nattstack/ui/tailwind-tokenless-10";
```

```tsx
// app.tsx

import { Button } from "@nattstack/ui"

function App() {
  return (
    <body className="color-gray-slate color-primary-blue">
      <Button>Click me</Button>
    </body>
  )
}
```
