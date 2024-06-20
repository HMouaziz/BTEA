# Project Requirement Document

## Project Title
GoDoIt: Simple Lightweight Task Manager

## Project Overview
Develop a simple, lightweight task manager application called **GoDoIt**, similar to Microsoft To-Do. The application will have a React front end, a Go backend, and a PostgreSQL database. It will include an authentication framework with Single Sign-On (SSO) and be deployed in a Dockerized environment for both development and temporary production testing purposes.

## Objectives
- Develop a user-friendly task management application.
- Implement a secure and efficient backend service.
- Provide a robust authentication mechanism with SSO.
- Ensure the application can be easily deployed in different environments using Docker.

## Functional Requirements

### Task Management
- **Task Creation**: Users can create new tasks with a title and description.
- **Task Editing**: Users can edit existing tasks.
- **Task Deletion**: Users can delete tasks.
- **Task Listing**: Users can view a list of their tasks.
- **Task Completion**: Users can mark tasks as completed.
- **Task Filtering**: Users can filter tasks based on their status (e.g., all tasks, completed tasks, pending tasks).

### User Authentication
- **User Registration**: New users can register for an account.
- **User Login**: Existing users can log in to the application.
- **SSO Integration**: Users can authenticate using Single Sign-On (SSO) with popular providers (e.g., Google, Facebook).
- **Session Management**: Secure session handling to keep users logged in.

## Non-Functional Requirements

### Performance
- The application should load within 2 seconds under normal conditions.
- The backend should handle at least 100 concurrent users.

### Security
- Use HTTPS for all communications.
- Store passwords securely using hashing algorithms.
- Implement input validation to prevent SQL injection and other attacks.

### Scalability
- The architecture should allow easy scaling of the frontend, backend, and database services.

### Maintainability
- Code should follow industry best practices and be well-documented.
- Use a consistent coding style and linting tools.

### Usability
- The user interface should be intuitive and responsive.
- Provide clear feedback for user actions (e.g., task creation, deletion).

### Portability
- The application should run on modern web browsers (Chrome, Firefox, Safari, Edge).
- Ensure the application can be deployed in both development and production environments using Docker.

## Technical Requirements

### Frontend
- **Framework**: React
- **Styling**: CSS-in-JS (e.g., styled-components) or CSS frameworks (e.g., Tailwind CSS)
- **State Management**: Redux or Context API
- **Routing**: React Router

### Backend
- **Language**: Go
- **Framework**: Gin or Echo for building the API
- **Authentication**: OAuth 2.0 and JWT for SSO

### Database
- **Database**: PostgreSQL
- **ORM**: GORM or sqlx

### Deployment
- **Containerization**: Docker for both development and production environments
- **Orchestration**: Docker Compose for managing multi-container environments

## Environment Setup

### Development
- Dockerized environment with separate containers for frontend, backend, and database.
- Hot reloading for frontend and backend code changes.

### Production (Temporary for Testing)
- Dockerized environment with separate containers for frontend, backend, and database.
- Automated deployment scripts.

## Milestones

1. **Project Setup** (2 days)
   - Initialize the project repository.
   - Set up the Docker environment.
   - Create initial project structure for frontend and backend.

2. **Frontend Development** (5 days)
   - Implement the task management UI.
   - Set up state management and routing.

3. **Backend Development** (5 days)
   - Set up the Go backend with necessary endpoints.
   - Implement database schema and ORM integration.

4. **Authentication** (3 days)
   - Implement user registration and login.
   - Integrate SSO.

5. **Integration** (2 days)
   - Connect frontend with backend services.
   - Implement task CRUD operations.

6. **Testing** (3 days)
   - Write unit and integration tests for frontend and backend.
   - Perform user acceptance testing.

7. **Deployment** (2 days)
   - Deploy the application in a Dockerized environment.
   - Conduct end-to-end testing in production-like conditions.

## Project Timeline
| Milestone             | Duration  |
|-----------------------|-----------|
| Project Setup         | 2 days    |
| Frontend Development  | 5 days    |
| Backend Development   | 5 days    |
| Authentication        | 3 days    |
| Integration           | 2 days    |
| Testing               | 3 days    |
| Deployment            | 2 days    |

