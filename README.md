# Portfolio Website - Frontend

This is the frontend for a personal portfolio website built with NextJS and TypeScript. It provides a responsive, accessible, and dynamic user interface for showcasing blogs, projects, and personal information, with a private dashboard for the portfolio owner.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Frontend](#running-the-frontend)
- [Folder Structure](#folder-structure)
- [Bonus Features](#bonus-features)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack
- **Framework**: NextJS
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Notifications**: react-hot-toast
- **Optional Bonus**: React Quill (Rich Text Editor)

## Features
### Public Pages
- **Blog Management**:
  - View all blogs on a dedicated page using Incremental Static Regeneration (ISR) with a revalidation period.
  - View individual blog pages generated dynamically using `getStaticPaths` and ISR.
- **About Me Section**:
  - Static content (name, bio, contact info, work experience, skills) rendered using Server-Side Generation (SSG) for fast performance.
- **Project Showcase**:
  - Displays project details (thumbnail, description, features, live site link) using ISR for dynamic updates.

### Private Pages (Owner Only)
- **Dashboard**:
  - Private dashboard for managing blogs and projects.
  - CRUD operations for blog posts (Create, Read, Update, Delete) via API calls to the backend.

### Bonus Features (Optional)
- **Rich Text Editor**: Integrated React Quill for creating and editing blog/project content with formatting options (bold, italic, links, images).
- **UI/UX Enhancements**:
  - Interactive UI with carousels, cards, and smooth transitions.
  - Lazy-loading for images and heavy assets.
  - Accessibility-compliant components with semantic HTML.

## Setup Instructions
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the `frontend` directory and configure the required environment variables (see [Environment Variables](#environment-variables)).

## Environment Variables
Create a `.env.local` file in the `frontend` directory with the following:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Running the Frontend
Run the development server:
```bash
npm run dev
```
Access the application at `http://localhost:3000`.



## Bonus Features
- **Rich Text Editor**: React Quill for enhanced content creation.
- **UI/UX**: Carousels, skeleton loaders, and smooth transitions for a polished experience.
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility.
- **Lazy-Loading**: Optimized asset loading for improved performance.

## Error Handling
- **Form Validation**: Client-side validation for all forms (e.g., login, blog creation) with clear error messages (e.g., required fields, invalid email).
- **API Errors**: User-friendly error messages for failed API requests (e.g., 401 Unauthorized).
- **Toast Notifications**: Success and error feedback using react-hot-toast.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License.