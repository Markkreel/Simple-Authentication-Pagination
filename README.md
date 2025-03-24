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

### Sign-Up Page

The **Sign-Up Page** presents a streamlined registration process within a minimalist card component. Users are prompted to input their first name, last name, desired username, email, and password. Additionally, a return home link is provided for users who wish to navigate back to the main page.

### Sign-In Page

The **Sign-In Page** employs a similar design to the **Sign-Up Page**, utilizing the same card and button components, including the back buttons. To sign in, users are required to input their username or email address, along with their password

### Thank You Page

The **Thank You Page** serves as a personalized confirmation page displayed after successful registration or sign-in. It features a welcome message that includes the user's last name, creating a more personalized experience. The page maintains user data persistence, ensuring that the welcome message remains consistent across sessions. A return button allows users to navigate back to the **Welcome Page**.

**Last Updated:** 25-04-2025 ⸺ **Last Reviewed:** 25-04-2025
