# React User Management Application

## Overview
This project is a **React-based User Management Application** that integrates with the [Reqres API](https://reqres.in/) to perform user authentication, list users, and allow editing and deleting users. The application is structured into three levels of functionality.

## Features
### Level 1: Authentication
- A login screen where users authenticate using credentials.
- Authentication via the `POST /api/login` endpoint.
- Successful login stores the token and navigates to the **Users List** page.

### Level 2: List All Users
- Fetches user data from `GET /api/users?page=1`.
- Displays users in a structured format (table or cards) with **first name, last name, and avatar**.
- Implements pagination/lazy loading for navigation through user data.

### Level 3: Edit, Delete, and Update Users
- **Edit User:**
  - Opens a pre-filled form allowing updates to **first name, last name, and email**.
  - Updates user data using `PUT /api/users/{id}`.
- **Delete User:**
  - Removes a user using `DELETE /api/users/{id}`.
  - Updates the user list upon deletion.
- Displays success/error messages accordingly.

## Tech Stack
- **Frontend:** React.js
- **State Management:** Context API (Optional Redux)
- **HTTP Requests:** Axios / Fetch API
- **CSS Framework:** Bootstrap / Material-UI / Tailwind CSS
- **Routing:** React Router
- **Storage:** Local Storage / Session Storage

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reqres-user-management.git
   cd reqres-user-management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## Error Handling
- Handles API errors gracefully with appropriate messages.
- Form validation for login and edit screens.
- Redirects to login if the token is missing or expired.

## Bonus Features
- Implemented **client-side search and filtering** for users.
- **React Router** for seamless navigation.
- **Deployed the project** on a free hosting platform (Heroku/Vercel/Netlify). Link: [Live Demo](#) (Add your live link here)

## Contribution
Feel free to fork this repository and contribute by submitting pull requests!



