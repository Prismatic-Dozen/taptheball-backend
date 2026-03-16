# 🎈 Balloon Pop Rush – Backend API

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production--Ready-success)

Backend service for **Balloon Pop Rush**, a fast-paced Android arcade game built with Kotlin + Native C++ (OpenGL).

This backend handles:

* 🔐 Google Play Games authentication
* 🎯 High score management
* 🏆 Leaderboard system
* 🛡 Secure JWT sessions

---

## 🚀 Live Architecture Overview

```text
Android App (Kotlin + OpenGL)
        │
        │  ID Token
        ▼
Express Backend (JWT + Prisma)
        │
        ▼
PostgreSQL Database
```

---

# ✨ Features

* ✅ Google Play Games ID Token verification
* ✅ JWT Authentication
* ✅ High score update logic (only saves highest)
* ✅ Leaderboard (Top players sorted DESC)
* ✅ Prisma ORM
* ✅ Swagger API Docs
* ✅ Clean modular structure
* ✅ Production-ready error handling

---

# 🛠 Tech Stack

| Layer     | Technology          |
| --------- | ------------------- |
| Runtime   | Node.js             |
| Framework | Express.js          |
| ORM       | Prisma              |
| Database  | PostgreSQL / MySQL  |
| Auth      | Google OAuth2 + JWT |
| Docs      | Swagger             |

---

# 📁 Project Structure

```
backend/
│
├── src/
│   ├── auth/
│   ├── score/
│   ├── middleware/
│   ├── lib/
│   └── app.js
│
├── prisma/
│   └── schema.prisma
│
├── server.js
├── package.json
└── .env
```

---

# ⚙️ Installation

```bash
git clone https://github.com/your-username/balloon-pop-rush-backend.git
cd balloon-pop-rush-backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file:

```env
PORT=5000

DATABASE_URL="postgresql://user:password@localhost:5432/balloonpop"

JWT_SECRET=your_super_secret_key

GOOGLE_CLIENT_ID=your_google_web_client_id
```

---

# 🗄 Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

---

# ▶️ Run the Server

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

Server runs at:

```
http://localhost:5000
```

---

# 🔐 Authentication Flow

1️⃣ Android app signs in with Google Play Games
2️⃣ App sends `idToken` to:

```
POST /auth/playgames
```

3️⃣ Backend:

* Verifies token
* Creates user (if new)
* Returns JWT

---

# 📌 API Endpoints

## 🔑 Auth

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| POST   | `/auth/playgames` | Login/Register with Google |

---

## 🎯 Score

| Method | Endpoint      | Description               |
| ------ | ------------- | ------------------------- |
| POST   | `/score/save` | Save or update high score |
| GET    | `/score/me`   | Get logged-in user score  |
| GET    | `/score/top`  | Get leaderboard           |

---

# 📊 Example Request

### Save Score

```http
POST /score/save
Authorization: Bearer <JWT_TOKEN>
```

```json
{
  "score": 150
}
```

---

# 🧠 Leaderboard Logic

* Only highest score is stored
* Updates only if:

  ```
  newScore > existingScore
  ```
* Leaderboard sorted:

  ```
  ORDER BY score DESC
  ```

---

# 📖 API Documentation

If Swagger is enabled:

```
http://localhost:5000/api-docs
```

---

# 🛡 Security

* Google ID Token verification
* JWT Middleware protection
* Environment variable protection
* Centralized error handler
* Input validation

---

# 🌍 Deployment

Recommended platforms:

* 🚀 Render
* 🚀 Railway
* 🚀 VPS (Ubuntu + PM2)
* 🚀 Docker

Example with PM2:

```bash
pm2 start server.js --name balloon-api
```

---

# 🎮 Related Project

Android Game: **Balloon Pop Rush**

Built using:

* Kotlin
* Native C++ (OpenGL Renderer)
* Particle effects + glow
* Difficulty scaling
* 30-second arcade mode

---

# 👨‍💻 Author

**Chiranjibi Sahu**
UI/UX Developer → Full Stack & Game Developer 🚀

---

# 📜 License

MIT License
