# TEASER-PLAYBOOK.md — How to build a pitch teaser page

Read this together with CLAUDE.md before building any teaser. A "teaser" is a personalized preview page built for a specific property we're pitching (e.g. /casa-aurora). It is NOT a full guide and NOT a public example. It is a sales weapon: it proves real effort before asking for anything.

## The three inputs Trevor provides

1. The property's Airbnb listing link (pull property name, check-in method, checkout, WiFi, max guests, distances, and one human detail from it).
2. A photo of the property (Trevor drops it into the terminal). Optimize/resize to ~1600px, save as images/hero.jpg in the property folder, object-fit cover, never distort. Use THEIR real property photo, it makes the "this is for me" effect land. Never reuse one property's photo on another's teaser.
3. The contact's first name (the person Trevor is actually DMing). SET THIS BY HAND in the greeting. Do not pull the name from the listing, Airbnb often shows a co-host or manager who isn't who we're messaging. A wrong name on a personalized pitch does more damage than no name.

## Build location & technical

- Create at `property-slug/index.html`, served at /property-slug (clean URLs).
- Photo at `property-slug/images/hero.jpg`.
- Add `<meta name="robots" content="noindex">` always. A preview built on someone else's property should not be indexed.
- Do NOT add the teaser to the homepage examples. It's private.
- Same warm, light, beachy brand styling as the Casa Las Nubes guide.
- Mark the personalize fields with HTML comments so future copies are fill-in-the-blank: guest name, property name, hero tagline, arrival values, the one specific detail.

## Page structure, top to bottom

1. **Personal greeting** — the single most important line. "Hi [NAME], here's a small taste of what a welcome guide for [Property] could feel like for your guests." Set [NAME] by hand.

2. **One relief-framing line** (this belongs in the teaser, not the landing page) — frame it as the thing they've been meaning to put together, already started for them. Lead with ease, not money.

3. **Hero** — full-screen, their real property photo, soft dark gradient overlay for readable white text. Eyebrow with neighborhood + Puerto Escondido. Title "Welcome to [Property]". A warm property-specific subtitle. Small tag: "A preview, built for you by The Welcome Link."

4. **Arrival "at a glance" table** — "Your arrival, sorted." Clean, elegant, mobile-friendly. Pull real values from the listing: check-in method, checkout, WiFi, max guests, distance to beach, one nice touch (e.g. coffee setup). This is proof of specificity, keep it high on the page.

5. **One host-relief line** right after arrival: name the host's actual friction. "This is the stuff your guests usually message you about. Here it's answered before they ask, so their stay is smoother and your phone is quieter." Speak to the host's life, not just the guest's.

6. **Upside section — softened and DEMOTED below the arrival proof.** Headline "A little extra, too" (never "Earn more / Profit from day one"). Frame add-ons as a natural side effect, not an ROI promise. Cards can include: stocked welcome fridge, early check-in / late checkout ("sell the hours you already have" — keep this line, it's specific and good), airport pickup, curated experiences. Keep it light. Money is a byproduct, the welcome is the point.

7. **Closing with two buttons, unequal weight:**
   - Primary (loud, full button): WhatsApp "Let's talk" to +52 954 206 1152, prefilled with a message referencing the specific property preview.
   - Secondary (quiet text link, smaller, not a full button): "Or see a full home I've built a guide for →" linking to https://thewelcomelink.com/casa-las-nubes/
   - If the two are visually equal, intent splits and people browse instead of messaging. Primary loud, secondary soft.

## Bilingual EN/ES is required (not optional)

Every teaser ships with an English/Spanish toggle in the top right. This is the house standard, do not build a single-language teaser. Most hosts here are Spanish-first and their guests are mixed, so both languages are always present and it signals real care.

- Toggle pattern: `.lang-en,.lang-es{display:contents}` with `body[data-lang]` switching visibility, a fixed frosted pill top-right, and a small JS click handler. Copy lives inline as paired `<span class="lang-en">` / `<span class="lang-es">` siblings. Reuse the markup from an existing teaser (villa-palmeras-3, casa-tsuki) so the structure stays identical.
- Watch the known bug: a `.lang-es`/`.lang-en` hide rule can tie on CSS specificity with another selector and leak both languages. After building, confirm in the preview that zero of the hidden language's spans are visible (check `getComputedStyle(el).display !== 'none'`).
- Default to English unless the specific host is Spanish-first, then default Spanish. One-line flip: set `<html lang>`, `<body data-lang>`, and the `.active` toggle button together.
- Keep Spanish-native words ("ático", "palapa", "alberca") in the Spanish copy and use the plain English equivalent ("rooftop terrace", "pool") in the English copy. Never leave an untranslated Spanish word sitting in the English version; an English-reading host or guest will not know it.
- Use the proper noun in full (e.g. "Productora Studio", not "Productora"). Brand and studio names are part of the specificity that proves effort.

## The one human detail (don't skip)

Pull one warm, specific detail from the listing's description prose, not just the specs. The "French press in the kitchen" equivalent. A real human detail is what separates a personal pitch from a template. If the listing only gives specs, find the most human spec and frame it warmly.

## Two manual checkpoints that protect the whole tactic

The speed is what tempts you to skip these. Don't.
1. **Set the contact's name by hand** in the greeting.
2. **Confirm the one detail is genuinely human**, not just another spec.
And before sending: eyeball it on a phone (that's where they open it), check the name spelling, and confirm the secondary link reads as secondary.

## Voice (from CLAUDE.md)

Grounded, warm, direct, no guru or sales hype. No em dashes or en dashes. Write like a neighbor who loves this town welcoming a friend. Speak TO THE HOST: their ease, their guests' better experience, their quieter phone. Never promise specific income or review numbers, those are byproducts, named softly if at all.

## Don't overuse the teaser

It works because it stays scarce enough to feel personal. In a small town, if word spreads that "that guy sends everyone a fake preview," the effort signal collapses into a template signal, the exact thing we differentiate against. Reserve custom teasers for higher-value properties worth the build time. For some hosts, a DM plus the Casa Las Nubes and Casa Janet links is enough. Once there are real clients and testimonials, the personalized preview matters less.

## Founding-stage honesty

No completed paying clients yet. Janet is a friend, not a user. That's fine, the founding-host framing turns thinness into opportunity, but only if Trevor names it first. Ready answer to "who else have you done this for?": "Janet's place, and yours would be among the first." Present it as the founding window, which is what it is. Get one line of real proof from a host as soon as possible, it changes everything.
