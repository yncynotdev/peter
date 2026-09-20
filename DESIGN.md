# DESIGN

We are designing a landing page for **PETER**, a niche B2B face-detection attendance system for organizations that want a friendly, simple, modern, and harder-to-cheat clock-in/clock-out workflow.

--- 

## Colors

Colors are based on **Rosepine Theme**.

The **dark theme is the default visual presentation**. Light mode remains supported and can be toggled by the user.

### Dark Theme (Default)

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

The home page introduces PETER, explains the attendance workflow, shows its capabilities and current organization usage, presents the technology stack, and ends with a demo call-to-action.

#### Hero Section

Purpose:
Create a strong, generic landing-page hero that introduces PETER immediately without splitting the hero into a text column and product interface.

Content:
- Center the hero content horizontally and vertically.
- PETER should be presented prominently as the main brand/title.
- Headline: "Modern, friendly attendance with face detection."
- Supporting line: "PETER simplifies attendance with fast, reliable clock-ins and clock-outs using face-based verification — without storing biometric data."
- Primary call-to-action: "Open demo", linking to the configured external demo website.
- Secondary call-to-action: "How it works", linking to the How It Works section.

Visual direction:
- Use a simple 3D visual built from basic geometric cube shapes as the hero's supporting visual.
- The 3D element should feel playful, modern, and lightweight rather than technical or overly realistic.
- Prefer a small composition of cubes with subtle depth, rotation, spacing, and motion rather than a complex 3D scene.
- Keep the 3D visual secondary to the title and CTA. The hero must still work visually if the 3D element is disabled or unavailable.
- Do not use the previous split-screen attendance interface as the primary hero composition.

#### About / Capabilities Section

Purpose:
Explain why PETER exists and what it does.

Content:
- Heading: "Attendance that feels simple, not intimidating."
- Explain that PETER helps organizations manage clock-ins, clock-outs, and attendance records while reducing buddy-punching.
- State that face detection is used for attendance verification and biometric data is not stored.
- Key capabilities:
  - Fast clock-in and clock-out.
  - Face-detection check to reduce buddy-punching and other attendance fraud.
  - Organization-focused attendance workflow around schedules, members, and attendance records.
  - Clear verified attendance states for administrators.

#### How It Works

Purpose:
Briefly explain the attendance workflow.

Content:
- A simple three-step process:
  1. Take a picture — The employee takes a face photo using the attendance camera.
  2. Choose clock in or out — The employee chooses whether they are clocking in or clocking out.
  3. Submit attendance — PETER records the attendance and marks whether the attempt was verified.
- Include a supporting attendance demonstration video when available.

#### Organizations Using

Purpose:
Show organizations currently using PETER.

Content:
- Real organization names and logos supplied by the owner.
- Current organization: Immaculate Conception Seminary.

Do not fabricate organizations, statistics, testimonials, or customer claims. If real organization information is not available, omit this section.

#### Technology Stack

Purpose:
Show the technologies and infrastructure used to build PETER.

Content:
- Nuxt — Full-stack Vue framework for building fast, modern web applications.
- Hono — Lightweight web framework for fast APIs across modern runtimes.
- TypeScript — Strongly typed JavaScript for reliable and maintainable applications.
- PostgreSQL — Relational database for PETER's attendance and organizational data.
- Cloudflare — Infrastructure for running PETER close to the organizations it serves.

Keep this section informational rather than overly technical.

#### Final Call-to-Action

Purpose:
Give visitors a final opportunity to explore the product.

Content:
- Heading: "See PETER in action"
- Description: "Explore the demo and see how PETER handles the attendance workflow."
- Primary call-to-action: "Open demo", linking to the configured external demo website.

### Changelog Page

Purpose:
Provide a simple record of notable PETER updates and changes.

Content:
- Present product changes in a clear, chronological format.
- Keep entries concise and easy to scan.
- Use plain language appropriate for organization users.
- Do not expose internal implementation details unless they are relevant to a user-facing change.

### Policies Page

Purpose:
Provide access to PETER's applicable policies and explain important user-facing rules clearly.

Content:
- Present policies in a readable, organized format.
- Use plain and reassuring language.
- Make policy information easy to find and navigate.
- Keep policy content separate from marketing copy.

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

- Dark mode is the default theme and should be the first visual state presented to visitors.
- Light and dark themes must be toggleable.
- Use the Rosepine dark and light palettes above.
- The design should remain visually coherent when switching between themes.

---

## Implementation Rules

- Build with Nuxt and Nuxt UI.
- Follow this document as the source of truth for visual design.
- Use plain, reassuring language around face detection. Avoid creepy surveillance terms, exaggerated AI claims, or fear-based messaging.
- Do not imply biometric storage. Clearly state that PETER does not store biometrics.
- External demo links must look and behave like primary calls to action.
- Changelog and Policies must be treated as first-class pages and remain visually consistent with the landing page.
- Do not introduce unrelated visual styles.
- Do not add sections that are not defined here unless necessary for usability.
- Prefer existing components and design tokens over one-off styles.
- Keep the implementation simple and maintainable.
