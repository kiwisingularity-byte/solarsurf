# Solar Surf — Vibe Makeover Plan

## Concept: "Big Wave Max" energy for a surfboard repair shop
- Same business, same services, same content
- New personality: 1974 Mount Maunganui surf shop meets 2046 Max Headroom cyber-surf
- "Solar" already suggests sun/energy — lean into the cosmic-surf vibe
- Tone: confident, playful, slightly unhinged, "we've been doing this for 50 years and we're the best at it"
- Aesthetic: dark mode base with sunset-neon accents, glitch effects, animated wave

## Visual Direction
- **Base:** Dark mode (deep ocean black/blue)
- **Accent colors:** Sunset orange (existing `--sun` `#f59e0b`) + electric cyan (matching the wave) + acid green
- **Typography:** Mix of a display font (something bold/condensed for headlines) + clean sans for body
- **Background:** Animated SVG/canvas waves, subtle gradient shift, occasional "glitch" frames
- **Hero:** Replace static beach photo with a looping wave animation + "The Mount's Original Surf Shop Since 1974" badge
- **Buttons:** Glowing borders, hover effects, "pressure" feel
- **Mascot:** A "Solar Surfer" silhouette — half retro 70s poster, half cyberpunk

## Personality Copy
Keep the **trust signals** (5.0★ 23 reviews, 20+ years, since 1974) but add swagger:
- Hero: "THE MOUNT'S ORIGINAL. SINCE 1974. STILL DIALED."
- Service cards: more confident language
- Reviews: keep the real ones, present them with attitude
- Add a "Why Us" section that says "Because we've been doing this longer than most surf shops have existed"

## Sections to keep
- Hero (makeover)
- Services (4 cards, same content, cooler styling)
- Our Story (1974 legacy, real photos)
- Our Work gallery (before/after, workshop)
- Video (repair-process.mp4)
- Reviews (real Google reviews)
- CTA (Damaged your board?)
- Footer (same)

## New sections to add
- **"The Numbers Don't Lie"** — Big stat block: 50+ years · 5.0★ · 23 reviews · 24h turnaround
- **"What We Don't Do"** — funny disclaimer: "We don't do Instagram filters for your dings. We do real repairs. ⚡"
- **"The Workshop"** — bigger feature on Mike the shaper legend

## Mascot concept: "WAXHEAD" or "SOLAR MAN"
- Retro 70s surf poster meets cyberpunk
- Glowing sun visor
- Carries a surfboard that's also a keytar
- Says stuff like "WAX ON. WAX OFF. BOARD FIXED."
- Appears: hero section, in the corner of error pages, in the chat widget

## Tech plan
- Keep Astro (same framework)
- Add Three.js for the wave background (already in weirdo.co.nz setup)
- Add CSS animations (glitch, neon flicker, scroll-triggered reveals)
- Add a "Solar Man" chat widget (echoes Weirdo-3000 from weirdo.co.nz)
- Use the existing photos + video
- Improve typography (something like "Archivo Black" for display, "Inter" for body)
- Performance: lazy load Three.js, fallback to static for mobile if needed

## What I need from you
1. **Yes to start** (or feedback on the plan first)
2. **Anything you'd add/remove/change** in the section list
3. **Pick a name for the mascot** (or accept my default "SOLAR MAN")
4. **Worried about losing the older/serious customers?** (If yes, I'll add a "professional" toggle that swaps to the current clean look — probably overkill, but possible)

## Time estimate
- 3-4 hours of build time across 1-2 sessions
- Test locally first
- Show you screenshots before deploying
- Deploy once you approve

## Risk
- Older customers might find it "too much" — but the trust signals (5.0★, 20+ years, real reviews, real photos) will still be front and center
- The personality IS the brand differentiation — if you want to be "the fun one" in Tauranga, this is how

## Rollback
- Source backup at `/Users/singularity/.openclaw/workspace/solar-surf-backup-20260610-1958-pre-makeover.tar.gz`
- dist backup at `/Users/singularity/.openclaw/workspace/solar-surf-dist-backup-20260610-1958.tar.gz`
- One command to restore either
