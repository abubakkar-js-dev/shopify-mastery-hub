# 🚀 Shopify Mastery Hub — Engineering the Next Era of Commerce

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://learnshopifymastery.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/github-repo-black?style=for-the-badge&logo=github)](https://github.com/abubakkar-js-dev/shopify-mastery-hub)

![Shopify Mastery Hub Hero](https://i.ibb.co.com/0ycQ46Dg/image.png)

## 🌟 Overview

**Shopify Mastery Hub** is not just another tutorial site; it's a high-performance development ecosystem designed for engineers who want to master the elite side of Shopify commerce. From deep-diving into **Liquid** to architecting **Headless** solutions and custom **App Architectures**, this platform is built to mirror the intensity and precision of real-world engineering.

The project features a sleek, industrial aesthetic with fluid animations, providing a premium experience for both students and administrators.

---

## ✨ Key Features

- **🏗️ 3-Month Engineering Roadmap**: A structured curriculum covering Liquid, Headless, and App Architecture, designed to scale with the student's expertise.
- **🎬 YouTube Playlist Import**: Instantly import any public YouTube playlist and generate a complete course module with AI enhancement (or skip AI for quick imports).
- **⚡ Industrial-Grade Design System**: A "Terminal-First" aesthetic featuring dark mode, glassmorphism, and high-precision micro-animations.
- **🔐 Enterprise-Grade Security**: Robust onboarding and session management powered by Firebase Auth and granular Firestore Security Rules.
- **📊 Professional Dashboards**: 
  - **User Dashboard**: Track progress, access blueprints, and manage your engineering curriculum.
  - **Admin Dashboard**: Real-time management of users, courses, and platform analytics with dynamic charts (Recharts).
- **🔄 Real-time Data Sync**: Centralized state management using React Context and Firestore for instant updates across the app.
- **🧠 AI-Powered Insights**: Integrated with Google Gemini for future-ready commerce logic and assistance.
- **📱 Fully Responsive**: Optimized for every screen, from high-end ultrawide monitors to mobile devices.

---

## 🛠️ Tech Stack

### Core
- **Next.js 16** (App Router, Server Components)
- **React 19**
- **TypeScript**

### Styling & Animation
- **Tailwind CSS 4** (Modern utility-first styling)
- **Framer Motion** (Fluid, industrial animations)

### Backend & Database
- **Firebase 12** (Authentication & Firestore)
- **Firestore Rules** (Granular security and access control)

### AI & APIs
- **Google Gemini** (AI-powered course generation and assistance)
- **YouTube Data API v3** (Playlist import functionality)

### Analytics & Tools
- **Recharts** (Visualizing platform growth)
- **Lucide Icons** (Clean, consistent iconography)
- **Serwist** (PWA support)

---

## 🎬 YouTube Playlist Import (New!)

One of the standout features of Shopify Mastery Hub is the ability to **instantly import any public YouTube playlist** and convert it into a structured course module.

### Key Features:
- ✅ **Import Any Public Playlist**: Works with any creator's public playlist
- ✅ **AI-Enhanced Course Generation**: Uses Google Gemini to enhance titles, descriptions, and generate tasks
- ✅ **Smart Fallback**: If Gemini API is unavailable, automatically falls back to a basic course structure
- ✅ **Skip AI Option**: Choose to skip AI and use the basic structure immediately
- ✅ **Preview & Confirm**: Full preview at every step - nothing is saved without explicit confirmation

### How It Works:
1. Paste YouTube playlist URL
2. Preview playlist and all videos
3. Choose: "Skip AI" or "Generate Course (AI-Enhanced)"
4. Review the complete course
5. Confirm and save to Firebase

---

## 🚀 Getting Started

To run this project locally and explore the architecture:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abubakkar-js-dev/shopify-mastery-hub.git
   cd shopify-mastery-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file based on `.env.example` and add your Firebase credentials and AI keys.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the lab:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the magic.

---

## 🏗️ Architecture & Best Practices

This project follows a **feature-first architecture** with clear separation of concerns:

- **Feature-first structure**: Code organized by feature, not by file type
- **Centralized Firebase access**: All Firestore paths and operations in one place
- **Business logic out of UI**: Heavy logic in services, hooks, and utilities
- **TypeScript throughout**: Full type safety across the entire application
- **Proper error handling**: Graceful fallbacks and user-friendly error messages

---

## 👨‍💻 Why I Built This

I created Shopify Mastery Hub to bridge the gap between "standard" Shopify development and "elite" engineering. I wanted to build a space that feels like a professional IDE—fast, focused, and aesthetically inspiring. This project showcases my ability to handle complex state management, real-time databases, and cutting-edge frontend frameworks like Next.js 16 and React 19.

---

## 📬 Let's Connect

Feel free to reach out if you want to talk about Shopify engineering, Next.js, or just to say hi!

- **GitHub**: [@abubakkar-js-dev](https://github.com/abubakkar-js-dev)
- **Live Project**: [Shopify Mastery Hub](https://learnshopifymastery.vercel.app/)

---

*Built with ❤️ by Abubakkar.*
