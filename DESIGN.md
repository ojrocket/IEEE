---
name: IEEE SRM AP Portal
description: Immersive, technical editorial portal for IEEE Student Branch SRM University AP
colors:
  primary: "#3C72B0"
  accent: "#40B2D6"
  accent-electric: "#0ECAD4"
  accent-gold: "#E8A838"
  accent-violet: "#7B61FF"
  bg-darkest: "#0D1117"
  bg-dark: "#0F1923"
  bg-surface: "#152C55"
  bg-card: "#12233B"
  text-ice: "#E2EEF9"
  text-secondary: "#A8C4DE"
  text-muted: "#5A7FA8"
  text-dim: "#2D4A6B"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(44px, 8.5vw, 108px)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  card: "12px"
  glass-card: "14px"
  badge: "20px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  glass-card:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.glass-card}"
    padding: "32px"
  badge:
    backgroundColor: "rgba(64, 178, 214, 0.1)"
    textColor: "{colors.accent}"
    rounded: "{rounded.badge}"
    padding: "3px 10px"
---

# Design System: IEEE SRM AP Portal

## 1. Overview

**Creative North Star: "The Neon Codex"**

The Neon Codex is a design system that marries high-contrast technical precision with cinematic atmosphere. Built on a dark space-cadet navy canvas (`#0D1117`), it employs glowing cyan and electrical gold accents to draw attention to interactive elements, guided by smooth, scroll-driven motion. The interface projects high-fidelity technical expertise while maintaining strict editorial readability and grid alignment.

This system rejects bland, flat corporate lists and institutional white pages. Instead, it relies on deep layering, glowing neon status accents, large light-weight headlines, and detailed monospace typography index cues.

**Key Characteristics:**
- **Cinematic Dark Mode:** Surfaces are deeply tinted with cool blue values rather than flat charcoal or warm cream.
- **Precision Coding Aesthetics:** Heavy use of monospace tags, parentheses frames `( 01 )`, and index marks that feel like terminal metrics.
- **Deliberate Easing:** Interactive states hover, scale, and transform with sharp ease-out curves, providing instant feedback.

## 2. Colors

The color palette is built on deep cosmic blues, cool icy text, and vivid glowing technical accents.

### Primary
- **Space Cadet Blue** (`#3C72B0`): The base brand color. Used for large backgrounds, core CTA buttons, and secondary section themes.

### Secondary
- **Electric Accent Cyan** (`#40B2D6`): High-energy accent. Used for text links, icons, border highlights, and active menu states.
- **Neon Cyan** (`#0ECAD4`): Pure vibrant highlight. Used for active neon states, hot triggers, and hover states.

### Tertiary
- **Electric Gold** (`#E8A838`): Accent highlight for warnings, competitions, and special high-priority tags.
- **Electric Violet** (`#7B61FF`): Chapter-specific accents and festival tags.

### Neutral
- **Deep Void** (`#0D1117`): The default body background. Core canvas color.
- **Icy White** (`#E2EEF9`): Main readable text ink. High contrast and clean.
- **Muted Starlight** (`#A8C4DE`): Secondary text body, sub-labels, and info paragraphs.
- **Text Dim** (`#2D4A6B`): Parentheses frames, inactive marquee text, and divider boundaries.

**The Glow Rarity Rule.** Neon/glow colors (Neon Cyan, Gold, Violet) must be used on ≤10% of any given screen. Their rarity is what makes them draw focus.

## 3. Typography

**Display Font:** Outfit (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** The pairing of Outfit (clean, geometric, wide display) with JetBrains Mono (precision monospace) creates a high-craft terminal-editorial feel, stabilized by Inter for neutral body paragraphs.

### Hierarchy
- **Display** (Outfit, 300 weight, clamp(44px, 8.5vw, 108px), line-height 1.0): Hero headlines and massive chapter/page introduction headers.
- **Headline** (Outfit, 400 weight, text-4xl (36px), line-height 1.1): Mid-sized titles and section introductions.
- **Title** (Outfit, 500 weight, text-2xl (24px), line-height 1.25): Card headings and block list titles.
- **Body** (Inter, 400 weight, text-base (16px), line-height 1.6): Default body copy and explanatory paragraphs. Cap line length at 65ch.
- **Label** (JetBrains Mono, 400 weight, text-xs (11px), letter-spacing 0.12em): Metric tags, index counts, and parentheses labels.

## 4. Elevation

The system relies on glassmorphism, border transitions, and scale translations rather than soft shadow overlays. It is flat at rest and layered through opacity differences.

**The Flat-Border Rule.** Surfaces use borders with low opacity (`rgba(64,178,214,0.1)`) and backdrop filters at rest. Elevation is signaled by scaling the card (`translateY(-2px)`) and brightening the border rather than casting a traditional dark shadow.

## 5. Components

### Buttons
- **Shape:** Rounded-full (capsule) or sharp 8px corners depending on button class.
- **Primary:** Capsule style, Space Cadet background (`#3C72B0`), Icy White text (`#E2EEF9`). On hover, changes background to Neon Cyan (`#0ECAD4`) and scales (`scale(1.03)`).
- **Outline:** Transparent background, `1px solid var(--border-mid)`, text is Muted Starlight. Hover transitions to highlight border and cyan text.

### Glass Cards
- **Corner Style:** Rounded-2xl (14px).
- **Background:** Semi-transparent Space Cadet (`rgba(21, 44, 85, 0.5)`).
- **Border:** `1px solid rgba(64, 178, 214, 0.1)` at rest. Brightens to `rgba(64, 178, 214, 0.25)` on hover.
- **Interaction:** Shifts `translateY(-2px)` on hover with 250ms ease.

### Indexed Cards
- **Style:** Compact cards carrying a monospace index number `( 01 )` in the top-left, a background image, and a bottom text block.
- **Interaction:** On hover, the image scales (`scale(1.04)`) and brightens. The card label slides up, revealing a uppercase monospace subtitle.

### Navigation Links
- **Dual Nav Link:** Hovering over a nav link triggers a vertical slide-up transition, hiding the main text and sliding in a colored, compact description.

## 6. Do's and Don'ts

### Do:
- **Do** wrap index indicators in space-padded parentheses, e.g. `( 01 )` or `( GLOBAL_ACCESS )`.
- **Do** keep display headings lowercase or uppercase-with-period, never mixed title-case with punctuation.
- **Do** respect the `prefers-reduced-motion` media query by disabling scale and scroll transitions.
- **Do** keep text color contrast at a minimum of 4.5:1 against the dark background.

### Don't:
- **Don't** use standard shadows (e.g., `#000` blur) on cards; use border highlights and subtle background tints.
- **Don't** use warm-tinted parchment or cream backgrounds; stick to the cool void scale.
- **Don't** animate image elements directly on hover; instead, scale them inside a clipped container.
- **Don't** add side-stripe borders as colored accents on cards.
- **Don't** use gradient text under any circumstances.
