# 🐦 Twitter Clone 🐦

An **Open Source Project** made by the Gentleman Programming Community.

## Table of contents

- [Table of contents](#table-of-contents)
- [How to contribute?](#how-to-contribute?)
- [Run Locally](#run-locally)
- [Scripts](#scripts)
  - [Web App](#web-app)
  - [Mobile App](#mobile-app)
  - [Code Quality](#code-quality)
  - [Tests](#tests)
- [About this project](#about-this-project)
  - [Tech Stack](#tech-stack)
  - [Tools](#tools)
  - [Project Workspaces](#project-workspaces)
  - [Atomic Design Approach](#atomic-design-approach)

# How to contribute?

If you want to contribute to this repository, simply follow our [contributing guidelines](CONTRIBUTING.md) and you will be good to go.

## Run Locally

Clone the project

```bash
  git clone https://github.com/adonyssantos/gentleman-community-twitter-clone twitter-clone
```

Go to the project directory

```bash
  cd twitter-clone
```

Install dependencies

```bash
  yarn
```

Create the `.env` file (Use the `.env.example` as a reference):

```bash
cp .env.example .env
```

## Scripts

### Web App

- `yarn web`: Runs the development server for the web application.
- `yarn web:build`: Builds the production-ready bundle for the web application.
- `yarn web:preview`: Opens a preview of the web application in a browser.

### Mobile App

- `yarn mobile`: Runs the development server for the mobile application.
- `yarn mobile:ios`: Runs the iOS version of the mobile application.
- `yarn mobile:android`: Runs the Android version of the mobile application.

### Code Quality

- `yarn format:check`: Checks the codebase for formatting issues without making any changes.
- `yarn format:fix`: Fixes formatting issues in the codebase automatically.
- `yarn lint:check`: Checks the codebase for linting errors without making any changes.
- `yarn lint:fix`: Fixes linting errors in the codebase automatically.

### Tests

- `yarn client:test`: Runs tests for the client-side code.
- `yarn server:test`: Runs tests for the server-side code.
- `yarn test`: Runs all tests in the project.


## About this project

This projects involves the use of several technologies.

### Tech Stack

- Class Variance Authority
- Expo
- Prisma
- React Native Web
- React Query
- React Universal Tailwind
- Supabase
- tRPC
- TypeScript
- Vite
- Zod

### Tools

- ESLint
- Jest
- Lerna
- Nx
- Prettier
- Testing Library
- Vitest

### Project Workspaces

The following table shows the project's workspaces.

| Name             | Path             | Description                 |
| ---------------- | ---------------- | --------------------------- |
| `✨ root`         | /                | The project's absolute path |
| `🚀 mobile`       | /apps/mobile     | Mobile app                  |
| `🚀 web`          | /apps/web        | Web app                     |
| `📦 @root/client` | /packages/client | Client package              |
| `📦 @root/server` | /packages/server | Server package              |
| `📦 @root/shared` | /packages/shared | Shared packages             |
| `📦 @root/types`  | /packages/types  | Types packages              |
| `📦 @root/ui`     | /packages/ui     | UI packages                 |

### Atomic Design Approach

The Atomic Design methodology involves the following steps:

1. **Atoms**: Design and define the smallest UI elements, such as buttons, form fields, icons, and typography styles.
2. **Molecules**: Atoms are combined to create more complex components that fulfill specific functions, such as a search bar or navigation menu.
3. **Organisms**: Organisms build larger-scale components by combining molecules and atoms. These organisms represent complete sections of the website, such as a header or footer.
4. **Templates**: Finally, organisms are combined to create complete web page layouts that can be reused across the website. Templates provide a consistent structure and visual coherence.
