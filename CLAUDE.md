# FrankenSPO.MiddleTier — instructions for Claude and other agents

FrankenSPO.MiddleTier is a **planned** companion of [FrankenSPO](https://github.com/skvorc-dev/FrankenSPO): remote ObjectSpace and a versioned persistence protocol for managed and native-language clients.
Nothing is implemented. This repository is **public** and MIT-licensed.

## Read first

1. [AGENTS.md](AGENTS.md) — the public rulebook.
2. [docs/READINESS.md](docs/READINESS.md) and issue #1 — the M0 gate. **No runtime code, stubs or demos before M0 is met.**
3. FrankenSPO's `CLAUDE.md` and `.claude/docs/DECISIONS.md` — family-wide conventions apply here too.

## Conventions (same as FrankenSPO)

- C# / .NET 10 once code starts; Conventional Commits (`feat:`, `fix:`, `docs:`, `ci:` …) referencing an issue.
- Branches: owner and main agent `feature/`, `fix/`, `docs/<issue>-<desc>`; worker agents
  `task/<Agent>_<TaskId>_<yyyyMMddTHHmm>` in their own worktree, only on tasks the main agent assigned.
- `main` is protected: PR with green CI, squash merge; only the owner and the main agent merge. Never force-push.
- Labels `type:*` and `priority:P0–P3`; milestone **M0 — Development Readiness**; board
  <https://github.com/orgs/skvorc-dev/projects/1>.
- No secrets, private project names, unannounced company details or machine-local paths in any committed file,
  issue, PR or commit message.

## When work starts

This repository gets its own main agent, plan (`.claude/plan/`), decisions and `GUARDRAILS.md` when the owner
starts it as a separate project, modelled on FrankenSPO. Until then the FrankenSPO main agent only keeps
labels, milestone, board and dependency updates in order.
