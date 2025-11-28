# Task Management Web/App System

## Project Overview
This is a Task Management System with **user authentication, role-based access, and task CRUD operations**. Users can create, update, delete, and view tasks. Admins can manage users. The system is built with **Node.js (Express) backend** and **React frontend** with JWT-based authentication.

---

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Frontend:** React, Axios, React Router
- **Authentication:** JWT
- **Roles:** user, manager, admin
- **Optional:** Docker

---

## Features
- User Registration & Login
- JWT Authentication
- Role-based access (user, manager, admin)
- Task CRUD operations:
  - Create new tasks
  - Edit/update tasks
  - Delete tasks
  - View task list
  - Search & filter tasks by status or title
- Dashboard showing tasks with status (Pending, In Progress, Completed)

---

## Seed Users (for Demo)
| Role    | Email                 | Password     |
|---------|----------------------|-------------|
| Admin   | admin@example.com     | Admin123!   |
| Manager | manager@example.com   | Manager123! |
| User    | user@example.com      | User123!    |

---

## Backend Setup

1. Navigate to backend folder:
```bash
cd backend
Install dependencies:

npm install


Start backend server (development):

npm run dev
# or: node src/server.js


Seed database (optional):

node seed.js


Test APIs using Postman collection: postman_collection.json

Frontend Setup

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Set API URL in .env:

REACT_APP_API_URL=http://localhost:5000/api


Start frontend:

npm start


Open browser at http://localhost:3000

Available APIs
Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login and receive JWT

Users (Admin only)

GET /api/users → List all users

PUT /api/users/:id/role → Update user role

Tasks

GET /api/tasks → List tasks (supports ?status= and ?q= filters)

POST /api/tasks → Create new task

GET /api/tasks/:id → Get single task

PUT /api/tasks/:id → Update task

DELETE /api/tasks/:id → Delete task

Role-based Access

User: Create, edit, delete own tasks

Manager: View & manage tasks of all users

Admin: Manage all tasks and users

Demo Video

A 2–5 minute demo is included: demo-recording.mp4
Highlights:

User registration & login

Dashboard with task list

Create, edit, delete tasks

Search & filter functionality

Role-based views

Optional Docker Setup

Build and run with Docker Compose:

docker-compose up --build

Notes

Use strong passwords and keep JWT secret safe.

Frontend token is stored in localStorage.

Use Postman to test APIs before frontend integration.

Minimal styling for quick demo; can be enhanced later.

Contact / Repo

GitHub: [Your GitHub Repo Link]

Demo video: demo-recording.mp4


