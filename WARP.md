# Web.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository overview

- This repository is named `JawadKT.github.io` and is intended as a personal website.
- As of now, it only contains a minimal `README.md` with the description "personal web" and no actual site or application code.
- There are currently no additional documentation or agent-instruction files such as `CLAUDE.md`, `.cursorrules`, `.cursor/rules/`, or `.github/copilot-instructions.md`.

## Tooling and commands

There is no project-specific tooling configured yet:

- No `package.json`, `Gemfile`, `Makefile`, or other build configuration is present.
- No build, lint, test, or dev-server commands are defined in the repository.

Until tooling is added, development here is essentially editing static content (e.g., adding HTML/CSS/JS files or introducing a framework). Once you introduce a toolchain (for example, a static site generator or frontend framework), update this section with:

- How to install dependencies.
- How to run the dev server.
- How to build the site for production.
- How to run any tests and how to run a single test.

## Architecture and structure

- Currently there is no site or application structure; the repository contains only `README.md`.
- As you add code (for example, static HTML pages, CSS/JS assets, or a framework-based app), organize it into clear top-level directories (such as `src/`, `public/`, or `assets/`) and document the high-level layout here.

When a real code or content structure exists, future updates to this section should describe:

- The main entry point(s) for the site (e.g., `index.html` or `src/main.tsx`).
- How routing is handled (static pages vs. framework router).
- Where shared components, layouts, or styles live.
- Any important conventions specific to this repo (naming, folder layout, etc.).
