# DESIGN

We are designing a landing page about a system.

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
- `highlight-low`: Subtle backgrounds.
- `highlight-med`: Borders and separators.
- `highlight-high`: Strong borders or visual emphasis.

Do not introduce additional colors unless absolutely necessary.

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
Introduce PETER and immediately explain what is does.

Content:
- PETER logo/name in a cool vertical manner.
- Brief Description.
- Primary call-to-action (e.g. Button to try it).

#### About Section

Purpose:
Explain why PETER exists and what is does.

Content:
- Brief explanation.
- Key capabilities.

#### Organizations Using

Purpose:
Shows who currently using PETER.

Content:
- Organization name and logo

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
- Preserve visual hierarchy.
- Ensure navigation remains usable.
- Avoid horizontal overflow.

---

## Implementation Rules

- Follow this document as the source of truth for visual design.
- Do not introduce unrelated visual styles.
- Do not add sections that are not defined here unless necessary for usability.
- Prefer existing components and design tokens over one-off styles.
- Keep the implementation simple and maintainable.
