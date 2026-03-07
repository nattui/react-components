import type { Preview } from "@storybook/react-vite"
import "@nattui/tailwind-colors/src/index.css"

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
