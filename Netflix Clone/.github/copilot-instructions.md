## Purpose

Short, actionable guidance for AI coding assistants working on this repository: a small static front-end "Netflix" clone.

## Big picture

- This is a simple static site: a single-page HTML front-end. The entry point is `index.html`, styling comes from `styles.css`, and media assets live under `Assets/` (notably `Assets/Images/` and `Assets/Videos/`).
- No build system, bundler, or server-side code is present in the repository as committed. Changes should be testable by opening the site in a browser or running a lightweight static server.

## Key files and patterns to reference

- `index.html` — primary layout. Example patterns to observe:
  - The `nav` currently contains an inline style: `style="background-color: red;"` and an `<img src="Assets/Images/logo.svg">` for the logo.
  - Buttons like `English` and `Sign In` are plain HTML buttons inside the nav.
- `styles.css` — global stylesheet. Notable rules:
  - `.main` uses a background image: `background-image: url("Assets/Images/bj.jpg")`, `background-size: cover`, `height: 80vh`.
  - `nav` uses `max-width: 80vw` and flex layout.
- `Assets/Images/` and `Assets/Videos/` — store binary media. Assets are referenced with project-relative paths (e.g., `Assets/Images/logo.svg`).

## Developer workflows (how to run & test locally)

- Quick manual test: open `index.html` in a browser to view changes.
- Recommended quick static servers (choose one):

PowerShell (if Python is available):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or, if Node is available:

```powershell
npx serve .
# or: npx http-server . -p 8000
```

These run a simple HTTP server from the project root so relative asset URLs resolve the same way as on hosted environments.

## Project-specific conventions and guidelines for edits

- Asset paths are project-relative and use forward slashes (e.g., `Assets/Images/bj.jpg`). Preserve that style when adding or referencing files.
- Keep CSS in `styles.css` for global styles. You will see at least one inline style in `index.html` (`nav`); refactor inline styles to `styles.css` only if doing so in a small, focused change with an accompanying HTML update.
- Preserve the existing HTML structure: `nav` → logo + buttons, and `.main` as the hero area with background image. Small layout changes are fine but avoid large restructures without an explicit request.
- Naming: existing files use lowercase/simple names (e.g., `bj.jpg`, `logo.svg`). When adding new assets, use clear, lowercase filenames and keep them in `Assets/Images` or `Assets/Videos` as appropriate.

## Integration points & external deps

- No external packages are checked into the repo. If adding third-party libraries, prefer CDN links injected into `index.html`'s `<head>` for quick experiments, and document such additions in a commit message.

## Typical tasks an AI assistant may be asked to do

- Add or replace assets referenced from `.main` background or `<img>` tags (update files in `Assets/Images`).
- Move inline styles into `styles.css` and adjust selectors (small refactor). Example: replace `nav style="background-color: red;"` with a `.site-nav` class in `styles.css` and update `index.html` accordingly.
- Add new sections or simple responsive tweaks by extending `styles.css` and updating `index.html`.

## Constraints & gotchas observed

- There is no build/test automation in the repo — keep changes minimal and easy to validate manually.
- Pay attention to file path casing and relative paths; they work on Windows locally but may be case-sensitive on some hosting platforms.

---

If anything in these instructions is unclear or you want the agent to follow stricter rules (for example, specific naming conventions, a branching strategy, or a preferred local server), tell me and I will update this file.
