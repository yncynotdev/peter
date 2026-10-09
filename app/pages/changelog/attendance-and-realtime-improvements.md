# PETER v0.9.9 — Attendance & Realtime Improvements

**Beta Release** · Internal

## Overview

`v0.9.9` introduces several improvements to PETER's attendance management system, focusing on more complete attendance records, working-hours summaries, timezone configuration, and real-time data updates.

This release adds clock-out image capture, summarizes total working hours per cutoff period, and introduces Server-Sent Events (SSE) for attendance updates.

Alongside these features, the release includes improvements to administrative controls, API documentation, database migrations, and deployment workflows.

## 📸 Clock-Out Image Capture

This release introduces image capture for clock-out records, complementing the existing clock-in image functionality.

- Added image capture for clock-out events.
- Improved the completeness of attendance records.
- Provided additional visual information associated with attendance activity.

With both clock-in and clock-out images, PETER can maintain a more complete visual record of an attendance session.

## ⏱️ Working-Hours Summary

PETER now provides a summary of total working hours per cutoff period.

- Summarizes accumulated working hours for a cutoff.
- Makes attendance totals easier to review.
- Provides additional information for attendance monitoring and reporting.

This improvement helps administrators review accumulated working time without relying solely on individual attendance entries.

## 🔄 Real-Time Attendance Updates

Server-Sent Events (SSE) have been introduced for attendance data.

- Added an SSE endpoint for attendance updates.
- Enabled the application to receive server-pushed updates over a persistent HTTP connection.
- Reduced the need for repeated polling when receiving attendance updates.

This establishes a foundation for more responsive attendance monitoring in the administrative interface.

## 🌏 Timezone Settings

Timezone display settings are now available in the admin interface.

- Added timezone display configuration.
- Improved the presentation of attendance timestamps.
- Made attendance information easier to interpret according to the configured timezone.

This helps make displayed attendance times more consistent with the intended local time context.

## 🔧 Administrative Improvements

Several improvements were made to the admin interface and its controls.

- Improved email, image-file, and password input fields.
- Added ascending and descending sorting options to administrative table filters.
- Improved the overall attendance management experience.

These refinements make common administrative tasks more convenient and help users navigate and manage records more effectively.

## 🔌 API Improvements

The API received several refinements to support clearer integration and more consistent request handling.

- Improved the OpenAPI specification.
- Refined HTTP request parameters.
- Improved the consistency of API definitions and request handling.

These changes help maintain a clearer API contract for the client and future integrations.

## ⚙️ Infrastructure & Database

This release includes improvements to database migrations and deployment workflows.

- Added database migration execution before application deployment.
- Updated migration dependencies to support the migration process.
- Added migration scripts for database management.
- Synchronized database schema changes.
- Updated server dependencies.

These changes help ensure that database changes are applied as part of the deployment workflow, reducing inconsistencies between application code and database structure.

## 🐛 Fixes

This release also addresses several implementation issues.

- Fixed client runtime configuration variables.
- Fixed database migration dependency configuration.
- Addressed database schema synchronization issues.
- Improved request handling and administrative interface behavior.

## 📌 What This Release Means

`v0.9.9` focuses on making PETER's attendance system more complete and responsive.

Clock-out image capture adds more context to attendance records, while working-hours summaries provide a clearer view of accumulated time per cutoff. Timezone settings improve timestamp interpretation, and SSE establishes the foundation for real-time attendance updates.

Behind the scenes, API refinements and database migration improvements strengthen the system's development and deployment workflow.

## 🚀 Deployment

`v0.9.9` is tagged as a release in Git and identifies the commit containing these attendance, API, and infrastructure improvements.

Database migrations are incorporated into the deployment workflow. Deployment may occur separately from the GitHub release.

## ⚠️ Beta Status

PETER remains in beta and is under active development. Features, behavior, architecture, and implementation may continue to change before the eventual `1.0.0` stable release.

## Release Timeline

### v0.9.9 — Attendance & Realtime Improvements

Introduced clock-out image capture, working-hours summaries per cutoff, timezone display settings, and SSE-based attendance updates, alongside administrative refinements and improved database migration workflows.
