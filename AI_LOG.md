# AI Usage log

All entries in this log refer to assistance from ChatGPT.
ChatGPT also helped draft this log and the README, which I reviewed and edited.

## 7 October 2026

- Purpose: Understand forks, Git commands, npm installation, and npm audit output.
- Assistance: Step by step guidance and explanation of terminal output, dependency updates, and Tailwind watch process.
- Outcome: I created and pushed the workflow branch, updated dependencies, and restored the generated CSS file.

## 9 October 2026

- Purpose: Help understand ESlint and Prettier configuration, Node settings for the Tailwind config.
  And a ESlint error about an unused initial value in `typeClasses`.
- Assistance: Explanations, configuration examples, and terminal commands.
- Outcome: I entered the changes and ran the checks. ESlint reported no errors, and Prettier confirmed that the formatting passed.

## 13 October 2026

- Purpose: Understand how to configure Husky and lint-staged
- Assistance: Configuration examples, terminal commands and explanation of pre-commit and staged files.
- Outcome: I configured the hook and ran lint-staged on staged HTML and JavaScript files. Formatting and linting passed.

## 13 October 2026

- Purpose: Learn unit testing with Vitest and configure jsdom.
- Assistance: Test scaffolding, explanations of assertions and test isolation, feedback on my tests, and debugging configuration placement and null destructuring in getUsername.
- Outcome: I wrote five isActivePath tests and two getUsername tests with guidance. All seven passed. I applied the suggested null-handling fix in getUsername.

## 13 October 2026 End to end testing

- Purpose: Configure Playwright and understand login and navigation tests.
- Assistance: Explanations in Norwegian of Playwright concepts and test steps, configuration examples, feedback on my attempts, and debugging specific errors. Debugging included corrected code examples based on my attempts.
- Outcome: All nine end to end tests passed across Chromium, Firefox and WebKit.

## 15 october 2026 Plywright trouble shooting

- Purpose: Network errors during end to end tests.
- Assistance: Help interpreting errors and configure Playwright to use one worker.
- Outcome: All nine tests passed with one worker. I updated the configuration to run one test at a time. The cause of the earlier network errors was not confirmed.
