# The Workshop

I've built this set of pages to represent a fantasy workshop. It is a responsive React storefront for handcrafted tools, curiosities, and workshop-made goods. It demonstrates client-side routing, reusable shadcn/ui components, responsive Tailwind CSS layouts, persistent Zustand state, and light/dark theme support.

## Quick Start

### Requirements

You will need:

- Node.js 18 or newer
- npm
- Git, if cloning the repository

### Download the project

```bash
git clone https://github.com/SolarianVulpine/ThemedResponsiveApp.git
cd ThemedResponsiveApp/code/start
```

If the project was downloaded as a ZIP file, extract it and open a terminal in `ThemedResponsiveApp/code/start`.

### Launch Docker & DevContainer

Have Docker engine running and reopen workspace in container.
Found quickly from the menu pulled up by clicking the stacked `><` in the bottom-most left-most corner

### Install dependencies

Once inside container run:
```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

If run too many times consecutively it may run on:

```text
http://localhost:5174
```

The development server supports hot module replacement, so changes appear in the browser as files are edited.

## Available Commands

Run these commands from `code/start`:

| Command           | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the Vite development server                    |
| `npm run build`   | Type-check the project and create a production build |
| `npm run lint`    | Run ESLint across the source tree                    |
| `npm run preview` | Preview the production build locally                 |

To preview a production build:

```bash
npm run build
npm run preview
```

## Application Features

### Home page

The home page provides:

- A workshop hero image and introduction
- A link to the product collection
- Featured products
- A workshop calendar section for making consultation appointments
- Responsive nav and footer navigation

### Products page

The products page provides:

- Six product categories: Swords, Shields, Armor, Potions, Scrolls, and Accessories
- Thirty-six catalog products total with prices and descriptions
- Category filtering
- Search-aware product results through the navbar search field
- Responsive product cards
- Add-to-cart controls
- Categories list changes orientation on smaller screens
- Multi-column product grids on larger screens

### Cart page

The cart supports:

- Viewing selected products
- Increasing or decreasing quantities
- Removing individual products
- Automatic item counts
- Automatic subtotal calculation
- An empty-cart state with a link back to Products
- A responsive order summary

### About page

The About page includes:

- the workshop story with brief history content
- frequently asked questions structured as an accordion
- contact form

### Navigation and themes

- React Router provides navigation between Home, Products, About, and Cart.
- The responsive navbar collapses into a mobile menu on smaller screens.
- The cart count appears in the navbar.
- The theme toggle switches between light and dark modes.
- Cart contents and theme selection persist in browser storage between sessions.
- Search bar is dynamic and sends user to search results from any page

## Routes

| URL         | Page                            |
| ----------- | ------------------------------- |
| `/`         | Home                            |
| `/products` | Product collection              |
| `/about`    | Workshop story and contact form |
| `/cart`     | Shopping cart                   |

## Technology

- React 19
- TypeScript
- Vite
- React Router
- Zustand
- Tailwind CSS v4
- shadcn/ui-style components
- Radix UI primitives
- Lucide React icons

## Project Structure

```text
code/start/
├── public/                 Static assets
├── src/
│   ├── components/         Reusable UI and feature components
│   ├── data/               Product catalog data
│   ├── lib/                Shared utility functions
│   ├── pages/              Route-level page components
│   ├── stores/             Persistent cart and theme state
│   └── types/              TypeScript domain types
├── index.html
├── package.json
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.ts
```

## Theming

I chose the theme colors to represent the hero image of the workshop.

Theme colors are defined as semantic CSS variables in `src/index.css`. The application uses semantic utility classes such as `bg-background`, `bg-card`, `text-foreground`, `bg-primary`, and `text-muted-foreground` so the same components work in both modes.

The selected theme is persisted under the `workshop-theme` browser storage key. Cart data is persisted under `workshop-cart`.

## Verification

Before submitting changes, run:

```bash
npm run lint
npm run build
```

Then manually verify:

1. Each navbar link opens the expected route.
2. The theme toggle changes both light and dark mode styling.
3. Product category filtering updates the visible products.
4. Adding a product updates the navbar cart count.
5. Cart quantity changes and item removal update the summary.
6. The layout remains usable on desktop and mobile widths.

## Notes for Author

- Work from `code/start` when running npm commands.
- Keep shared shadcn primitives in `src/components/ui`.
- Keep product data in `src/data`, stores in `src/stores`, and route-level views in `src/pages`.
- Prefer semantic theme classes over hard-coded colors so light and dark mode remain consistent.
