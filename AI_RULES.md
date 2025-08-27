# AI Rules for HiveSphere Application

This document outlines the core technologies and best practices for developing the HiveSphere application. Adhering to these guidelines ensures consistency, maintainability, and optimal performance.

## Tech Stack Overview

*   **React**: The primary JavaScript library for building user interfaces.
*   **TypeScript**: All application code is written in TypeScript for type safety and improved developer experience.
*   **Tailwind CSS**: A utility-first CSS framework used for all styling, enabling rapid and consistent UI development.
*   **Shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, providing a consistent and accessible UI foundation.
*   **React Router**: Used for declarative routing within the application, managing navigation between different pages.
*   **Tanstack Query (React Query)**: Manages server state, data fetching, caching, and synchronization.
*   **Lucide React**: A library providing a set of beautiful and customizable SVG icons.
*   **Zod & React Hook Form**: Used together for robust form validation and management.
*   **Sonner**: A modern toast notification library for providing user feedback.
*   **Recharts**: A charting library built with React and D3 for data visualization.
*   **Vite**: The build tool used for a fast development experience and optimized production builds.

## Library Usage Rules

To maintain a consistent and efficient codebase, please follow these rules when choosing libraries for specific functionalities:

*   **UI Components**:
    *   **Always use Shadcn/ui components** for standard UI elements (e.g., Buttons, Cards, Inputs, Selects, Tabs, Dialogs, Tooltips, Sliders, Checkboxes, Switches, Carousels).
    *   **Do NOT modify Shadcn/ui component files directly.** If a component needs significant customization or a new component is required, create a new component in `src/components/` and style it using Tailwind CSS.
*   **Styling**:
    *   **Exclusively use Tailwind CSS** for all styling. Leverage utility classes for layout, spacing, colors, typography, and responsiveness.
    *   Custom CSS should be minimal and, if absolutely necessary for global styles or complex animations not achievable with Tailwind, added to `src/index.css`.
*   **Routing**:
    *   **Use React Router** for all client-side navigation.
    *   All main application routes should be defined in `src/App.tsx`.
*   **State Management & Data Fetching**:
    *   **Use Tanstack Query (React Query)** for managing server state, data fetching, caching, and synchronization.
    *   For local component state, use React's built-in `useState` and `useReducer` hooks.
*   **Icons**:
    *   **Use Lucide React** for all icons throughout the application.
*   **Form Handling & Validation**:
    *   **Use React Hook Form** for managing form state and submissions.
    *   **Use Zod** for schema-based form validation, integrated with React Hook Form via `@hookform/resolvers`.
*   **Date Handling**:
    *   **Use `date-fns`** for all date formatting, parsing, and manipulation tasks.
*   **Toast Notifications**:
    *   **Use Sonner** for displaying non-blocking, temporary messages to the user (e.g., success, error, info notifications).
*   **Charting & Data Visualization**:
    *   **Use Recharts** for creating interactive charts and graphs.
*   **Utility Functions**:
    *   **Use `clsx` and `tailwind-merge`** via the `cn` utility function (located in `src/lib/utils.ts`) for conditionally applying and merging Tailwind CSS classes.