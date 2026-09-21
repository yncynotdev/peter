# Vue Conventions

- Default stack: Vue 3 + Composition API + <script setup lang="ts">

Split a component when it has more than one clear responsibility (e.g. data orchestration + UI, or multiple independent UI sections).

- Prefer smaller components + composables over one “mega component”
- Move UI sections into child components (props in, events out).
- Move state/side effects into composables (useXxx()).

Apply objective split triggers. Split the component if any condition is true:

- It owns both orchestration/state and substantial presentational markup for multiple sections.
- It has 3+ distinct UI sections (for example: form, filters, list, footer/status).
- A template block is repeated or could become reusable (item rows, cards, list entries).

