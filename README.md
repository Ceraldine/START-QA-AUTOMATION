# Swag Labs Playwright Tests

[![Playwright Tests](https://github.com/Ceraldine/START-QA-AUTOMATION/actions/workflows/playwright.yml/badge.svg)](https://github.com/Ceraldine/START-QA-AUTOMATION/actions)

End-to-end test automation for [saucedemo.com](https://www.saucedemo.com) using Playwright and the Page Object Model.

## Tech stack

- Playwright (Chromium, Firefox, WebKit)
- JavaScript (CommonJS)
- GitHub Actions for CI
- Reporters: HTML, JUnit, Allure

## Project structure

```
tests/       test cases (login, cart, checkout)
pages/       Page Object Model classes
fixtures/    test data (users.json)
utils/       helper functions
.github/workflows/   CI configuration
```

## Run locally

```
npm install
npx playwright install
npm test
npm run report
```

## CI

Tests run automatically on every push and pull request. Reports (Playwright HTML, JUnit, Allure) are uploaded as artifacts on each run.
## Allure report

https://ceraldine.github.io/START-QA-AUTOMATION/
