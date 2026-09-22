# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # OLIPOP Soda Storefront

  An OLIPOP-inspired responsive storefront built with React, TypeScript, and Vite. The website presents a colorful soda brand experience with product discovery, subscription benefits, and newsletter signup sections.

  ## Website Overview

  The page includes:

  - A responsive navigation bar with shop, store locator, learning, and subscription actions
  - A hero section introducing OLIPOP as "A New Kind Of Soda"
  - An ingredients story section explaining the brand's approach to better soda
  - An interactive product carousel featuring multiple OLIPOP flavors
  - Subscription benefits including savings, early flavor access, free shipping, and flexible orders
  - A subscription call-to-action section
  - A footer with email signup, flavor links, information links, and social media icons

  ## Features

  - Responsive layouts for desktop, tablet, and mobile screens
  - Reusable React components for buttons, information cards, icon-text features, inputs, and the product carousel
  - Smooth horizontal carousel navigation with previous and next controls
  - Product image fallback when an image cannot be loaded
  - Hover, focus, and disabled states for interactive controls
  - Product cards with flavor-specific colors and pricing pills

  ## Built With

  - React 19
  - TypeScript
  - Vite
  - Plain CSS
  - Lucide React
  - React Icons

  ## Getting Started

  ### Requirements

  - Node.js 18 or newer
  - pnpm, npm, or another compatible package manager

  ### Installation

  ```bash
  pnpm install
````

### Run the development server

```bash
pnpm dev
```

Open the local URL shown in the terminal to view the website.

### Create a production build

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

## Project Structure

```text
src/
├── assets/       # Product, brand, and promotional images
├── components/   # Reusable UI components
├── App.tsx       # Main storefront page
├── App.css       # Page and component styling
└── index.css     # Global styles
```

## Project Purpose

This project was created as a React and TypeScript UI challenge focused on translating a visual soda storefront design into a responsive, reusable frontend experience.
