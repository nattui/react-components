import { Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/demo")({
  component: function RouteComponent() {
    // const BUTTON_TEXT = "Get started"

    return (
      <Column className="size-[600px] items-center justify-center gap-16">
        {/* <Button
          className="
            scale-200 [--color-accent:var(--color-accent-crimson-9)]
          "
          label={BUTTON_TEXT}
        /> */}
        {/* <Button className="[--color-accent:var(--color-accent-orange-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-tomato-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-red-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-ruby-9)]" label={BUTTON_TEXT} />
        <Button
          className="[--color-accent:var(--color-accent-crimson-9)]"
          label={BUTTON_TEXT}
        />
        <Button className="[--color-accent:var(--color-accent-pink-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-plum-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-purple-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-violet-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-iris-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-indigo-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-blue-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-cyan-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-teal-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-jade-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-green-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-grass-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-bronze-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-gold-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-accent:var(--color-accent-brown-9)]" label={BUTTON_TEXT} /> */}
      </Column>
    )
  },
})
