# Sertifi Automation

### Run commands
```bash
# Playwright installation
npm install -D @playwright/test@latest
npx playwright install --with-deps
npx playwright --version

# Run tests
npx playwright test
npx playwright test --project=chromium
npx playwright test --project webkit --project firefox
npx playwright test --project=chromium --trace on
npx playwright test --project=chromium --debug
npx playwright test --project=chromium --headed
npx playwright test -g "login"
npx playwright test --ui

# Show report
npx playwright show-report
```
