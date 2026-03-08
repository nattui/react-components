import { stdin } from "bun"

interface StopHookInput {
  status?: "aborted" | "completed" | "error"
}

interface StopHookOutput {
  followup_message?: string
}

async function main() {
  const payload = await parseInput()
  const response: StopHookOutput = {}

  if (payload.status !== "completed") {
    writeResponse(response)
    return
  }

  const result = await runCheckFix()
  if (result.exitCode === 0) {
    writeResponse(response)
    return
  }

  const combinedOutput = [result.stdout, result.stderr].filter(Boolean).join("\n\n")

  response.followup_message = [
    "`bun run check:fix` still reports errors.",
    "Fix the remaining issues and rerun `bun run check:fix` until it succeeds.",
    "",
    "Latest check output:",
    "```text",
    combinedOutput || "(no output captured)",
    "```",
  ].join("\n")

  writeResponse(response)
}

async function parseInput(): Promise<StopHookInput> {
  const raw = await stdin.text()
  if (!raw.trim()) {
    return {}
  }

  try {
    return JSON.parse(raw) as StopHookInput
  } catch {
    return {}
  }
}

async function runCheckFix() {
  const proc = Bun.spawn(["bun", "run", "check:fix"], {
    cwd: process.cwd(),
    env: process.env,
    stderr: "pipe",
    stdout: "pipe",
  })

  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ])

  return {
    exitCode,
    stderr: stderr.trim(),
    stdout: stdout.trim(),
  }
}

function writeResponse(response: StopHookOutput): void {
  process.stdout.write(`${JSON.stringify(response)}\n`)
}

try {
  await main()
} catch (error) {
  console.error("[check-fix-stop] failed", error)
  process.stdout.write("{}\n")
}
