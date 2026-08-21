# Portfolio

Static site — no build step, no framework. Plain HTML/CSS/JS, ready for GitHub Pages.

## File structure

```
portfolio/
├── index.html                      → home page
├── about.html
├── case-studies/
│   ├── index.html                  → case study listing
│   ├── athena-patient.html
│   ├── fandubs.html
│   ├── backpack-study.html
│   ├── where-how.html
│   ├── queen-mary.html
│   └── seapple.html
├── assets/
│   ├── css/style.css                → all shared styles (colors, type, layout)
│   ├── js/script.js                 → button easter egg
│   └── images/                      → add your image folders here (see below)
└── README.md
```

## Publishing to GitHub Pages

1. Create a new repo on GitHub (e.g. `portfolio`, or `<your-username>.github.io` for a root URL).
2. Push these files to the `main` branch.
3. In the repo: Settings → Pages → set source to `main` branch, `/ (root)`.
4. Your site is live at `https://<your-username>.github.io/portfolio/` (or `https://<your-username>.github.io/` if you used the special repo name).

## Adding your images and videos

Create folders like this inside `assets/images/`:

```
assets/images/
├── shared/               → headshot, etc.
├── athena-patient/
├── fandubs/
├── backpack-study/
├── where-how/
├── queen-mary/
└── seapple/
```

Each case study page has a placeholder box (dashed blue border, labeled with the expected filename/path) marking exactly where an image or video should go. The case study **cards** on the home page and case studies index also have an image slot at the top (labeled "cover.jpg") — pick one strong screenshot per project for this. To swap any of these in:

1. Drop your image file into the matching folder (e.g. `assets/images/athena-patient/billing-1.png`, or `assets/images/athena-patient/cover.jpg` for the card).
2. Open the page's HTML file, find the `<div class="img-placeholder">...</div>` or `<div class="case-card__image">...</div>` for that spot.
3. Replace it with `<img src="../assets/images/athena-patient/billing-1.png" alt="Billing section screen">` (or a `<video>` tag for `.mp4` files — see example below). On the home page, the path doesn't need `../` since it's in the root — use `assets/images/...` directly.

Video example:
```html
<video src="../assets/images/athena-patient/walkthrough.mp4" controls></video>
```

## Editing text

All text is plain HTML inside each page. Open the file, find the sentence, retype it — no build step, just save and push.

## Still to migrate

MarkWise is still linked out to its live Framer page. Send its content the same way as the others and it can be added the same way.
