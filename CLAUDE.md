# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML5 personal portfolio website for Javier Delgado, hosted on GitHub Pages.
Custom-built — no template, no framework, no build step.

## Development

Serve locally with any static HTTP server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in the browser.

**Deployment:** Push to `main` branch. GitHub Pages auto-deploys from the repository root.

## Architecture

Single-page portfolio with hash-based section navigation (`#about`, `#projects`, `#resume`, `#contact`).

**Core files:**
- [index.html](index.html) — all sections in one file
- [styles.css](styles.css) — all styles (CSS custom properties, Flexbox, Grid)
- [script.js](script.js) — navbar scroll state, active link tracking, IntersectionObserver fade-ins, mobile menu, back-to-top
- [assets/img/](assets/img/) — favicon only (`favicon.png`, `apple-touch-icon.png`, `favicon.ico`)

**External dependency:** Inter font loaded from Google Fonts (single `<link>` in `<head>`).

## Key Patterns

- Zero dependencies: no jQuery, no Bootstrap, no icon libraries, no transpilation
- Design tokens defined as CSS custom properties in `:root` (`--bg`, `--accent`, `--text`, `--muted`, etc.)
- Scroll-triggered animations via `IntersectionObserver` — elements get `.visible` class when they enter the viewport
- Navbar turns opaque (`nav.scrolled`) after 40 px of scroll; active link updates on every scroll event
- Mobile menu toggled with `nav.menu-open` class on the `<nav>` element
- Commit messages are in Spanish
