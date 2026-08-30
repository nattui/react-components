# @nattstack/ui

A collection of reusable React components built with Base UI and StyleX.

## Links

- Website: [https://ui.natt.so](https://ui.natt.so)

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
@import "@nattstack/ui/components";
```

```tsx
// app.tsx

import { Button } from "@nattstack/ui"

function App() {
  return (
    <html data-color-theme="light" data-color-neutral="slate" data-color-accent="blue">
      <head>...</head>
      <body>
        <Button label="Click me" />
      </body>
    </html>
  )
}
```
