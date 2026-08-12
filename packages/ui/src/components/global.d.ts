declare module "*stylex.css"

declare module "*.module.css" {
  const classes: Record<string, string>
  export default classes
}
