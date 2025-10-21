# 🧩 Next.js PokéGrid Demo

A lightweight demo app built with **Next.js 15**, **Tailwind CSS v4**, and the [PokéAPI](https://pokeapi.co/).  
The app displays a randomized grid of Pokémon and lets you view details for each — a quick example of modern full-stack patterns using the App Router.

---

## ✨ Features

- **Server-side rendering (App Router)** for dynamic content
- **Dynamic routes** — `/pokemon/[id]` detail pages
- **Responsive layout** via Tailwind CSS
- **Graceful API error handling** using `Promise.allSettled`
- **Clean alias imports** (`@lib`, `@components`)
- **Fast local dev setup** using `pnpm`

---

## 🧠 Design Notes

- **Next.js 15 App Router** with `export const dynamic = 'force-dynamic'` ensures new randomized Pokémon on each refresh.
- **PokéAPI** data is fetched server-side for performance and SEO.
- **`Promise.allSettled`** provides fault tolerance — failed fetches don’t break the grid.
- **Tailwind v4** handles styling and responsive layout.
- **Minimal dependencies** keep the project lightweight and easy to review.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Package Manager | pnpm (preferred) |
| API | PokéAPI |
| Hosting (optional) | Vercel |

> 💡 **Note:** `pnpm` is preferred for deterministic installs and disk efficiency.  
> If you don’t have it, install globally with:
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
