# Project Context for Claude

## What this project is

Android mobile test automation portfolio project. Built from scratch as a learning project for Jack, who is a junior QA engineer building his portfolio. The equivalent of his `playwright-portfolio` project but for mobile.

## Tech stack

- WebdriverIO v9 + Appium v3 + UiAutomator2 driver
- Mocha as the test runner
- JavaScript (not TypeScript — keep it simple for now)
- Testing against ApiDemos-debug.apk (Google's sample Android app)

## How to run

Two terminals required:

1. `npm run appium` — starts Appium server on port 4723
2. `npm test` — runs WebdriverIO tests

Emulator must be booted first.

## Environment setup (Windows)

- ANDROID_HOME must be set to `C:\Users\jackm\AppData\Local\Android\Sdk`
- adb lives at `C:\Users\jackm\AppData\Local\Android\Sdk\platform-tools\adb.exe`
- Java JDK 25 is installed
- Node v22 is installed
- Emulator: Pixel 10 virtual device in Android Studio

## Project structure

- `test/specs/` — test files
- `test/pageObjects/` — Page Object Model files, one per screen
- `apps/` — APK files
- `wdio.conf.js` — WebdriverIO config (device capabilities, test paths, timeouts)

## Teaching context

Jack is learning as he builds this. Explain things as you go. Don't rush ahead. Treat him like a junior sitting next to a senior developer. Show first, then explain why.

## Current state

- Basic framework scaffolded and working
- 3 tests passing against the ApiDemos home screen
- Page Object pattern in place
