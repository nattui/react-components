# @nattui/react-components

A collection of reusable React components built with TypeScript and CSS Modules.

## Installation

```bash
pnpm add @nattui/react-components
```

## Usage

```tsx
import { Button } from "@nattui/react-components"

function App() {
  return <Button onClick={() => console.log("Clicked!")}>Click me</Button>
}
```

## Development

### Prerequisites

- Node.js (latest LTS recommended)
- pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/nattui/react-components.git
cd react-components

# Install dependencies
pnpm install
```

### Available Scripts

```bash
# Build the library
pnpm build

# Development mode with watch
pnpm dev

# Run linting and formatting checks
pnpm check

# Fix linting and formatting issues
pnpm check:fix

# Check formatting only
pnpm check:format

# Fix formatting issues
pnpm check:format:fix

# Check linting only
pnpm check:lint

# Fix linting issues
pnpm check:lint:fix

# Update dependencies
pnpm update
```

### Project Structure

```
src/
├── index.ts          # Main export file
├── button.tsx        # Button component
├── button.module.css # Button styles
└── global.d.ts       # TypeScript declarations
```

### Build Configuration

The project uses [tsup](https://tsup.egoist.dev/) for building:

- **Output formats:** ESM and CommonJS
- **TypeScript declarations:** Generated automatically
- **CSS handling:** CSS files are copied to the dist folder
- **Tree shaking:** Enabled for optimal bundle size
- **Source maps:** Generated for debugging
