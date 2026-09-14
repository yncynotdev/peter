# PETER v0.9.5 — Infrastructure Improvements

**Beta Release** · Internal

## Overview

`v0.9.5` focuses on strengthening PETER's infrastructure, development workflow, and overall reliability.

This release introduces automated CI/CD pipelines, backend unit tests, client-side end-to-end testing, and improved code quality checks.

Alongside the infrastructure work, this release also includes improvements to the admin interface, attendance filtering, realtime data handling, and the PETER icon.

## 🚩 Milestone: Infrastructure Improvements

The primary goal of this release was to establish a more reliable foundation for developing, testing, and deploying PETER.

With this milestone:

- Continuous integration and deployment workflows have been introduced.
- Server deployments can now be handled through GitHub Actions and Wrangler.
- Core server functionality is covered by automated unit tests.
- Client functionality can be verified through end-to-end tests.
- Linting and formatting checks are integrated into the development workflow.
- Cloudflare Workers environments are configured with clearer project separation.

These changes establish the foundation for more consistent testing and deployment as PETER continues toward production readiness.

## 🧪 Testing

Automated testing was introduced across both the server and client applications.

- Added unit tests for core server functionality.
- Added end-to-end testing for important client workflows.
- Improved confidence in attendance-related functionality.
- Established testing as part of the ongoing development workflow.

The test suite will continue to grow as additional functionality is implemented and production requirements become clearer.

## ⚙️ CI/CD

PETER now has automated workflows for validating and deploying changes through GitHub Actions.

- Added GitHub Actions workflows for the project.
- Added automated Cloudflare deployment through Wrangler.
- Configured separate deployment environments for the server.
- Improved dependency handling for both Bun and pnpm-based projects.
- Added automated linting and formatting checks.
- Moved CI/CD configuration into the project's root workflow directory.

This reduces the amount of manual work required to validate and deploy changes while making deployments more predictable.

## 🔧 Improvements

Several application-level improvements were also included in this release.

- Improved realtime data handling in the admin interface.
- Improved attendance filtering in the admin interface.
- Improved the consistency of admin attendance data.
- Improved Cloudflare Wrangler environment configuration.
- Revamped the PETER icon design and updated related implementation code.

## 🐛 Fixes

This release also includes smaller fixes and adjustments discovered during development.

- Fixed attendance filtering behavior in the admin interface.
- Fixed CI workflow configuration and project paths.
- Fixed dependency and Wrangler version configuration in deployment workflows.
- Addressed various development workflow inconsistencies.

## 📌 What This Release Means

`v0.9.5` is primarily an infrastructure and reliability milestone.

Unlike a release centered around a single user-facing feature, this version focuses on improving the systems surrounding PETER itself: how it is tested, validated, and deployed.

Establishing CI/CD and automated testing gives future development a stronger safety net and makes it easier to introduce changes without relying entirely on manual verification.

Future `0.9.x` releases will continue to focus on:

- Stability
- Bug fixes
- Testing coverage
- Performance
- Deployment improvements
- Production readiness

## 🚀 Deployment

`v0.9.5` is tagged as a release in Git and identifies the exact commit containing these infrastructure improvements.

Automated deployment is now supported through the project's CI/CD workflows. Deployment environments may be configured independently for different stages of development.

## ⚠️ Beta Status

PETER remains in beta and is under active development. The architecture, behavior, features, and implementation may continue to change before the eventual `1.0.0` stable release.

## Release Timeline

### v0.9.5 — Infrastructure Improvements

PETER's development and deployment infrastructure has been strengthened with CI/CD, automated unit and end-to-end testing, improved code quality checks, and various application refinements.
