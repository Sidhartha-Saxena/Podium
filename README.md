# Podium

One place to run and direct your coding agents, with no product analytics.

> **Podium is an unofficial fork based on the T3 Code source code.** It is not affiliated with,
> endorsed by, or maintained by T3 Tools, Inc. It is not an official version of T3 Code. For the
> official app, see [github.com/pingdotgg/t3code](https://github.com/pingdotgg/t3code).

Podium runs the coding agents on your machine and gives them one interface. It works with Claude
Code, Codex, Cursor, OpenCode, Grok Build, Antigravity, Kiro, Pi, Muse Code, fx, and any
[ACP](./docs/user/providers-acp.md) agent that is installed and signed in on your computer.

## How Podium differs from upstream

- **No product analytics.** The server's analytics service is a no-op: it buffers nothing and makes
  no network requests. The PostHog key and the upstream ingest endpoint are removed from the source.
- **No relay tracing.** Local builds are not given a tracing endpoint or token, so the relay client
  has nowhere to send traces.
- **Based on a release.** This branch follows upstream release `v0.1.11`, not the nightly `main`, so
  its database stays compatible with that release.

Everything else is upstream code. The docs in [`docs/`](./docs/README.md) are upstream's and still
use the original product name.

## Build from source

Podium has no published builds. Build it yourself:

1. Install [Vite+](https://viteplus.dev/guide/), which provides the pinned Node version:

   ```sh
   curl -fsSL https://vite.plus | bash
   ```

2. Install the dependencies and start a development build:

   ```sh
   vp i
   vp run dev:desktop
   ```

3. To build a Linux AppImage, install Rust, `libsecret-1-dev` and ImageMagick, then run:

   ```sh
   vp run dist:desktop:linux
   ```

   The unsigned build is written to `release/`. The
   [development runbook](./docs/operations/development.md#first-checkout) covers macOS, Windows,
   and the full list of prerequisites.

Podium needs at least one agent that is installed and signed in. For example, install
[Claude Code](https://claude.com/product/claude-code) and run `claude auth login`, or install
[Codex CLI](https://developers.openai.com/codex/cli) and run `codex login`.
[Provider setup](./docs/user/install.md#providers) has the steps for each agent.

## Your data

A packaged build stores its data in `~/.t3/userdata`, the same folder as the official app. Quit the
official app before starting Podium, and back up that folder first. Development builds use
`~/.t3/dev` instead.

## Documentation

- [Remote access from a phone or another machine](./docs/user/remote-access.md)
- [Permission modes](./docs/user/permission-modes.md)
- [Source control](./docs/user/source-control.md)
- [Connect outside agents over MCP](./docs/user/outside-agents.md)
- [Architecture overview](./docs/internals/overview.md)

[All docs](./docs/README.md) has the full list.

## Trademarks

"T3 Code", "T3 Connect", "T3 Tools", the T3 wordmark, logos and app icons are trademarks of
T3 Tools, Inc. Podium does not use them as its name or branding, and references to them here are
factual. See upstream's
[trademark and branding policy](https://github.com/pingdotgg/t3code/blob/main/TRADEMARK.md).

Report bugs in Podium to this repository, not to the upstream project.

## License

[MIT](./LICENSE). Copyright (c) 2026 T3 Tools Inc. for the upstream source code.
