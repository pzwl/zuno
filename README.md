![zuno screenshot](./public/images/Screenshot%202025-06-06%20072535.png)

# zuno

**zuno** is a modern web application that lets you create AI-based companions and interact with them on any topic. Whether you want to chat, learn, or explore ideas, zuno provides an engaging conversational experience powered by advanced AI.

## What is zuno?

zuno enables users to:
- **Create your own AI companions:** Customize and build digital personalities you can talk to.
- **Converse about anything:** Ask questions, seek advice, or just chat—your AI companion is always available.
- **Explore predefined subjects:** Choose from a selection of topics for guided conversations, such as learning with a talking teacher, general discussion, and more.
- **AI-powered voice interaction:** Leveraging [Vapi AI](https://vapi.ai/), zuno integrates seamless voice conversations, making your digital companions feel more real and interactive.

> **Example:** Use the built-in "Talking Teacher" to practice languages, learn new skills, or get help on various topics—just speak or type your questions!

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
- **Vapi AI** for conversational voice AI integration.
- **Vercel** deployment-ready.

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
- [`@vapi-ai/web`](https://vapi.ai/)

For a full list, see [`package.json`](./package.json).

## License

This project currently does **not** specify a license. Please add one if you intend to open source your work.

---

> **Note:** This README was generated based on current metadata and your description. For more details and updates, check the [repository root](https://github.com/pzwl/zuno).