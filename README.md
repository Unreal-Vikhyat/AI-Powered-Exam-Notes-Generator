# 🚀 AI-Powered Exam Notes Generator

A full-stack AI SaaS platform that generates **exam-oriented notes, summaries, diagrams, and important questions in seconds** using Artificial Intelligence.

---

## 📌 Overview

This project is designed to solve the problem of inefficient exam preparation by providing **structured, concise, and AI-generated study material**. It helps students save time, improve revision, and focus on important concepts.

---

## ✨ Features

* 🧠 AI-based Notes Generation (Gemini AI)
* 📊 Diagrams, Charts & Graphs generation
* ⚡ One-click Revision Mode (short notes)
* 📚 Subject-wise & class-wise important questions
* 💳 Credit-based usage system
* 💰 Stripe payment integration
* 🔐 Secure Authentication (JWT + Google OAuth)
* 📜 Download Notes as PDF
* 🕘 User History tracking

---

## 🛠 Tech Stack

### 🔹 Frontend

* React.js (Vite)
* Tailwind CSS
* Redux

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB

### 🔹 APIs & Services

* Gemini AI (Content Generation)
* Stripe (Payments)
* Google OAuth (Authentication)

### 🔹 Deployment

* Render (Frontend + Backend)


---

## 🔄 Project Flow

1. User logs in (JWT / Google OAuth)
2. User enters topic
3. Request sent to backend API
4. Backend calls Gemini AI
5. AI generates structured notes
6. Credits deducted
7. Notes displayed + saved in DB

---

## 🧠 Key Learnings

* Building real-world AI SaaS applications
* Designing credit-based monetization systems
* Integrating third-party APIs (Gemini, Stripe, OAuth)
* Handling authentication and secure APIs
* Deploying full-stack apps on cloud

---

## ⚠️ Limitations

* Monolithic architecture (not microservices)
* Limited scalability on free-tier hosting
* No automated test coverage (planned)

---

## 🚀 Future Improvements

* Add unit & integration testing (Jest)
* Convert to microservices architecture
* Improve AI prompt customization
* Add voice input for notes generation
* Enhance UI/UX with personalization

---

## 👨‍💻 Author

Developed by **Vikhyat Sharma**

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!
