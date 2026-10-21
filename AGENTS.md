<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Responsive layout requirements

- Every UI change must account for phone, tablet, laptop, and desktop widths, in portrait and landscape. Include iOS and Android viewport sizes, especially the user's Pixel 9 Pro preview at 427 × 952.
- Keep the hero in its own opening viewport below the navigation. About starts after the hero. Sections and their contents must never overlap or clip each other.
- Use available hero height for readable text and an appropriately scaled portrait; avoid a large empty area below the metrics. On short screens or with enlarged text, allow natural vertical scrolling instead of hiding content.
- Check narrow phones (320/375px), large phones (390/427px), tablets (768/820/1024px), desktop (1280/1440px), and landscape layouts. Check section boundaries and horizontal overflow, and report any browser/device verification that could not be completed.
