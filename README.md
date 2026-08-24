# 🤖 College AI Chatbot

A team-based **college assistant application** developed as our **BCA final-year project**.

The application combines a **student-facing chatbot** with an **administrative management system** for managing college information such as faculty, departments, FAQs, timetable, events, and announcements.

Both systems are connected to a **shared PostgreSQL database**.

---

## 📌 Project Overview

The project consists of two major components:

- 🤖 **Chatbot System** — Provides students with an interactive interface for asking college-related queries.
- 🛠️ **Admin System** — Allows administrators to manage college information through a dedicated dashboard.

The project was developed collaboratively by **Darshan Nikam** and **Tahir Khatik**, with each team member responsible for a different part of the application.

---

## 👥 Who Did What?

| Area | Darshan Nikam | Tahir Khatik |
|---|:---:|:---:|
| 🤖 Chatbot Frontend | — | ✅ |
| 🤖 Chatbot Backend | — | ✅ |
| 🛠️ Admin Frontend | ✅ | — |
| ⚙️ Admin Backend | ✅ | — |
| 🗄️ PostgreSQL Database Creation | ✅ | — |
| 🗄️ Database Design & Structure | ✅ | — |
| 🔄 CRUD Operations | ✅ | — |
| 🔐 Admin Authentication | ✅ | — |
| 🌐 Admin REST APIs | ✅ | — |
| 🧠 Chatbot Logic / NLP | — | ✅ |
| 🔗 Admin Database Integration | ✅ | — |
| 🔗 Chatbot Database Integration | — | ✅ |
| 🔌 Admin Frontend-Backend Integration | ✅ | — |
| 🔌 Chatbot Frontend-Backend Integration | — | ✅ |

### Responsibility Summary

**Darshan Nikam**

- Complete Admin Frontend
- Complete Admin Backend
- REST API development
- CRUD operations
- Admin authentication
- PostgreSQL database creation
- Database design and structure
- Database management
- SQLAlchemy integration
- Admin frontend-backend integration

**Tahir Khatik**

- Complete Chatbot Frontend
- Complete Chatbot Backend
- Chatbot logic
- NLP functionality
- Student-facing interaction
- Chatbot frontend-backend integration
- PostgreSQL integration for chatbot functionality

> Both systems use the same PostgreSQL database. The database was created and structured by Darshan, while the chatbot backend developed by Tahir connects to the shared database.

---

## 🏗️ Project Architecture

```text
                    COLLEGE AI ASSISTANT
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
      🤖 CHATBOT SYSTEM            🛠️ ADMIN SYSTEM
             │                           │
       ┌─────┴─────┐               ┌─────┴─────┐
       │           │               │           │
   Frontend     Backend         Frontend     Backend
       │           │               │           │
       └─────┬─────┘               └─────┬─────┘
             │                           │
             └─────────────┬─────────────┘
                           ▼
                  🗄️ POSTGRESQL
                     DATABASE
