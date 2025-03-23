# Simple Authentication Pagination (Front-End Only)

This repository presents a minimalist yet user-friendly authentication interface built with **[Next.js 15](https://nextjs.org/ "NextJS")**, **[TypeScript](https://www.typescriptlang.org/docs/ "TypeScript")**, **[TailwindCSS](https://tailwindcss.com/ "TailwindCSS")**, and **[Shadcn UI](https://ui.shadcn.com/ "Shadcn UI")** components.

## Authentication System

The application features a secure authentication system with Sign-Up and Sign-In functionalities:

### Sign-Up

- Creates a new user account with validated credentials
- Automatically stores user data in a local SQLite database (`users.db`)
- Implements form validation to ensure data integrity
- Database is created automatically on first user registration

### Sign-In

- Authenticates users against stored credentials in `users.db`
- Features comprehensive form validation
- Requires prior account creation through the Sign-Up process

> **Note:** The application uses a local database system, meaning all user data is stored locally on your machine.

The project consists of four primary pages:

### Welcome Page

**Welcome Page** presents users with two options: creating a new account or signing in to an existing one. These options are accessible through dedicated buttons.

![1742722788140](image/README/1742722788140.png)

### Sign-Up Page

The **Sign-Up Page** presents a streamlined registration process within a minimalist card component. Users are prompted to input their first name, last name, desired username, email, and password. For those who prefer to sign in to an existing account, a sign-in button is available, which transitions to a warning **Red-600** background when hovered. Additionally, a return home link is provided for users who wish to navigate back to the main page.

![1742722578975](image/README/1742722578975.png)

### Sign-In Page

The **Sign-In Page** employs a similar design to the **Sign-Up Page**, utilizing the same card and button components, including the back buttons. To sign in, users are required to input their username or email address, along with their password

![1742722635602](image/README/1742722635602.png)

### Thank You Page

The **Thank You Page** is a confirmation page displayed after successful registration or sign-in. A return button allows users to navigate back to the **Welcome Page**.

![1742722768979](image/README/1742722768979.png)

### Form Validation

#### Sign-Up

![1742722680221](image/README/1742722680221.png)

#### Sign-In

![1742722708139](image/README/1742722708139.png)

![1742722740416](image/README/1742722740416.png)
