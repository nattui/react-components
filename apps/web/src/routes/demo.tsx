import { Column } from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/demo")({
  component: function RouteComponent() {
    // const BUTTON_TEXT = "Get started"

    return (
      <Column className="size-[600px] items-center justify-center gap-16">
        {/* <Button
          className="
            scale-200 [--color-primary:var(--color-primitive-crimson-9)]
          "
          label={BUTTON_TEXT}
        /> */}
        {/* <Button className="[--color-primary:var(--color-primitive-orange-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-tomato-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-red-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-ruby-9)]" label={BUTTON_TEXT} />
        <Button
          className="[--color-primary:var(--color-primitive-crimson-9)]"
          label={BUTTON_TEXT}
        />
        <Button className="[--color-primary:var(--color-primitive-pink-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-plum-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-purple-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-violet-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-iris-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-indigo-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-blue-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-cyan-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-teal-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-jade-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-green-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-grass-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-bronze-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-gold-9)]" label={BUTTON_TEXT} />
        <Button className="[--color-primary:var(--color-primitive-brown-9)]" label={BUTTON_TEXT} /> */}
      </Column>
    )
  },
})
