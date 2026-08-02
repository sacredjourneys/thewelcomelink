# CLAUDE.md — The Welcome Link

This file gives you (Claude Code) the full context, story, and philosophy behind this project so everything you build carries the right soul, not just the right code. Read it before building or editing anything.

---

## What this project is

The Welcome Link is a done-for-you service that creates beautiful, custom digital welcome guides for short-term rental hosts. Each guide is a single mobile web page a guest opens before and during their stay: arrival directions, WiFi, house info, curated local recommendations, experiences, and one-tap contact with the host.

Live at thewelcomelink.com. Built as a static site, hosted on Vercel, deployed from GitHub. No database, no backend, nothing to maintain except the domain. Each property is a folder served at thewelcomelink.com/property-name.

## The origin story (the why)

This started when Trevor (the founder) saw an ad for a product selling Airbnb welcome templates — DIY Canva files hosts fill in themselves. The insight: the template model is weak, but a *done-for-you, fully custom* version built around each specific property is far more valuable. Hosts are busy and not designers. They don't want software and a login. They want it handled and beautiful.

## The philosophy (the soul — this matters most)

The deepest idea: this is not really about a "guidebook." It's about **creating love inside a location.** We welcome people into a place we love (Puerto Escondido) and help them have the best possible experience of it — whatever kind of trip they came for: the explorer, the foodie couple, the simple escape.

The rental is just the doorway. What we're really enhancing is the guest's whole relationship with the town. When a guest falls in love with the place because of how they were welcomed, everyone wins: the guest, the host, the local restaurants and operators, the whole community.

The host benefits — happier guests, better reviews, more income — are **byproducts** of doing that one thing well. Always lead with the guest experience and the love of place. The money and reviews follow. Never lead with the transactional stuff.

This is the same root instinct behind Trevor's other work (Sacred Journeys, a transformational space): helping people have an experience that shifts how they feel. Same soul, different form.

## Positioning (how we're different)

The market is full of cheap, self-serve SaaS guidebook tools (Touch Stay, GuestIntro, Hostfully, Sunver, etc.) — typically $8–15/month. They all hand the host an empty dashboard and make the host do the work. Most hosts never finish.

Our wedge is the opposite:
- **Done-for-you, not do-it-yourself.** We build it. The host does nothing but answer a few questions.
- **Fully the host's brand**, not ours. Each guide is designed around the specific property's character. No third-party badge stamped on it.
- **Designed, not templated.** Real attention to aesthetics. A guest can feel the difference.
- **Local and human.** Genuine local knowledge, real picks from people who live here — not AI-generated generic lists.

We compete on craft and care, not price. A one-time custom build is a creative service worth a few hundred dollars, not a subscription.

## The ROI logic (for selling to hosts)

A guide pays for itself through: experience/excursion referral commissions (the host's contacts or ones we help source), host-controlled upsells (stocked welcome fridge, early check-in/late checkout, airport pickup, mid-stay clean), and better reviews lifting ranking and nightly rate. The experiences section doubles as a quiet revenue engine. Never promise specific review numbers; frame better reviews as the natural result of a great stay (Airbnb has rules on review solicitation — keep nudges gentle).

## Pricing model

Two options to offer: (A) one-time build fee, host keeps it; (B) smaller build fee + small monthly to host and keep it updated (most popular — the monthly is near-pure margin since static hosting costs almost nothing). Founding-host rate: discounted for the first few properties in exchange for a testimonial.

## Voice & tone (apply to all copy)

- Grounded, warm, direct. Masculine but compassionate. Poetic without fluff.
- No guru tone, no enlightenment hype, no salesy hype.
- Trevor's guiding phrase: "from force to flow."
- Write like a real person who loves this town welcoming a friend, not like a brochure.
- IMPORTANT: avoid em dashes and en dashes in copy. Use plain sentences, natural rhythm, and commas where needed.

## Design principles

- Warm, light, beachy, luxurious. Puerto Escondido energy: sunrise-to-sea, terracotta, gold, ocean teal, sand, cream. Light, not dark.
- Mobile-first always. These open on a guest's phone.
- Photo-rich. Real photography is the product. Use it generously, compress for fast mobile loading (resize large images to ~1600px wide), lazy-load below-the-fold images, never distort (object-fit: cover).
- Each property guide is styled to ITS property's character. The brand (landing page) stays consistent; individual guides flex to fit the home.
- Fonts in use: Fraunces (serif, for headings) and Spline Sans (body).
- Bilingual by default. Every page (landing, full guides, and teasers) ships with an English/Spanish toggle in the top right. This is the house standard now, not an optional extra. Most hosts here are Spanish-first and their guests are mixed, so both languages are always present. Default the page to English unless the specific host is Spanish-first (then default Spanish); it is a one-line flip either way. The toggle pattern: `.lang-en,.lang-es{display:contents}` with `body[data-lang]` switching visibility, a fixed frosted pill top-right, and a small JS click handler. Copy lives inline as paired `<span class="lang-en">` / `<span class="lang-es">` siblings. Keep Spanish-native words (e.g. "ático", "palapa") in the Spanish copy and use the plain English equivalent ("rooftop terrace", "palapa/roof hut") in the English copy so neither side reads as foreign.

## Standard guide structure (per property)

Guides follow a four-movement, time-based spine that mirrors the guest's own journey, not a flat list of categories. casa-yani/index.html is the reference template: duplicate it to start a new guide. Each movement is marked with an HTML comment banner, and every property-specific value carries a FILL-in comment, so the template is duplicate-and-fill.

1. Before You Come. The personal welcome note, then a short pre-arrival prep block with only what a guest needs days ahead: cash, arriving in daylight, off-grid readiness, and pre-booking any experiences that need notice.
2. Getting Here. Arrival directions, often the highest-value section. Per-origin, tap-to-expand routes that all end at one meeting point. Entry and meeting always route to the host via prefilled WhatsApp, never a door code on the page.
3. While You're Here. One continuous movement: the home (how we live here), the essentials (WiFi, check-in, checkout time, quiet hours, guests), experiences (curated, local, book-on-request), eat & drink, and any in-stay practical notes.
4. Heading Out. The checkout checklist, then the warm closing note and one-tap contact with a gentle, Airbnb-safe review nudge.

## Build conventions

- Each property lives in its own folder as index.html, served at /property-name (clean URLs via vercel.json).
- Property images go in property-name/images/.
- The root index.html is the brand landing page.
- To add a property: duplicate an existing property folder, replace content, commit, push. Vercel auto-deploys.
- Always commit and push after changes so the live site updates.
- For pitch teaser pages (previews built for a specific property we're pitching, like /casa-aurora), follow TEASER-PLAYBOOK.md. Teasers are private sales tools: noindex, never added to the homepage examples, one per property we're actively pitching.

## Founder context

Trevor: host in Puerto Escondido, lives at Casa Las Nubes (the flagship example guide, also a real home used for Sacred Journeys gatherings). WhatsApp for all contact/referral buttons: +52 954 206 1152. The current goal is cash flow now and a few real clients — prove the concept, get testimonials, learn what the build really takes. The bigger vision (a referral network with town-wide discounts like That SHRED Life's model, a possible scalable agency) can come later if it wants to. Don't over-engineer for scale yet.
