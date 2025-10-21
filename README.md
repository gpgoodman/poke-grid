# 🧩 Next.js PokéGrid Demo

A lightweight demo app built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and the [PokéAPI](https://pokeapi.co/).  
The app displays a randomized grid of Pokémon and lets you view details for each — a quick example of modern full-stack patterns using the App Router.

---

## 🔗 Live Demo
https://poke-grid-five.vercel.app


## ✨ Features

- **Server-side rendering (App Router)** for dynamic content
- **TypeScript** with strict mode and clear helper types (`Pokemon`, `Species`, etc.)
- **Dynamic routes** — `/pokemon/[id]` detail pages
- **Responsive layout** via Tailwind CSS
- **Graceful API error handling** using `Promise.allSettled`
- **Clean alias imports** (`@lib`, `@components`)
- **Fast local dev setup** using `pnpm`

---

## 🧠 Design Notes

- **Next.js 15 App Router** with `export const dynamic = 'force-dynamic'` ensures new randomized Pokémon on each refresh
- **PokéAPI** data fetched server-side for performance/SEO
- **`Promise.allSettled`** provides lightweight fault tolerance
- **Tailwind v4** for utility-first styling
- **Minimal dependencies** to keep review focused on code structure

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Package Manager | pnpm (preferred) |
| API | PokéAPI |
| Hosting (optional) | Vercel |

> 💡 **Note:** `pnpm` is preferred for deterministic installs and disk efficiency.  
> Install globally if needed:
> ```bash
> npm install -g pnpm
> ```

---

## 🚀 Running Locally

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
