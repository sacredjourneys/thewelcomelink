# The Welcome Link

Custom guest welcome guides for short-term rentals. Static site, hosted on Vercel.

## How it's structured

- `/index.html` — the brand landing page (thewelcomelink.com)
- `/casa-janet/index.html` — Janet's mountain casita guide
- `/casa-del-mar/index.html` — Puerto beach property guide
- each property lives in its own folder as `index.html`, so the URL is clean:
  `thewelcomelink.com/casa-del-mar`

## Adding a new property (the whole workflow)

1. Duplicate an existing property folder, e.g. copy `casa-del-mar/` to `casa-newname/`
2. Edit `casa-newname/index.html` with the new property's content
3. Commit and push to GitHub
4. Vercel auto-deploys. The new guide is live at `thewelcomelink.com/casa-newname`
5. Generate a QR code pointing to that URL for inside the property

## No database, nothing to maintain

These are static pages. Nothing to pause, nothing to keep alive, no Supabase.
They serve instantly forever. Only recurring cost is the domain renewal.

## Generating a QR code

Any free QR generator works. Point it at the full property URL.
Download as PNG or SVG, drop it into a printable welcome card for inside the property.
