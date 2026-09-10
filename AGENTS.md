# Global Claude Rules

## Approach

- **Change scope.** Change only what was requested. Don't "improve" adjacent code,
  comments, or formatting; match the existing style. Delete code your own change makes
  unused, never leave it commented out. Point out pre-existing dead code only; don't
  delete, split, or refactor it unless asked.
- **Implementation size.** Don't add unrequested features, abstractions, or
  configurability. Extract a helper only when it's used in 3+ places; otherwise inline
  it. Don't write error handling for cases that can't happen.
- **Uncertainty.** When more than one interpretation is possible, present the options
  instead of silently picking one.

## Language

Default to the user's language for everything interactive — chat replies, plan-mode
proposals, clarifying questions, and any other back-and-forth during the session.

Switch to English only for durable artifacts: things other people or tools will read
after the session ends — in-code comments, console/log/error output, AI-readable
instruction files, and reader-facing docs (README and the like). Scratch notes and other
throwaway dev artifacts stay in the user's language.

## Testing

- Write tests before or alongside implementation — they are your success criteria.
- Test observable outcomes and edge cases, not implementation details.
- Each test is fully self-contained; no shared mutable state between tests.

## Commits

Format — plain prose, no prefixes or labels (`feat:`, `fix:`, and the like):

```
<summary: imperative mood, ≤70 chars, no trailing period>

<motivation: one sentence, only when not evident from the diff>

- <change bullets: only for 2+ distinct changes>
```

- Never commit secrets (`*.key`, `*.pem`, `credentials*`).
- Never use `--no-verify`. Use `--amend` only when explicitly asked; default to a new
  commit.
