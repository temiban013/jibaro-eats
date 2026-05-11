# AGENTS.md — Jibaro Eats

<!-- BEGIN:nextjs-agent-rules -->
When writing Next.js code, consult the version-matched docs at
`node_modules/next/dist/docs/` BEFORE writing or modifying code.
<!-- END:nextjs-agent-rules -->

## Quick Facts
- Stack: Next.js 16.2.6, React 19, TypeScript, Tailwind CSS 3, pnpm
- Entry: `src/app/page.tsx` or `app/page.tsx`
- Run: `pnpm build && pnpm lint`
- Type: Food/restaurant web app

## Project-Specific Rules

**Validation (MANDATORY)**
- `pnpm build` must pass
- `pnpm lint` must pass

**Session Management**
- Use MCP: `start_billing()` / `stop_billing()` for time tracking
- Use `context_preflight({ task_description: "..." })` at session start

## Pointers
- Status: `.project/STATUS.md`
