# SkillSphere
SkillSphere is a modern online learning platform built with Next.js that allows users to browse courses, view detailed course information, create accounts, and manage their learning journey through a personalized profile dashboard.

## Deployment
Visit the [Vercel](https://vercel.com) deployed link at [SkillSphere](https://skill-sphere-psjd.vercel.app).

## Getting started
- Clone the repository
```bash
    git clone https://github.com/jawadjb21/SkillSphere
```
- Install dependencies
```bash
    npm install
```
- Create a .env file
```text
    - MONGO_DB_CONNECTION=your_mongodb_connection_string 
    - BETTER_AUTH_URL=http://localhost:3000
    - BETTER_AUTH_SECRET=your_secret_key
```
- Run development server
```bash
    npm run dev
```
- Open:
http://localhost:3000

## Features
- User Authentication with Better Auth
- Email and Password Registration/Login
- Course Catalog with Search Functionality
- Course Details Page
- Dynamic Course Routing
- Course Curriculum View
- Responsive Design for Mobile, Tablet, and Desktop
- User Profile Dashboard
- Protected User Experience
- Modern UI with Tailwind CSS and DaisyUI

## Future Improvements
- Stripe integration.
- Course Enrollment System
- Wishlist Functionality
- User Progress Tracking
- Course Completion Certificates
- Instructor Dashboard
- Admin Panel

## Tech Stack
### Frontend
- Next.js 16
- React 19
- Tailwind CSS
- DaisyUI
- React Icons
- React Hook Form
- React Toastify

### Authentication
- Better Auth
### Database
- MongoDB