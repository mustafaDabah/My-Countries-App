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
- [API & Services](#api--services)
- [UX & Accessibility](#ux--accessibility)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
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
### Features

- Authentication (Register / Login) via ReqRes (JWT token stored in cookies)

- Countries Dashboard: / — search (debounced), filter by region, skeleton states

- Country Details: /country/:code — full country data, border navigation

- Favorites: /favorites — managed with Zustand persist (localStorage)

- Smooth navigation: scroll restoration, top-scroll on forward navigation

- Graceful API handling for invalid searches and ambiguous HTTP responses
