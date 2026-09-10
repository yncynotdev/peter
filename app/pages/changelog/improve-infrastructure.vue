<script setup>
definePageMeta({
  layout: "policy",
});
</script>

<template>
  <UPageCard
    :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5 p-4 sm:p-4 md:p-7' }"
  >
    <h1>PETER v0.9.5 — Infrastructure Improvements</h1>
    <p><strong>Beta Release</strong> · Internal</p>

    <section>
      <h2>Overview</h2>
      <p>
        <code>v0.9.5</code> focuses on strengthening PETER's infrastructure, development workflow,
        and overall reliability.
      </p>
      <p>
        This release introduces automated CI/CD pipelines, backend unit tests, client-side
        end-to-end testing, and improved code quality checks.
      </p>
      <p>
        Alongside the infrastructure work, this release also includes improvements to the admin
        interface, attendance filtering, realtime data handling, and the PETER icon.
      </p>
    </section>

    <section>
      <h2>🚩 Milestone: Infrastructure Improvements</h2>
      <p>
        The primary goal of this release was to establish a more reliable foundation for developing,
        testing, and deploying PETER.
      </p>
      <p>With this milestone:</p>
      <ul>
        <li>Continuous integration and deployment workflows have been introduced.</li>
        <li>Server deployments can now be handled through GitHub Actions and Wrangler.</li>
        <li>Core server functionality is covered by automated unit tests.</li>
        <li>Client functionality can be verified through end-to-end tests.</li>
        <li>Linting and formatting checks are integrated into the development workflow.</li>
        <li>Cloudflare Workers environments are configured with clearer project separation.</li>
      </ul>
      <p>
        These changes establish the foundation for more consistent testing and deployment as PETER
        continues toward production readiness.
      </p>
    </section>

    <section>
      <h2>🧪 Testing</h2>
      <p>Automated testing was introduced across both the server and client applications.</p>
      <ul>
        <li>Added unit tests for core server functionality.</li>
        <li>Added end-to-end testing for important client workflows.</li>
        <li>Improved confidence in attendance-related functionality.</li>
        <li>Established testing as part of the ongoing development workflow.</li>
      </ul>
      <p>
        The test suite will continue to grow as additional functionality is implemented and
        production requirements become clearer.
      </p>
    </section>

    <section>
      <h2>⚙️ CI/CD</h2>
      <p>
        PETER now has automated workflows for validating and deploying changes through GitHub
        Actions.
      </p>
      <ul>
        <li>Added GitHub Actions workflows for the project.</li>
        <li>Added automated Cloudflare deployment through Wrangler.</li>
        <li>Configured separate deployment environments for the server.</li>
        <li>Improved dependency handling for both Bun and pnpm-based projects.</li>
        <li>Added automated linting and formatting checks.</li>
        <li>Moved CI/CD configuration into the project's root workflow directory.</li>
      </ul>
      <p>
        This reduces the amount of manual work required to validate and deploy changes while making
        deployments more predictable.
      </p>
    </section>

    <section>
      <h2>🔧 Improvements</h2>
      <p>Several application-level improvements were also included in this release.</p>
      <ul>
        <li>Improved realtime data handling in the admin interface.</li>
        <li>Improved attendance filtering in the admin interface.</li>
        <li>Improved the consistency of admin attendance data.</li>
        <li>Improved Cloudflare Wrangler environment configuration.</li>
        <li>Revamped the PETER icon design and updated related implementation code.</li>
      </ul>
    </section>

    <section>
      <h2>🐛 Fixes</h2>
      <p>This release also includes smaller fixes and adjustments discovered during development.</p>
      <ul>
        <li>Fixed attendance filtering behavior in the admin interface.</li>
        <li>Fixed CI workflow configuration and project paths.</li>
        <li>Fixed dependency and Wrangler version configuration in deployment workflows.</li>
        <li>Addressed various development workflow inconsistencies.</li>
      </ul>
    </section>

    <section>
      <h2>📌 What This Release Means</h2>
      <p><code>v0.9.5</code> is primarily an infrastructure and reliability milestone.</p>
      <p>
        Unlike a release centered around a single user-facing feature, this version focuses on
        improving the systems surrounding PETER itself: how it is tested, validated, and deployed.
      </p>
      <p>
        Establishing CI/CD and automated testing gives future development a stronger safety net and
        makes it easier to introduce changes without relying entirely on manual verification.
      </p>
      <p>Future <code>0.9.x</code> releases will continue to focus on:</p>
      <ul>
        <li>Stability</li>
        <li>Bug fixes</li>
        <li>Testing coverage</li>
        <li>Performance</li>
        <li>Deployment improvements</li>
        <li>Production readiness</li>
      </ul>
    </section>

    <section>
      <h2>🚀 Deployment</h2>
      <p>
        <code>v0.9.5</code> is tagged as a release in Git and identifies the exact commit containing
        these infrastructure improvements.
      </p>
      <p>
        Automated deployment is now supported through the project's CI/CD workflows. Deployment
        environments may be configured independently for different stages of development.
      </p>
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
      <h3>v0.9.5 — Infrastructure Improvements</h3>
      <p>
        PETER's development and deployment infrastructure has been strengthened with CI/CD,
        automated unit and end-to-end testing, improved code quality checks, and various application
        refinements.
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
