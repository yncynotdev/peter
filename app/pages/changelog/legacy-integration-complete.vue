<script setup>
definePageMeta({
  layout: "policy",
});
</script>

<template>
  <UPageCard
    :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5 p-4 sm:p-4 md:p-7' }"
  >
    <h1>PETER v0.9.4 — Legacy Integration Complete</h1>
    <p><strong>Beta Release</strong> · Internal</p>

    <section>
      <h2>Overview</h2>
      <p>
        <code>v0.9.4</code> marks an important milestone in PETER's development: the legacy
        implementation has been fully integrated into the new architecture.
      </p>
      <p>
        This release represents the completion of the transition from the previous implementation
        toward the current PETER codebase and architecture.
      </p>
      <p>
        Rather than introducing a single major feature, this release consolidates a significant
        amount of previous work into the new system and establishes the foundation for further
        development.
      </p>
    </section>

    <section>
      <h2>🚩 Milestone: Legacy Integration Complete</h2>
      <p>
        The primary goal of this release was to complete the integration of functionality that
        previously depended on the legacy implementation.
      </p>
      <p>With this milestone:</p>
      <ul>
        <li>Legacy functionality has been integrated into the new architecture.</li>
        <li>Remaining legacy paths have been migrated or replaced.</li>
        <li>Related functionality has been consolidated under the current system structure.</li>
        <li>
          The application is no longer dependent on the previous implementation for the integrated
          functionality.
        </li>
        <li>The new architecture becomes the primary foundation for future development.</li>
      </ul>
      <p>This effectively closes the legacy integration phase of PETER.</p>
    </section>

    <section>
      <h2>🔧 Improvements</h2>
      <p>
        Alongside the migration work, various internal improvements were made to support the new
        implementation:
      </p>
      <ul>
        <li>Improved code organization and maintainability.</li>
        <li>Consolidated duplicated or transitional implementations.</li>
        <li>Improved consistency between related application components.</li>
        <li>Refined internal application behavior following the migration.</li>
        <li>Cleaned up implementation details left over from the transition.</li>
      </ul>
    </section>

    <section>
      <h2>🐛 Fixes</h2>
      <p>
        This release also includes fixes and adjustments discovered while completing the
        integration.
      </p>
      <ul>
        <li>Fixed issues introduced or uncovered during migration.</li>
        <li>Addressed inconsistencies between legacy and new implementations.</li>
        <li>Resolved minor bugs and edge cases encountered during integration.</li>
      </ul>
    </section>

    <section>
      <h2>📌 What This Release Means</h2>
      <p><code>v0.9.4</code> is primarily a development milestone.</p>
      <p>
        The most important outcome is not a particular user-facing feature, but the fact that PETER
        has reached a point where the legacy implementation can be considered integrated and the
        project can move forward using the new architecture.
      </p>
      <p>Future <code>0.9.x</code> releases will focus increasingly on:</p>
      <ul>
        <li>Stability</li>
        <li>Bug fixes</li>
        <li>Refinement</li>
        <li>Performance</li>
        <li>Deployment improvements</li>
        <li>Production readiness</li>
      </ul>
    </section>

    <section>
      <h2>🚀 Deployment</h2>
      <p>
        <code>v0.9.4</code> is tagged as a release in Git and identifies the exact commit containing
        this milestone.
      </p>
      <p>Deployment may occur separately from the GitHub release.</p>
    </section>

    <section>
      <h2>⚠️ Beta Status</h2>
      <p>
        PETER remains in beta and is under active development. The architecture, behavior, features,
        and implementation may continue to change before the eventual
        <code>1.0.0</code> stable release.
      </p>
    </section>

    <section>
      <h2>Release Timeline</h2>
      <h3>v0.9.4 — Legacy Integration Complete</h3>
      <p>
        The legacy implementation has been fully integrated into the new PETER architecture,
        completing the project's legacy migration phase.
      </p>
    </section>
  </UPageCard>
</template>

<style scoped>
h1 {
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ui-text-highlighted, #111827);
  margin-bottom: 0.25rem;
}

h1 + p {
  color: var(--ui-text-muted, #6b7280);
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

hr {
  border: none;
  border-top: 1px solid var(--ui-border, #e5e7eb);
  margin: 2rem 0;
}

section {
  margin-bottom: 2.25rem;
}

section:last-of-type {
  margin-bottom: 0;
}

h2 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ui-text-highlighted, #111827);
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--ui-border, #e5e7eb);
}

h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--ui-text-highlighted, #111827);
  margin: 1.25rem 0 0.5rem 0;
}

h3:first-of-type {
  margin-top: 0.5rem;
}

p {
  color: var(--ui-text-toned, #374151);
  line-height: 1.7;
  margin-bottom: 0.875rem;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0.5rem 0 0.875rem 0;
  padding-left: 0;
  list-style: none;
}

li {
  position: relative;
  color: var(--ui-text-toned, #374151);
  line-height: 1.7;
  padding-left: 1.25rem;
  margin-bottom: 0.375rem;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ui-primary, #10b981);
}

li:last-child {
  margin-bottom: 0;
}

strong {
  font-weight: 600;
  color: var(--ui-text-highlighted, #111827);
}

a,
:deep(a) {
  color: var(--ui-primary, #10b981);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.15s ease;
}

a:hover,
:deep(a:hover) {
  text-decoration-color: currentColor;
}
</style>
