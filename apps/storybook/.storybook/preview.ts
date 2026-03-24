import type { Preview } from "@storybook/react-vite"
import "@nattstack/ui/tailwind-colors"

const preview: Preview = {
  decorators: [
    (story) => {
      // These classes define --color-gray-* and --color-primary-* aliases.
      document.body.classList.add("color-gray-slate", "color-primary-blue")

      return story()
    },
  ],
}

export default preview
