# Country Explorer

> A clean, responsive single-page application (React + TypeScript) to explore countries using the REST Countries API.  
> Includes authentication (ReqRes), country search & filters, country detail pages, favorites (Zustand + local persistence), and production-grade UX polish.

---

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technical Decisions](#technical-decisions)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Introduction

**Country Explorer** is a single-page application built with **React + TypeScript** that allows users to discover countries, search and filter them by region, view detailed country information, and mark countries as favorites. Authentication is provided via the ReqRes demo API. The app demonstrates clean architecture, good developer experience, and production-minded UX features (debounced search, persisted favorites, scroll restoration, graceful error handling, skeleton loaders, and responsive design).

---

## Setup
### Requirements

- Node.js v20+ (or compatible)
- npm or yarn

### Install & Run (development)

```bash
# Clone repository
git clone git@github.com:mustafaDabah/My-Countries-App.git
cd my-countries-app

# Install dependencies
npm install

# Create .env.local
# At minimum:
# VITE_AUTH_API_KEY=reqres-free-v1

# Start dev server
npm run dev

# Build the app 
npm run build 

# stare preview production app 
npm run preview

```
---
## Features

- Authentication (Register / Login) via ReqRes (JWT token stored in cookies)

- Countries Dashboard: / — search (debounced), filter by region, skeleton states

- Country Details: /country/:code — full country data, border navigation

- Favorites: /favorites — managed with Zustand persist (localStorage)

- Smooth navigation: scroll restoration, top-scroll on forward navigation

- Graceful API handling for invalid searches and ambiguous HTTP responses

---
## Folder Structure

The project is organized with a feature-first + domain-based structure, separating core app logic, reusable UI components, and page-level screens for clarity and scalability.

```
public/
 └─ assets/                    # Static files (images, icons, etc.)

src/
 ├─ app/                       # Core app logic and domain layers
 │   ├─ api/                   # Axios clients and API configurations
 │   ├─ hooks/                 # Reusable React hooks (e.g., useDebounce, useCountries)
 │   ├─ routes/                # Centralized route definitions and navigation helpers
 │   ├─ services/              # API service layers (countriesService, authService)
 │   ├─ store/                 # Zustand stores (favorites, UI state, etc.)
 │   ├─ utils/                 # Shared utility functions (formatters, constants)
 

 ├─ components/                # Reusable, self-contained UI components
 │   ├─ countries/             # Components related to country listing (CountryCard, SearchAndFilter, etc.)
 │   ├─ country/               # Components for single country details (info sections, borders navigation)
 │   ├─ favourites/            # Components related to favorites (favorites grid.)
 │   ├─ layout/                # App layout components (Navbar, ScrollToTop)
 │   └─ ui/                    # Generic UI primitives (Input, Select, Button, etc.)

 ├─ pages/                     # Route-based pages (each folder = one route)
 │   ├─ Countries/             # Main countries dashboard
 │   ├─ CountryDetails/        # Single country details screen
 │   ├─ Favorites/             # Favorites management screen
 │   └─ Auth/                  #  Login / Register pages

 ├─ styles/                    # Global and theme styles (Tailwind config, variables, base styles)
 │   └─ index.css

 ├─ App.tsx                    # Root component defining routes and layout
 └─ main.tsx                   # Application entry point (ReactDOM.createRoot)
```
---

## Technical Decisions

- Debounce search: avoid excessive API calls (custom useDebounce hook, 500ms default).

- React Query for data fetching and caching (staleTime tuned for lists/details).

- Zustand with persist for favorites (lightweight, reactive store).

- Axios factory (createApiClient) and typed error parsing, token interceptor.

- Virtualization / lazy loading: using virtua (since API has no pagination). to improve the performance of page.

- Theme toggle (Dark/Light) and persist preference

- Scroll restoration: history-aware scroll save/restore (handles mobile back/forward).

- Graceful error handling: treat 300/4xx search anomalies as “no results” not hard errors.

---

## Future Improvements

🗂️ Offline Mode:
Use IndexedDB or service workers to cache country data for offline browsing.

🔒 Secure API Access:
Add access token & refresh token flow for the Countries API.

💾 Persist Favorites Online:
Store favorite countries in a real database linked to user accounts.

🧪 Unit & Integration Tests:
Add tests for hooks, Zustand store, and core user flows.

---

## Author

Mustafa Dabah — Senior Frontend Developer

Email: mustafadabah5555@gmail.com

Website: https://www.mustafadabah.com

LinkedIn: https://www.linkedin.com/in/mustafa-dabah-ab58661a3
