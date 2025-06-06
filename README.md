# zuno

[![Homepage](https://zuno-virid.vercel.app)](https://zuno-virid.vercel.app)

zuno is a TypeScript-based project, likely a web application powered by [Next.js](https://nextjs.org/) and [React](https://react.dev/). This repository includes opinionated tooling for linting, form validation, authentication, and UI components, making it a modern full-stack application starter or template.

> **Note:** There is already a `README.md` in the repository. The information below is generated based on the available project metadata, but you may wish to merge or update the existing file.

---

## Features

- **Next.js 15** for server-side rendering and modern React features.
- **TypeScript** for type-safe JavaScript development.
- **React 19** as the UI library.
- **Tailwind CSS 4** for utility-first styling.
- **Supabase** for backend and database integration.
- **Clerk** for authentication.
- **Radix UI** for accessible, unstyled UI primitives.
- **Zod** and **React Hook Form** for form validation.
- **Lottie-react** for animations.
- **Vercel** deployment-ready (see [homepage](https://zuno-virid.vercel.app)).

## Getting Started

### Prerequisites

- Node.js 20+
- npm (comes with Node.js) or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/pzwl/zuno.git
cd zuno
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build & Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

### Linting

Run the linter:

```bash
npm run lint
# or
yarn lint
```

## Project Structure

- `app/` — Main application routes and logic
- `components/` — React UI components
- `constants/` — Shared constants
- `lib/` — Library code and utilities
- `public/` — Static files
- `types/` — TypeScript type definitions

## Configuration

- `next.config.ts` — Next.js configuration
- `tailwind.config.js` & `postcss.config.mjs` — Tailwind and PostCSS setup
- `eslint.config.mjs` — ESLint rules

## Main Dependencies

- [`next`](https://nextjs.org/)
- [`react`](https://react.dev/)
- [`tailwindcss`](https://tailwindcss.com/)
- [`@clerk/nextjs`](https://clerk.dev/)
- [`@supabase/supabase-js`](https://supabase.com/docs/reference/javascript)
- [`@radix-ui/react-*`](https://www.radix-ui.com/)
- [`zod`](https://zod.dev/)
- [`react-hook-form`](https://react-hook-form.com/)

For a full list, see [`package.json`](./package.json).

## License

This project currently does **not** specify a license. Please add one if you intend to open source your work.

---

> **Note:** This README was generated based on current metadata. For more details and updates, check the [repository root](https://github.com/pzwl/zuno).