# Task C – Login Page

This task implements a simple **login page** using **HTML, CSS, and JavaScript** (no backend).  
All required validations, layout rules, and successful login behavior are included.

---

## Features

### Page Layout

- Centered login form on a plain background
- Includes:
  - Email input
  - Password input
  - Login button
  - Optional “Forgot password?” link
- Responsive design (desktop & mobile)
  - Mobile view removes card border for a clean full-width layout

### Validation Rules

**Email**

- Must not be empty
- Shows an error if the email does not exist  
  (validated using a small hardcoded user list)

**Password**

- Must be **8–16 characters**
- Must include:
  - one uppercase letter
  - one lowercase letter
  - one number
  - one symbol
- Shows an error if the format is invalid
- Shows an error if the email exists but the password is incorrect

### Successful Login

- Hides the login form
- Displays a welcome message (`Welcome, [email]!`)
- Includes a **Logout** button that returns to the login page

---

## Additional UI Feature

### Light/Dark Mode Toggle

- Custom toggle switch with sun/moon icons
- Theme handled using CSS variables (`--bg`, `--card`, `--text`, etc.)

---

## How to Run

Open the following file in any browser:

index.html

---

## Sample Valid Credentials

Email: test@example.com
Password: Test123!

Email: user2@example.com
Password: test123!A

---

## Reference (Light/Dark UI Pattern)

Light/Dark toggle reference: [Create a Stunning Light/Dark Mode Toggle in 5 Minutes](https://medium.com/@webdevtales/create-a-stunning-light-dark-mode-toggle-in-5-minutes-189a66d52e98)

---
