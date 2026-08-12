---
name: nattui-react-components
description: Use @nattstack/ui React components when building or editing UI, forms, menus, tabs, tooltips, dialogs, layout primitives, and shared controls in this project.
---

# Nattstack UI Components

## Instructions

This project uses `@nattstack/ui` as its shared React component library. Prefer these components for common UI instead of recreating local buttons, inputs, labels, menus, tabs, tooltips, or flex layout wrappers.

Import components directly from `@nattstack/ui`:

```tsx
import { Button, ButtonLink, Column, Input, Label, Row, Spacer } from "@nattstack/ui"
```

Use the library's semantic props before duplicating state or accessibility behavior with raw elements:

- Use `Button` for actions. Prefer `loading`, `disabled`, `fullWidth`, `rounded`, `size`, `variant`, `iconStart`, `iconEnd`, and `label`.
- Use `IconButton` for icon-only actions. Prefer `icon`, `loading`, `disabled`, `rounded`, `size`, and `variant`.
- Use `ButtonLink` for button-styled navigation. With TanStack Router, pass `as={Link}` and `to`.
- Use `Input`, `Textarea`, and `Label` for form controls. Prefer `invalid`, `valid`, `active`, `rounded`, `size`, and native `disabled`, `required`, and `readOnly`.
- Use `Row`, `Column`, and `Spacer` for simple flex layout and spacing.
- Use `Select` or `Combobox` with their `Trigger`, `Content`, `List`, `Item`, and `Value` parts for pickers.
- Use `Menu`, `MenuTrigger`, `MenuContent`, `MenuItem`, and `MenuSeparator` for dropdown menus.
- Use `Tooltip`, `TooltipTrigger`, `TooltipPopup`, and `TooltipProvider` for tooltips.
- Use `Tabs`, `TabsPanel`, and the `TabsSegmented`, `TabsPill`, or `TabsUnderline` variants for tabbed UI.
- Use `Checkbox`, `Switch`, `ToggleGroup`, `DialogResponsive`, and `OTPField` when those patterns are needed. Prefer `OTPField`'s `masked` prop over wiring `mask` yourself.

When a non-button component wraps a router link or another element, follow the existing `render={<Link ... />}` pattern used by the Base UI-backed components.

Keep styling aligned with the local Tailwind tokenless skill: compose `@nattstack/ui` components with numeric token classes such as `h-36`, `px-8`, `gap-12`, `rounded-8`, and `text-14`.
