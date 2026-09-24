# PETER — Attendance Data Export

**Beta Release** · Internal

## Overview

This release introduces downloadable attendance reports, allowing attendance records to be exported as **PDF** or **Excel** files.

The primary focus is making attendance data easier to take outside of PETER for reporting, record keeping, and further analysis.

Alongside the export functionality, this release includes architectural improvements, staging and deployment changes, authentication refinements, and various fixes across the system.

## 📄 Attendance PDF Export

Attendance records can now be downloaded as a PDF document directly from the attendance interface.

With PDF export:

- Attendance records can be converted into a printable document.
- Current attendance data can be taken outside of the application.
- Reports can be retained for record keeping.
- Attendance information can be shared in a standardized document format.

The PDF export provides a convenient format for attendance reports that need to be viewed, printed, or archived.

## 📊 Attendance Excel Export

Attendance records can also be downloaded as an Excel file.

The Excel export makes attendance data more useful for further processing and analysis.

With Excel export:

- Attendance records can be downloaded as spreadsheet data.
- Exported files can be opened and further processed in spreadsheet applications.
- File names include relevant dates and categorization.
- Attendance data can be retained separately from the application.

Together with PDF export, this gives attendance data two practical output formats depending on whether the goal is **reporting** or **further data processing**.

## 🏗️ System Architecture

This release introduces the foundation for creating separate PETER system instances.

A new base layer establishes a structure for instance-specific customization while keeping the core PETER architecture reusable.

This allows future instances to have their own configuration and application-specific behavior without requiring the core system to be duplicated.

The architectural direction established in this release is intended to support PETER as a reusable system rather than a single client-specific implementation.

## 🚀 Staging & Deployment

A staging environment has been introduced to improve the development and deployment workflow.

CI/CD workflows were also refined so that:

- Pull requests run automated tests.
- Selected branches trigger deployments after being merged.
- Deployment projects use the appropriate environment configuration.
- Staging can be used to validate changes before production deployment.

These changes provide a clearer separation between development, testing, and deployment.

## 🔐 Authentication & Security

Several authentication-related improvements were included in this release.

- Improved the client authentication plugin.
- Fixed client login redirection.
- Improved password-reset OTP page layouts.
- Removed cross-subdomain cookies to prevent authentication sessions from being accessible across unrelated subdomains.
- Improved multi-factor authentication setup.

These changes improve the isolation and consistency of authentication across PETER instances.

## 🔧 Improvements

Several smaller improvements were made across the application.

- Improved R2 bucket handling and scalability.
- Centered components across application layouts.
- Added client-side application headers and footers.
- Increased pagination limits for attendance-related data.
- Improved Excel file naming with dates and categorization.
- Updated the database through the latest migration.
- Cleaned up unused or transitional implementation details.
- Improved avatar image upload handling.
- Updated deployment project naming and configuration.

## 🐛 Fixes

This release also includes various fixes across the system.

- Fixed attendance timezone handling.
- Fixed PDF attendance downloads.
- Fixed Excel attendance downloads.
- Fixed client login redirects.
- Fixed avatar errors during image uploads.
- Fixed authentication cookie behavior.
- Fixed deployment configuration issues.
- Fixed layout issues on authentication pages.

## 📌 What This Release Means

This release is primarily about making PETER's attendance data more useful outside the application.

The addition of **PDF and Excel exports** allows attendance records to be transformed into practical reports and datasets that can be archived, printed, shared, or further analyzed.

At the same time, the introduction of the instance architecture and staging workflow moves PETER toward a more reusable and maintainable system structure.

The release therefore combines a major user-facing capability with important architectural groundwork for the future of PETER.

Future `0.9.x` releases will continue to focus on:

- Stability
- Bug fixes
- Refinement
- Testing
- Deployment improvements
- Instance customization
- Production readiness

## 🚀 Deployment

This release is tagged in Git and identifies the exact commit containing the attendance export functionality and accompanying system improvements.

Deployment may occur separately from the GitHub release.

## ⚠️ Beta Status

PETER remains in beta and is under active development. The architecture, behavior, features, and implementation may continue to change before the eventual `1.0.0` stable release.

## Release Timeline

### Attendance Data Export

Introduced PDF and Excel downloads for attendance records, providing practical formats for reporting, archiving, and further analysis.

### Instance Architecture

Introduced the base layer for creating separate PETER system instances while keeping the core architecture reusable.

### Infrastructure & Refinement

Added staging improvements, refined CI/CD behavior, strengthened authentication, and introduced various system fixes and refinements.
