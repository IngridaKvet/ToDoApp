# 🧾 Backend Requirements – Task Management App

This document outlines the backend logic, database structure, and API endpoints required to build the **Task Management System** using **Node.js**, **Express**, and **PostgreSQL**.

---

### Initialization
* SQL tables backups are in the SQL_tables folder or additionally there's a database backup in Backend folder.
* The bruno endpoints for testing in ToDoApp folder
* npm install
* npm run start

---

## 📁 Project Structure

- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Authentication**: JWT + argon2

---

## 🧑‍💼 User Service

### Tables

#### `users`

| Field      | Type     | Description               |
|------------|----------|---------------------------|
| id         | serial   | Primary key               |
| username   | varchar  | User display name         |
| email      | varchar  | Unique email address      |
| password   | varchar  | Hashed password           |


### API Endpoints

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| POST   | `/users/register` | Register a new user        |
| POST   | `/users/login`    | Log in and receive JWT     |
| POST   | `/users/logout`    | Logout and delete JWT     |
| GET    | `/users/me`       | Get current user (auth req.) |
| PATCH    | `/users`      | Update current user profile        |

---

User is connect to categories via users_categories tabl (user_id, category_id)

## 📁 Category Service

### Table

#### `categories`

| Field         | Type     | Description                     |
|---------------|----------|---------------------------------|
| id            | serial   | Primary key                     |
| category_name  | varchar  | Name of the project             |
| category_color | varchar  | Color code             |
| category_icon  | varchar  | Icon identifier        |

### API Endpoints

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | `/categories`       | Get all categories for user  |
| POST   | `/categories`       | Create a new category       |
| PUT    | `/categories/:id`   | Update category by ID       |
| DELETE | `/categories/:id`   | Delete category            |

---

## ✅ Task Service

### Table

#### `tasks`

| Field       | Type                         | Description                          |
|-------------|------------------------------|--------------------------------------|
| id          | serial                       | Primary key                          |
| title       | varchar                      | Task title                           |
| description | varchar                      | Task description                     |
| deadline    | date                         | Task deadline                        |
| category_id  | integer (FK to `categories.id`) | Associated category                |
| created_at  | timestamp with time zone     | When task was created                |
| status      | varchar                      | todo, in_progress, done |
| priority  | varchar                      |  low, medium, high          |


### API Endpoints

| Method | Endpoint                                | Description                          |
|--------|-----------------------------------------|--------------------------------------|
| GET    | `/tasks`            | Get all user tasks          |
| POST   | `/tasks`            | Create a new task in a category       |
| PUT    | `/tasks/:id`                            | Update a task by ID                  |
| DELETE | `/tasks/:id`                            | Delete a task                        |






#### LATTER Optional Filtering / Query Endpoints

| Method | Endpoint                                | Description                          |
|--------|-----------------------------------------|--------------------------------------|
| GET    | `/tasks?status=done`                    | Filter tasks by status               |
| GET    | `/tasks?priority=high`                  | Filter tasks by priority             |
| GET    | `/tasks?category=work`                  | Filter by category                   |
| GET    | `/tasks?from=YYYY-MM-DD&to=YYYY-MM-DD`  | Get tasks within a date range        |
| GET    | `/tasks?search=landing`                 | Search tasks by title                |

---

