# OLIPOP-inspired Soda Storefront

A responsive React + TypeScript storefront inspired by OLIPOP's brand aesthetic and product marketing style. The app includes a high-impact hero section, brand storytelling, product showcase carousel, subscription benefits, and a newsletter signup footer.

## Overview

This project recreates a modern soda storefront experience with:

- a branded top navigation bar
- a hero section with bold product messaging
- an ingredients/storytelling block
- a flavor carousel with interactive product cards
- subscription savings and perks sections
- a polished footer with email capture and social links

## Features

- Responsive layout for desktop and mobile screens
- Reusable UI components for buttons, cards, inputs, and icon text
- Interactive product carousel with previous and next controls
- Flavor-specific product cards with custom accent colors
- Clean CSS-based styling inspired by the original brand look
- Firebase hosting setup for deployment

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS
- Lucide React
- React Icons

## Dependencies

### Production dependencies

- react
- react-dom
- lucide-react
- react-icons

### Development dependencies

- @eslint/js
- @types/node
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- typescript
- typescript-eslint
- vite

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm, npm, or another package manager

### Install dependencies

```bash
pnpm install
```

### Run the app locally

```bash
pnpm dev
```

Then open the local URL shown in the terminal.

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
├── assets/                 # Product images and brand visuals
├── components/             # Reusable UI pieces
│   ├── buttons.tsx
│   ├── carousel-component.tsx
│   ├── icon-with-text.tsx
│   ├── InfoCard.tsx
│   └── input.tsx
├── App.tsx                 # Main storefront page
├── App.css                 # Page and component styling
├── index.css               # Global styles
├── main.tsx                # App entry point
└── vite-env.d.ts
```

## Deployment

The project includes Firebase hosting configuration for publishing the production build:

```bash
firebase deploy
```

Live link:

https://phemelo-react-challenge8-50cc3.web.app

## Notes

This app was built as a frontend UI challenge to translate a branded soda storefront into a reusable and responsive React experience.
