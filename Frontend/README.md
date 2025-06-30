# 🧾 Frontend Requirements – Task Management App

This document outlines the frontend architecture and implementation plan for the Task Management App built using **React**, including **lazy loading**, **error boundaries**, **JWT authentication**, and integration with the completed backend.

---

## 🚀 Setup

- npm install
- npm run dev


## 🚀 Tech Stack

- **Framework**: React with Vite
- **Routing**: React Router
- **Styling**: scoped component styling
- **HTTP Requests**: Axios 
- **Auth**: JWT stored in cookie
- **State Management**: React Context, useState
- **Additional**:
  + `https://react-hot-toast.com` or similar for notifications
  + `React.lazy` and `Suspense` for lazy loading
  + Custom `ErrorBoundary` component for global error handling

---

---

## 🧩 Core Features

### 🔐 Authentication

+ JWT saved in cookie
+ User info stored in React Context
+ Routes protected using `ProtectedRoute`

### 🔁 Routing (with lazy loading)

| Route        | Component     | Lazy Loaded? | Protected? |
|--------------|---------------|--------------|------------|
| `/login`     | Login         | ✅            | ❌         |
| `/signup`    | Signup        | ✅            | ❌         |
| `/dashboard` | Dashboard     | ✅            | ✅         |
| `/categories`  | CategoriesPage  | ✅            | ✅         |
| `/tasks`     | TasksPage     | ✅            | ✅         |

---

## 📄 Pages

### `/login`
+ Email + password form
+ Stores JWT in cookies
+ Toast success/failure

### `/signup`
+ Username, email, password
+ Toast success/failure

### `/dashboard`
- Sidebar + project/task overview
- User panel on the right
- Theme toggle / logout

### `/projects`
+ View, create, update, delete projects
+ Color + icon selector for new projects

### `/tasks`
- Filter by status, priority, category (later?)
+ Create/edit/delete tasks


---


## ✅ Optional Enhancements (LATER)

- [ ] Pagination and sorting in tasks
- [ ] User profile editing
- [ ] Light/dark theme toggle

---

