# Workflow repo for the CA

## Setup

Install dependencies and Playwright browsers:

```sh
npm install
npx playwright install
```

Copy `.env.example` to `.env` and fill in these variables with valid Noroff API account credentials:

- `TEST_EMAIL`
- `TEST_PASSWORD`

You can create an account using the application's registration form. `.env` is ignored by Git.

## Run the application

```sh
npm start
```

Open http://127.0.0.1:3000.

## Scripts

- `npm start`: Serve the application locally.
- `npm run dev`: Rebuild Tailwind CSS and watch for changes.
- `npm test`: Run Vitest unit tests in watch mode.
- `npm test -- --run`: Run unit tests once.
- `npm run test:e2e`: Run Playwright tests in Chromium, Firefox, and WebKit.
- `npm run prepare`: Set up Husky hooks. This also runs during `npm install`.

## Code quality

```sh
npx eslint .
npx prettier . --check
```

To format files:

```sh
npx prettier . --write
```

Before commits, Husky runs lint-staged to format staged HTML files and format and lint staged JavaScript files.

## Tests

Unit tests cover `isActivePath` and `getUsername`, including empty user storage. Vitest uses jsdom and only runs `js/**/*.test.js`.

End-to-end tests cover successful login using environment variables, an error message for invalid credentials, and navigation from the home page to the first venue's details page.

The login and navigation tests use the live Noroff API and require an internet connection. Playwright starts the local server automatically.

## AI assistance

See `AI_LOG.md` for the documented use of AI assistance.
