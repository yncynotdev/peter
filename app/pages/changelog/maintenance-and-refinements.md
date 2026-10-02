# PETER — Maintenance & Refinements

**Beta Release** · Internal

## Overview

This release is a minor maintenance update focused on fixes, UI refinements, security improvements, and development workflow changes across PETER.

No major features were introduced. Instead, this release addresses smaller issues and improves consistency across the application.

## 🔧 Improvements

Several smaller improvements were made across the system.

- Improved staff attendance statistics in the admin interface.
- Attendance statistics now provide total attendance counts.
- Improved admin file-based routing structure.
- Added a fallback landing page for the index route.
- Improved layouts and redirects for login and index pages.
- Improved image URL handling for avatar uploads.
- Improved R2 configuration for remote development environments.

## 🔐 Security

Security-related improvements were also included as part of the ongoing maintenance of PETER.

These changes further refine the application's security configuration and help maintain a safer baseline as the system continues to evolve.

## ⚙️ Development & Infrastructure

The development environment received several maintenance updates.

- Migrated the client package manager from pnpm to Bun.
- Added minimal `AGENTS.md` guidance for agentic coding workflows across the client and server.
- Updated project dependencies.
- Refined development and deployment configuration.

The new agent guidance provides coding agents with essential project context and conventions when working within the PETER codebase.

These changes help keep the development environment consistent and easier to maintain.

## 🐛 Fixes

This release includes several minor fixes across the application.

- Fixed avatar image URL handling.
- Fixed login and index page layouts.
- Fixed redirects between application routes.
- Fixed admin routing behavior.
- Fixed R2 remote binding configuration.

## 📌 What This Release Means

This is a small maintenance release focused on keeping PETER stable, consistent, and easier to maintain.

The changes in this version are primarily incremental improvements rather than major new functionality. They address issues discovered during development while refining the application's UI, security, infrastructure, and development workflow.

Future `0.9.x` releases will continue to focus on:

- Stability
- Bug fixes
- Refinement
- Testing
- Performance
- Production readiness

## ⚠️ Beta Status

PETER remains in beta and is under active development. The architecture, behavior, features, and implementation may continue to change before the eventual `1.0.0` stable release.

## Release Timeline

### Maintenance & Refinements

A minor maintenance update containing fixes, UI refinements, security improvements, dependency updates, and development workflow improvements.
