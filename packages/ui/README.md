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

/* Required: the compiled component styles */
@import "@nattstack/ui/components";
```

```tsx
// app.tsx

import { Button } from "@nattstack/ui"

function App() {
  return (
    <html className="color-gray-slate color-primary-blue">
      <head>...</head>
      <body>
        <Button label="Click me" />
      </body>
    </html>
  )
}
```
