# DESIGN

We are designing a landing page for **PETER**, a niche B2B face-detection attendance system for organizations that want a friendly, simple, modern, and harder-to-cheat clock-in/clock-out workflow.

--- 

## Colors

Colors are based on **Rosepine Theme**

### Light Theme

- base = "#faf4ed"
- surface = "#fffaf3"
- overlay = "#f2e9e1"
- muted = "#9893a5"
- subtle = "#797593"
- text = "#464261"
- primary = "#56949f"
- success = "#286983"
- highlight-low = "#f4ede8"
- highlight-med = "#dfdad9"
- highlight-high = "#cecacd"

### Dark Theme

- base = "#232136"
- surface = "#2a273f"
- overlay = "#393552"
- muted = "#6e6a86"
- subtle = "#908caa"
- text = "#e0def4"
- primary = "#9ccfd8"
- success = "#3e8fb0"
- highlight-low = "#2a283e"
- highlight-med = "#44415a"
- highlight-high = "#56526e"

---

## Color Usage

- `base`: Main page background.
- `surface`: Cards, navigation, and elevated sections.
- `overlay`: Hover states, inputs, and secondary surfaces.
- `text`: Primary text.
- `subtle`: Secondary text.
- `muted`: Disabled or low-emphasis text.
- `primary`: Buttons, links, accents, and important UI elements.
- `success`: Verified attendance states and positive confirmation accents. Use sparingly.
- `highlight-low`: Subtle backgrounds.
- `highlight-med`: Borders and separators.
- `highlight-high`: Strong borders or visual emphasis.

Do not introduce additional colors unless absolutely necessary.

The overall tone should feel friendly and simple, not corporate, surveillance-heavy, or overly technical.

---

## Typography

- Silkscreen:
  - Hero heading
  - Section headings
  - Important labels
  - Branding

- DM Sans:
  - Body text
  - Navigation
  - Buttons
  - Descriptions
  - Forms

Silkscreen should be used sparingly. Do not use it for long paragraphs.

---

## Pages

### Home Page

#### Hero Section

Purpose:
Introduce PETER and immediately explain what it does.

Content:
- PETER logo/name as a simple horizontal text mark. Text-only is acceptable until a brand/logo exists.
- Brief description: "Modern, friendly attendance with face detection."
- Supporting line: "PETER helps teams clock in and out faster while capturing faces only to prevent attendance cheating. It does not store biometrics."
- Primary call-to-action: Button linking to an external demo website.

#### About Section

Purpose:
Explain why PETER exists and what it does.

Content:
- Brief explanation: PETER helps organizations run attendance faster while reducing buddy-punching and other attendance cheating, without making the experience feel intimidating.
- Privacy reassurance: PETER captures faces for attendance verification only and does not store biometric data.
- Key capabilities:
  - Easy employee clock-in and clock-out.
  - Face-detection verification to reduce attendance cheating.
  - Simple organization-focused attendance workflow.
  - Clear verified/unverified attendance states.

#### Organizations Using

Purpose:
Show who currently uses PETER.

Content:
- Real organization names and logos supplied by the owner.

If real organization names/logos are not available, omit this section entirely. Do not show placeholder logos.

Do not fabricate organizations, statistics, testimonials, or customer claims.

---

## Responsive Behavior

### Desktop

- Use the full horizontal space effectively.
- Maintain readable content widths.
- Use larger typography for hero content.

### Mobile

- Stack sections vertically.
- Reduce typography appropriately.
- Keep the horizontal "PETER" name readable.
- Preserve visual hierarchy.
- Ensure navigation remains usable.
- Avoid horizontal overflow.

---

## Theme Behavior

- Light and dark themes must be toggleable.
- Use the Rosepine light and dark palettes above.

---

## Implementation Rules

- Build with Nuxt and Nuxt UI.
- Follow this document as the source of truth for visual design.
- Use plain, reassuring language around face detection. Avoid creepy surveillance terms, exaggerated AI claims, or fear-based messaging.
- Do not imply biometric storage. Clearly state that PETER does not store biometrics.
- External demo links must look and behave like primary calls to action.
- Do not introduce unrelated visual styles.
- Do not add sections that are not defined here unless necessary for usability.
- Prefer existing components and design tokens over one-off styles.
- Keep the implementation simple and maintainable.
