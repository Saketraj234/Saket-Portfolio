# Modern MERN Portfolio

A clean, modern, and responsive full-stack portfolio website built with the MERN stack.

## Features

- **Frontend**: React, Tailwind CSS, Framer Motion, React Simple Typewriter, React Icons.
- **Backend**: Node.js, Express, MongoDB (Mongoose).
- **UI/UX**:
  - Smooth scroll navigation.
  - Typing effect in the hero section.
  - Interactive project cards.
  - Responsive contact form with backend integration.
  - Loading animation.
  - Fully responsive design for mobile, tablet, and desktop.

## Prerequisites

- Node.js installed.
- MongoDB installed and running locally.

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd Portfolio
```

### 2. Setup Backend
```bash
cd backend
npm install
# Ensure MongoDB is running on mongodb://localhost:27017/portfolio
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

## Folder Structure

- `frontend/`: React application.
  - `src/components/layout`: Navbar, Footer.
  - `src/components/sections`: Hero, About, Skills, Projects, Contact.
  - `src/components/ui`: Loader, ThemeToggle.
  - `src/hooks`: Custom hooks (e.g., useDarkMode).
- `backend/`: Node.js/Express API.
  - `models/`: Database schemas.
  - `routes/`: API endpoints.
