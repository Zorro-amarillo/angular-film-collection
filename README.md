# 🎬 Film Collection

A small movie catalog application built with Angular 20+ as an introductory project to core Angular concepts: standalone components, routing, directives, pipes and signals.

> **Note:** This project uses Angular Signals for all reactivity. No RxJS.

## ✨ Features

- **Film Catalog** - displays all films from mock data
- **Real-time Search** - filter films by title in real-time
- **Favorites** - add/remove films to favorites list
- **Film Details** - view complete film information
- **Breadcrumbs** - navigate through pages with clickable links
- **404 Page** - handles unknown routes
- **Autofocus** - search input is automatically focused on page load

## 🛠️ Tech Stack

- Angular 20+ (standalone components, no NgModules)
- TypeScript (strict mode)
- Angular Signals (signal, computed, input, output)
- Angular Router with new control flow (@if, @for)
- Plain CSS/SCSS for styling (no UI libraries)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.dev/tools/cli) installed globally:

```
npm install -g @angular/cli
```

## 🌿 Branches & Review Guide

| Branch | Description |
|--------|-------------|
| `dev` | Core features - completed before the deadline |
| `dev-part2` | **Full version** - includes all features (`dev` + post-deadline improvements) |

> **For review:**

&gt; The `dev` branch contains the version completed before the deadline.

&gt; The `dev-part2` branch contains the complete version of the project.

## 🚀 Getting Started

### ⚙️ Installation

1. To run the latest version:

```bash
git clone https://github.com/Zorro-amarillo/angular-film-collection.git
cd angular-film-collection
git checkout dev-part2
npm install
npm start
```

2. Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/).
The application will automatically reload if you change any of the source files.

## 📜 Available Scripts

| Script   | Command                                               | Description                                              |
| -------- | ----------------------------------------------------- | -------------------------------------------------------- |
| `start`  | `ng serve`                                            | Starts the development server at `http://localhost:4200` |
| `build`  | `ng build`                                            | Compiles the application for production                  |
| `watch`  | `ng build --watch --configuration development`        | Builds in watch mode (rebuilds on file changes)          |
| `test`   | `ng test`                                             | Runs unit tests                   |
| `lint`   | `ng lint`                                             | Runs ESLint to check code for errors and style issues    |
| `format` | `prettier --write "src/**/*.{ts,html,scss,css,json}"` | Formats all source files with Prettier                   |

## 👤 Author

Yana Malakhova

GitHub: [@zorro-amarillo](https://github.com/Zorro-amarillo)

Year: 2026

This project was created as an assignment for the [Rolling Scopes School Angular course](https://rs.school/courses/angular).
