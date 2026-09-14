# PETER

<p align="center">
  <img src="assets/peter-logo.svg" alt="PETER" width="180">
</p>

<p align="center">
  <strong>Attendance Management System</strong>
</p>

<p align="center">
  A modern attendance system built for reliable, camera-assisted attendance tracking.
</p>

<p align="center">
  <a href="#features">Features</a>
  ·
  <a href="#status">Status</a>
  ·
  <a href="#license">License</a>
</p>

---

## ✨ Features

### 📸 Camera-Assisted Attendance

Capture attendance through a camera-assisted workflow designed to help prevent proxy or fraudulent attendance.

- Camera-based attendance capture
- Attendance photo support
- Image validation
- Clock-in and clock-out tracking
- No biometric template storage required

### 📅 Attendance Management

Review and manage attendance records through a focused administrative interface.

- Daily attendance records
- Calendar-based date filtering
- Attendance status tracking
- Attendance summaries
- Clock-in / clock-out history
- Schedule-aware attendance handling

### 👥 People Management

Manage the people whose attendance is recorded by the system.

- Student and employee records
- Flexible member types
- Account and profile management
- Organization-specific terminology

### 🔐 Authentication & Administration

Provide administrators with the tools needed to manage the system securely.

- User authentication
- Administrative dashboard
- Protected application areas
- Administrative configuration

### ☁️ Cloud Infrastructure

Designed to run on modern cloud infrastructure.

- Cloudflare Workers
- Cloudflare Pages
- Cloudflare R2
- PostgreSQL-compatible databases

### 🧪 Testing

Attendance is a critical workflow, so automated testing is part of the project.

- Unit tests
- API validation tests
- Authentication tests
- Attendance clock-in/out tests
- Timezone handling tests
- End-to-end tests

---

## 🛠️ Built With

| Technology | Purpose |
| --- | --- |
| **Nuxt** | Web application |
| **Nuxt UI** | User interface |
| **Hono** | API / backend |
| **TypeScript** | Application language |
| **PostgreSQL** | Database |
| **Better Auth** | Authentication |
| **Cloudflare** | Hosting & infrastructure |
| **Playwright** | End-to-end testing |

---

## 📸 How It Works

```text
┌──────────────┐
│    Person    │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ Camera Attendance│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Attendance Record│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Review & Reports │
└──────────────────┘
```

The system keeps the attendance workflow simple for users while giving administrators the tools needed to review and manage records.

---

## 🚧 Status

**Active development**

PETER is actively developed and continues to receive improvements to its attendance workflows, administration features, testing, and infrastructure.

Current development releases use the `0.x` version range while the system continues to evolve.

---

## 📄 License

PETER is **proprietary software**.

The source code is maintained by its author. Use, modification, deployment, redistribution, and commercial use are subject to the applicable license or agreement.

See the repository's license terms for more information.

---

<p align="center">
  <sub>© PETER · Attendance Management System</sub>
</p>
